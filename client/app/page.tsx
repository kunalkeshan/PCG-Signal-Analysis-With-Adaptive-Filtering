// Dependencies
import Hero from '@/components/home/hero';
import ProjectOverview from '@/components/home/project-overview';
import KeyFeatures from '@/components/home/key-features';
import TeamMembers from '@/components/common/team-members';
import Reports from '@/components/home/reports';
import Resources from '@/components/home/resources';

/**
 * Landing page composition for the client site.
 *
 * This page aggregates the primary home sections in a single layout to keep
 * navigation and ordering consistent across the marketing content.
 */
export default function Home() {
	return (
		<main>
			<Hero />
			<ProjectOverview />
			<KeyFeatures />
			<TeamMembers />
			<Reports />
			<Resources />
		</main>
	);
}
