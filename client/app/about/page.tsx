import Hero from '@/components/about/hero';
import ProjectBackground from '@/components/about/project-background';
import Objectives from '@/components/about/objectives';
import Methodology from '@/components/about/methodology';
import ExpectedOutcomes from '@/components/about/expected-outcomes';

export default function About() {
	return (
		<main>
			<Hero />
			<ProjectBackground />
			<Objectives />
			<Methodology />
			<ExpectedOutcomes />
		</main>
	);
}
