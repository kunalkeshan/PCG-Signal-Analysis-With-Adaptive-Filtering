import React from 'react';
import {
	Accessibility,
	Crosshair,
	HeartPulse,
	LucideIcon,
	ScanSearch,
	ShieldCheck,
	SquareActivity,
	Target,
} from 'lucide-react';

interface BenefitItem {
	title: string;
	description: string;
	Icon: LucideIcon;
}

const benefits: BenefitItem[] = [
	{
		title: 'Improved Accuracy',
		description:
			'By employing advanced signal processing and machine learning techniques, we aim to achieve higher accuracy in detecting and classifying cardiac abnormalities compared to traditional auscultation methods.',
		Icon: Target,
	},
	{
		title: 'Earlier Detection',
		description:
			'The enhanced sensitivity of our analysis may allow for the detection of subtle cardiac abnormalities at earlier stages, potentially leading to earlier interventions and improved patient outcomes.',
		Icon: Crosshair,
	},
	{
		title: 'Non-invasive Screening',
		description:
			'Our technology could provide a powerful, non-invasive screening tool for cardiac health, potentially reducing the need for more invasive or expensive diagnostic procedures in some cases.',
		Icon: ScanSearch,
	},
	{
		title: 'Accessibility',
		description:
			'By developing a system that can work with relatively inexpensive PCG recording devices, we could make advanced cardiac diagnostics more accessible, particularly in resource-limited settings or for remote healthcare applications.',
		Icon: Accessibility,
	},
	{
		title: 'Continuous Monitoring',
		description:
			"The real-time processing capabilities we're developing could enable continuous cardiac monitoring, providing a more comprehensive view of a patient's cardiac health over time.",
		Icon: SquareActivity,
	},
	{
		title: 'Support for Healthcare Providers',
		description:
			'Our system could serve as a valuable support tool for healthcare providers, offering a second opinion or highlighting potential issues that warrant further investigation.',
		Icon: HeartPulse,
	},
	{
		title: 'Standardization',
		description:
			'By providing objective analysis of heart sounds, our system could help standardize cardiac auscultation practices, potentially reducing variability in diagnoses between different healthcare providers.',
		Icon: ShieldCheck,
	},
];

const potentialApplications = [
	{
		title: 'Wearable Health Monitoring',
		description:
			'Integration with wearable devices could allow for continuous, non-intrusive cardiac monitoring in daily life, providing early warning of potential cardiac issues.',
	},
	{
		title: 'Telemedicine',
		description:
			'The technology could be a valuable tool in telemedicine applications, allowing for remote cardiac assessments with a level of detail previously requiring in-person visits.',
	},
	{
		title: 'Personalized Medicine',
		description:
			"By analyzing patterns in an individual's heart sounds over time, the technology could contribute to more personalized cardiac care and treatment plans.",
	},
	{
		title: 'Integration with Other Diagnostic Tools',
		description:
			'Future developments could see our PCG analysis integrated with other diagnostic methods (e.g., ECG, echocardiography) for more comprehensive cardiac assessments.',
	},
	{
		title: 'Application to Other Biological Sounds',
		description:
			"The signal processing techniques we're developing could potentially be adapted for analysis of other biological sounds, such as lung sounds or fetal heart sounds.",
	},
	{
		title: 'AI-assisted Medical Training',
		description:
			'Our system could be used as a training tool for medical students and professionals, helping them learn to recognize and interpret various heart sounds and murmurs.',
	},
	{
		title: 'Research Tool',
		description:
			'The detailed analysis provided by our system could serve as a valuable research tool, potentially uncovering new insights into cardiac function and disease progression.',
	},
];

const ExpectedOutcomes = () => {
	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:p-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Expected Outcomes
			</h2>
			<h3 className='text-2xl font-heading font-medium mt-10'>
				Potential impacts on cardiac health diagnostics
			</h3>
			<p className='font-medium mt-5'>
				Our PCG signal analysis project has the potential to
				significantly impact cardiac health diagnostics in several ways:
			</p>
			<ul className='w-full grid gird-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-5'>
				{benefits.map((aspect, index) => (
					<li
						key={`benefit-${index}`}
						className='flex flex-col gap-3 p-5 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
					>
						<aspect.Icon size={32} />
						<h3 className='text-lg font-heading font-normal'>
							{aspect.title}
						</h3>
						<p className='font-medium text-balance'>
							{aspect.description}
						</p>
					</li>
				))}
			</ul>
			<h3 className='text-2xl font-heading font-medium mt-10'>
				Future applications of the technology
			</h3>
			<p className='font-medium mt-5'>
				Looking ahead, our PCG signal analysis technology has potential
				applications that extend beyond its initial focus:
			</p>
			<ol className='flex list-outside ml-4 mt-5 list-decimal flex-col gap-5 w-full'>
				{potentialApplications.map((item, index) => (
					<li
						key={`potential-applications-${index}`}
						className='w-full'
					>
						<h4 className='text-lg font-heading font-normal'>
							{item.title}
						</h4>
						<p className='font-normal text-sm text-dim-greys mt-2'>
							{item.description}
						</p>
					</li>
				))}
			</ol>
		</section>
	);
};

export default ExpectedOutcomes;
