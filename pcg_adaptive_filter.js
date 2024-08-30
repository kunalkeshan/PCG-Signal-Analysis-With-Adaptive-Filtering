

class AdaptiveFilter {
  constructor(filterLength, stepSize, numStages = 1) {
    this.filterLength = filterLength;
    this.stepSize = stepSize;
    this.numStages = numStages;
    this.weights = Array(numStages).fill().map(() => new Array(filterLength).fill(0));
  }

  lmsUpdate(x, d, stage) {
    const y = d3.sum(x.map((xi, i) => xi * this.weights[stage][i]));
    const e = d - y;
    this.weights[stage] = this.weights[stage].map((w, i) => w + this.stepSize * e * x[i]);
    return [y, e];
  }

  signLmsUpdate(x, d, stage) {
    const y = d3.sum(x.map((xi, i) => xi * this.weights[stage][i]));
    const e = d - y;
    this.weights[stage] = this.weights[stage].map((w, i) => w + this.stepSize * Math.sign(e) * x[i]);
    return [y, e];
  }

  process(x, d) {
    const N = x.length;
    const y = new Array(N).fill(0);
    const e = new Array(N).fill(0);

    for (let n = this.filterLength; n < N; n++) {
      const x_n = x.slice(n - this.filterLength, n).reverse();
      let d_n = d[n];

      for (let stage = 0; stage < this.numStages; stage++) {
        const [y_n, e_n] = stage % 2 === 0 ? this.lmsUpdate(x_n, d_n, stage) : this.signLmsUpdate(x_n, d_n, stage);
        d_n = e_n;  // Use error as input for next stage
      }

      y[n] = d_n;
      e[n] = d[n] - d_n;
    }

    return [y, e];
  }
}

function generatePcgSignal(N) {
  const t = d3.range(0, 10, 10 / N);
  return t.map(ti => Math.sin(2 * Math.PI * 1 * ti) + 0.5 * Math.sin(2 * Math.PI * 2 * ti));
}

function addNoise(signal, snrDb) {
  const signalPower = d3.mean(signal.map(s => s * s));
  const noisePower = signalPower / (10 ** (snrDb / 10));
  const noise = d3.range(signal.length).map(() => d3.randomNormal(0, Math.sqrt(noisePower))());
  return signal.map((s, i) => s + noise[i]);
}

function calculateSnr(clean, noisy) {
  const signalPower = d3.mean(clean.map(s => s * s));
  const noisePower = d3.mean(clean.map((s, i) => (s - noisy[i]) ** 2));
  return 10 * Math.log10(signalPower / noisePower);
}

function main() {
  const N = 1000;
  const filterLength = 32;
  const stepSize = 0.01;
  const numStages = 2;

  // Generate synthetic PCG signal and add noise
  const cleanSignal = generatePcgSignal(N);
  const noisySignal = addNoise(cleanSignal, 10);

  // Create and apply adaptive filter
  const adaptiveFilter = new AdaptiveFilter(filterLength, stepSize, numStages);
  const [filteredSignal, error] = adaptiveFilter.process(noisySignal, cleanSignal);

  // Calculate SNR improvement
  const inputSnr = calculateSnr(cleanSignal, noisySignal);
  const outputSnr = calculateSnr(cleanSignal, filteredSignal);

  console.log(`Input SNR: ${inputSnr.toFixed(2)} dB`);
  console.log(`Output SNR: ${outputSnr.toFixed(2)} dB`);
  console.log(`SNR Improvement: ${(outputSnr - inputSnr).toFixed(2)} dB`);

  // Plot results
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const x = d3.scaleLinear().range([0, width]);
  const y = d3.scaleLinear().range([height, 0]);

  const line = d3.line()
    .x((d, i) => x(i))
    .y(d => y(d));

  const svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  x.domain([0, N - 1]);
  y.domain([d3.min(cleanSignal.concat(noisySignal, filteredSignal)),
  d3.max(cleanSignal.concat(noisySignal, filteredSignal))]);

  svg.append("path")
    .datum(cleanSignal)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  svg.append("path")
    .datum(noisySignal)
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  svg.append("path")
    .datum(filteredSignal)
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width", 1.5)
    .attr("d", line);

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

  svg.append("g")
    .call(d3.axisLeft(y));

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom)
    .style("text-anchor", "middle")
    .text("Sample");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Amplitude");
}

main();