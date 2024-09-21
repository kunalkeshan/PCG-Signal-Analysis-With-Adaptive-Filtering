import Hero from '@/components/project/hero';
import TechnicalDetails from '@/components/project/technical-details';
import CodeSnippets from '@/components/project/code-snippets';
import ResultsAndAnalysis from '@/components/project/results-and-analysis';

export default function Project() {
	return (
		<main>
			<Hero />
			<TechnicalDetails />
			<CodeSnippets />
			<ResultsAndAnalysis />
		</main>
	);
}
