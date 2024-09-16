import React from 'react';
import Link from 'next/link';

import TeamMemberCard from '../team/team-card';

import { STUDENT_TEAM } from '@/constants/team';

const TeamMembers = () => {
	return (
		<section className='w-full bg-background'>
			<div className='max-w-screen-xl mx-auto p-6 md:p-16 flex flex-col'>
				<h2 className='font-heading font-semibold text-3xl text-center'>
					Meet our Team
				</h2>
				<div className='mt-10 w-full grid grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-10'>
					{STUDENT_TEAM.map((member) => (
						<TeamMemberCard key={member.slug} member={member} />
					))}
				</div>
				<Link
					href='/team'
					className='ml-auto w-fit mt-5 hover:underline'
				>
					View All Team Members
				</Link>
			</div>
		</section>
	);
};

export default TeamMembers;
