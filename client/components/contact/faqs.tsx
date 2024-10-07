import React from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const FAQs = () => {
	const faqContent = [
		{
			question: 'What is a Phonocardiogram (PCG)?',
			answer: 'A Phonocardiogram (PCG) is a graphical representation of the sounds made by the heart during a cardiac cycle. It records the acoustic signals produced by the mechanical activity of the heart, including valve closures and blood flow, using a digital stethoscope or similar device.',
		},
		{
			question: 'How does adaptive filtering improve PCG signals?',
			answer: 'Adaptive filtering improves PCG signals by dynamically adjusting filter parameters to reduce noise and enhance the desired heart sound components. This technique can adapt to varying noise conditions and patient-specific characteristics, potentially providing clearer and more informative heart sound recordings compared to traditional fixed filtering methods.',
		},
		{
			question:
				'What are the potential applications of this PCG signal analysis project?',
			answer: 'The potential applications of this project include: 1) Enhancing telemedicine capabilities for remote cardiac assessments, 2) Improving the accuracy of wearable health devices that monitor heart sounds, 3) Assisting in clinical diagnostics by providing clearer heart sound recordings, and 4) Potentially aiding in the early detection of cardiac abnormalities through improved signal quality.',
		},
		{
			question: 'What is the Least Mean Squares (LMS) algorithm?',
			answer: 'The Least Mean Squares (LMS) algorithm is an adaptive filtering technique used in our project. It works by iteratively adjusting filter coefficients to minimize the mean square error between the desired signal and the filter output. LMS is computationally efficient and can adapt to changing signal characteristics, making it suitable for real-time PCG signal processing.',
		},
		{
			question:
				'Can this technology replace traditional cardiac diagnostic tools?',
			answer: 'While our PCG signal analysis technology shows promise in enhancing heart sound clarity, it is not intended to replace traditional cardiac diagnostic tools. Rather, it aims to complement existing methods by providing improved signal quality for auscultation and potentially enabling more accurate digital analysis of heart sounds. Always consult with healthcare professionals for proper cardiac diagnostics and interpretation.',
		},
		{
			question:
				'What kind of noise does the adaptive filter remove from PCG signals?',
			answer: 'Our adaptive filtering approach is designed to remove various types of noise from PCG signals, including: 1) Environmental noise (e.g., room sounds, equipment hum), 2) Physiological noise (e.g., breath sounds, muscle artifacts), 3) Motion artifacts from patient movement, and 4) Baseline wander and low-frequency disturbances. The adaptive nature of the filter allows it to adjust to different noise characteristics in real-time.',
		},
		{
			question:
				'Is the software open-source? Can I use it for my own projects?',
			answer: 'Currently, our PCG signal analysis software is a research project and not open-source. However, we have provided code snippets of basic LMS filter implementations in MATLAB and Python, which you can use as a starting point for your own projects. We are considering open-sourcing parts of our work in the future, so stay tuned for updates.',
		},
		{
			question:
				'What are the system requirements for running the PCG analysis software?',
			answer: 'The exact system requirements depend on the specific implementation and the scale of data being processed. Generally, our software can run on standard modern computers with a multi-core CPU and at least 8GB of RAM. For real-time processing of high-resolution PCG signals, a more powerful system may be beneficial. The software is currently developed and tested on Windows and Linux operating systems.',
		},
		{
			question:
				'How accurate is the adaptive filtering in improving PCG signals?',
			answer: "The accuracy of our adaptive filtering approach can vary depending on the quality of the input signal and the nature of the noise. In our tests, we've observed an average Signal-to-Noise Ratio (SNR) improvement of 8.5 dB. However, it's important to note that the effectiveness can differ for each specific case. We're continuously working on improving the algorithm's performance and robustness across a wide range of scenarios.",
		},
		{
			question:
				'Are there any plans to integrate this technology with machine learning or AI?',
			answer: "Yes, integrating machine learning and AI techniques is part of our future plans. We're exploring the use of neural networks to automatically adjust filter parameters based on input signal characteristics. We're also investigating the potential of using deep learning for feature extraction and classification of heart sounds, which could enhance the diagnostic capabilities of our system.",
		},
	];

	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:p-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Frequently Asked Questions
			</h2>
			<Accordion type='single' collapsible className='mt-10'>
				{faqContent.map((item, index) => (
					<AccordionItem
						key={`faq-item-${index}`}
						value={item.question}
						className='border-b'
					>
						<AccordionTrigger>{item.question}</AccordionTrigger>
						<AccordionContent>{item.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default FAQs;
