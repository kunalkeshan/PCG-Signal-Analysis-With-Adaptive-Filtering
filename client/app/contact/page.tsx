import Hero from '@/components/contact/hero';
import TeamMembers from '@/components/common/team-members';
import Location from '@/components/contact/location';
import FAQs from '@/components/contact/faqs';

export default function Contact() {
	return (
		<main>
			<Hero />
			<TeamMembers />
			<Location />
			<FAQs />
		</main>
	);
}
