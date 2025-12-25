// Types
import { HTMLAttributeAnchorTarget } from 'react';
import siteConfig from './site-config';

type NavItem = {
	name: string;
	url: string;
	target: HTMLAttributeAnchorTarget;
};

const COMMON_NAVIGATION: NavItem[] = [
	{
		name: 'Home',
		url: '/',
		target: '_self',
	},
	{
		name: 'About',
		url: '/about',
		target: '_self',
	},
	{
		name: 'Project Info.',
		url: '/project',
		target: '_self',
	},
	{
		name: 'Reports',
		url: '/reports',
		target: '_self',
	},
	{
		name: 'Resources',
		url: '/resources',
		target: '_self',
	},
	{
		name: 'Team',
		url: '/team',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION: NavItem[] = [...COMMON_NAVIGATION];

type FooterSection = {
	title: string;
	links: NavItem[];
};

export const FOOTER_SECTIONS: FooterSection[] = [
	{
		title: 'Platform',
		links: [
			{
				name: 'Home',
				url: '/',
				target: '_self',
			},
			{
				name: 'About',
				url: '/about',
				target: '_self',
			},
			{
				name: 'Team',
				url: '/team',
				target: '_self',
			},
			{
				name: 'Contact',
				url: '/contact',
				target: '_self',
			},
		],
	},
	{
		title: 'Resources',
		links: [
			{
				name: 'Project Info',
				url: '/project',
				target: '_self',
			},
			{
				name: 'Reports',
				url: '/reports',
				target: '_self',
			},
			{
				name: 'Resources',
				url: '/resources',
				target: '_self',
			},
			{
				name: 'GitHub',
				url: siteConfig.github,
				target: '_blank',
			},
		],
	},
	{
		title: 'Legal',
		links: [
			{
				name: 'Privacy Policy',
				url: '/privacy',
				target: '_self',
			},
			{
				name: 'Terms & Conditions',
				url: '/terms',
				target: '_self',
			},
			{
				name: 'Open Source License',
				url: `${siteConfig.github}/blob/main/LICENSE`,
				target: '_blank',
			},
		],
	},
];

// Keep FOOTER_NAVIGATION for backward compatibility if needed elsewhere
export const FOOTER_NAVIGATION: NavItem[] = [
	...COMMON_NAVIGATION,
	{
		name: 'Contact',
		url: '/contact',
		target: '_self',
	},
	{
		name: 'GitHub',
		url: siteConfig.github,
		target: '_blank',
	},
	{
		name: 'Privacy Policy',
		url: '/privacy',
		target: '_self',
	},
	{
		name: 'Terms & Conditions',
		url: '/terms',
		target: '_self',
	},
	{
		name: 'Open Source License',
		url: `${siteConfig.github}/blob/main/LICENSE`,
		target: '_blank',
	},
];
