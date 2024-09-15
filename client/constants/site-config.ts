// Dependencies
import { assertValue } from '@/lib/utils';

interface SiteConfig {
	github: string;
}

const siteConfig: SiteConfig = {
	github: 'https://github.com/kunalkeshan/PCG-Signal-Analysis-With-Adaptive-Filtering',
};

export default assertValue(siteConfig, 'Site config not found');
