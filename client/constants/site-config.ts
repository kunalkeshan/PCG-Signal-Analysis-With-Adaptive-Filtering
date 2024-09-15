// Dependencies
import { assertValue } from '@/lib/utils';

interface SiteConfig {
	github: string;
	siteUrl: URL;
}

const siteConfig: SiteConfig = {
	github: 'https://github.com/kunalkeshan/PCG-Signal-Analysis-With-Adaptive-Filtering',
	siteUrl: new URL('https://pcga.kunalkeshan.dev'),
};

export default assertValue(siteConfig, 'Site config not found');
