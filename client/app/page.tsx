// Dependencies
import Hero from '@/components/home/hero';
import ProjectOverview from '@/components/home/project-overview';
import KeyFeatures from '@/components/home/key-features';
import TeamMembers from '@/components/common/team-members';
import Resources from '@/components/home/resources';

export default function Home() {
	return (
		<main>
			<Hero />
			<ProjectOverview />
			<KeyFeatures />
			<TeamMembers />
			<Resources />
		</main>
	);
}
