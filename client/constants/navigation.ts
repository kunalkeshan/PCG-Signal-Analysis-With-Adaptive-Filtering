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
		url: '/legal/privacy',
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
