import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { TeamMember } from '@/constants/team';
import { cn } from '@/lib/utils';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	member: TeamMember;
}

const TeamMemberCard: React.FC<Props> = ({ member, className, ...props }) => {
	return (
		<div
			className={cn(
				'rounded-2xl w-full border border-dim-greys p-4 lg:p-6 flex flex-col gap-3 hover:bg-gray-100 group hover:-translate-y-1 transition-all duration-300',
				className
			)}
			{...props}
		>
			<div className='w-full aspect-square overflow-hidden rounded-2xl'>
				<Image
					src={member.image}
					alt={member.name}
					width={300}
					height={300}
					className='w-full h-auto group-hover:scale-105 transition-transform duration-300'
				/>
			</div>
			<p className='font-semibold text-2xl text-black text-center'>
				{member.name}
			</p>
			<p className='text-sm font-normal text-balance line-clamp-3'>
				{member.about}
			</p>
			<Link
				href={`/team/${member.slug}`}
				className='hover:underline w-fit flex items-center text-primary'
			>
				<span>Learn More</span>
				<ChevronRight className='shrink-0 ml-1' size={20} />
			</Link>
		</div>
	);
};

export default TeamMemberCard;
