import React from 'react';
import {
	Wrench,
	Code2,
	Database,
	Workflow,
	BookOpen,
	GraduationCap,
	ExternalLink,
	Cpu,
	BarChart3,
	Globe,
	Microscope,
	LucideIcon,
} from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

// Type definitions
interface Tool {
	name: string;
	description: string;
	logo?: string;
	icon?: LucideIcon;
	link?: string;
	websiteOnly?: boolean;
	toolboxes?: string[];
	features?: string[];
	algorithms?: string[];
	version?: string;
	files?: string[];
}

interface ToolCategory {
	category: string;
	icon: LucideIcon;
	websiteOnly?: boolean;
	tools: Tool[];
}

interface TechCategory {
	category: string;
	icon: LucideIcon;
	color?: string;
	websiteOnly?: boolean;
	tools: Tool[];
}

interface WorkflowStage {
	stage: string;
	icon: LucideIcon;
	description: string;
	websiteOnly?: boolean;
	tools: Tool[];
}

// Tools organized by PURPOSE
const toolsByPurpose: ToolCategory[] = [
	{
		category: 'Signal Processing & Analysis',
		icon: Cpu,
		tools: [
			{
				name: 'MATLAB',
				logo: '/resources/matlab.png',
				description:
					'Primary tool for PCG signal processing and adaptive filtering implementation. Used for audio processing, signal analysis, and algorithm development.',
				toolboxes: ['Signal Processing Toolbox', 'DSP System Toolbox'],
				link: 'https://www.mathworks.com/products/matlab.html',
			},
			{
				name: 'NumPy',
				description:
					'Fundamental Python library for numerical computing. Used in combination with MATLAB for array processing and mathematical operations on PCG signals.',
				link: 'https://numpy.org/',
			},
			{
				name: 'SciPy',
				description:
					'Scientific computing library for Python. Provides additional signal processing capabilities and statistical analysis functions for PCG data.',
				link: 'https://scipy.org/',
			},
		],
	},
	{
		category: 'Data Visualization',
		icon: BarChart3,
		tools: [
			{
				name: 'Matplotlib',
				description:
					'Python plotting library used for creating visualizations of PCG signals, filter responses, and analysis results.',
				link: 'https://matplotlib.org/',
			},
			{
				name: 'Recharts',
				description:
					'React charting library used for interactive data visualizations on this website.',
				link: 'https://recharts.org/',
				websiteOnly: true,
			},
		],
	},
	{
		category: 'Web Development',
		icon: Globe,
		websiteOnly: true,
		tools: [
			{
				name: 'Next.js',
				description:
					'React framework used for building this website. Provides server-side rendering and optimal performance.',
				link: 'https://nextjs.org/',
				websiteOnly: true,
			},
			{
				name: 'Tailwind CSS',
				description:
					'Utility-first CSS framework used for styling this website.',
				link: 'https://tailwindcss.com/',
				websiteOnly: true,
			},
			{
				name: 'Radix UI',
				description:
					'Accessible component library providing the UI primitives for this website.',
				link: 'https://www.radix-ui.com/',
				websiteOnly: true,
			},
		],
	},
	{
		category: 'Research & Academic Resources',
		icon: BookOpen,
		tools: [
			{
				name: 'IEEE Xplore',
				logo: '/resources/ieee.png',
				description:
					'Digital library providing access to IEEE journals and publications. Primary source for research papers on signal processing and biomedical engineering.',
				link: 'https://ieeexplore.ieee.org/',
			},
			{
				name: 'IEEE Signal Processing Magazine',
				description:
					'Academic journal providing cutting-edge research and techniques in signal processing applications.',
				link: 'https://signalprocessingsociety.org/publications-resources/ieee-signal-processing-magazine',
			},
			{
				name: 'SRMIST Resources',
				icon: GraduationCap,
				description:
					'SRM Institute of Science and Technology provides institutional support including library access, research databases, laboratory equipment, and faculty guidance for this project.',
				features: [
					'Digital library access',
					'Research paper databases',
					'Laboratory equipment and facilities',
					'Faculty guidance and mentorship',
					'Institutional research support',
				],
				link: 'https://www.srmist.edu.in/',
			},
		],
	},
];

// Tools organized by TECHNOLOGY
const toolsByTechnology: TechCategory[] = [
	{
		category: 'MATLAB Ecosystem',
		icon: Code2,
		color: 'text-orange-600',
		tools: [
			{
				name: 'MATLAB Core',
				description:
					'Primary development environment for implementing LMS, Leaky LMS, and other adaptive filtering algorithms.',
				algorithms: ['lms.m', 'llms.m', 'pcg.m'],
			},
			{
				name: 'Signal Processing Toolbox',
				description:
					'Provides functions for signal analysis, filter design, and spectral analysis of PCG signals.',
			},
			{
				name: 'DSP System Toolbox',
				description:
					'Tools for designing and simulating digital signal processing systems and adaptive filters.',
			},
			{
				name: 'Audio Processing',
				description:
					'MATLAB native capabilities for reading, processing, and analyzing PCG audio files.',
			},
		],
	},
	{
		category: 'Python Stack',
		icon: Code2,
		color: 'text-blue-600',
		tools: [
			{
				name: 'NumPy',
				description:
					'Core library for numerical operations, array manipulation, and mathematical functions.',
				version: '< 2.0',
			},
			{
				name: 'SciPy',
				description:
					'Advanced signal processing, statistical analysis, and scientific computing functions.',
			},
			{
				name: 'Matplotlib',
				description:
					'Comprehensive plotting and visualization library for signal analysis results.',
				version: '3.5.2',
			},
		],
	},
	{
		category: 'Frontend Technologies',
		icon: Globe,
		color: 'text-purple-600',
		websiteOnly: true,
		tools: [
			{
				name: 'Next.js 14',
				description:
					'React framework with App Router for building this documentation website.',
			},
			{
				name: 'TypeScript',
				description:
					'Typed JavaScript providing type safety and better development experience.',
			},
			{
				name: 'Tailwind CSS',
				description:
					'Utility-first CSS framework for responsive design and styling.',
			},
			{
				name: 'Radix UI',
				description:
					'Accessible, unstyled component primitives for building the UI.',
			},
			{
				name: 'Recharts',
				description:
					'React-based charting library for data visualization components.',
			},
		],
	},
];

// Tools organized by WORKFLOW STAGE
const toolsByWorkflow: WorkflowStage[] = [
	{
		stage: 'Data Acquisition',
		icon: Database,
		description: 'Tools for obtaining and preparing PCG signal data',
		tools: [
			{
				name: 'PhysioNet Dataset',
				description:
					'Source of PCG recordings from PhysioNet/CinC Challenge 2016 dataset.',
			},
			{
				name: 'MATLAB Audio I/O',
				description:
					'Functions for reading and importing PCG audio files in various formats.',
			},
		],
	},
	{
		stage: 'Signal Processing',
		icon: Cpu,
		description: 'Core processing and filtering algorithms',
		tools: [
			{
				name: 'MATLAB Adaptive Filters',
				description:
					'Implementation of LMS, Leaky LMS, Kalman, and RLS algorithms for noise reduction.',
				files: ['lms.m', 'llms.m', 'pcg.m'],
			},
			{
				name: 'NumPy + SciPy',
				description:
					'Supporting numerical operations and additional signal processing functions.',
			},
			{
				name: 'Signal Processing Toolbox',
				description:
					'Filter design, spectral analysis, and signal transformation functions.',
			},
		],
	},
	{
		stage: 'Analysis & Visualization',
		icon: BarChart3,
		description: 'Tools for analyzing results and creating visualizations',
		tools: [
			{
				name: 'Matplotlib',
				description:
					'Creating plots of signals, frequency responses, and performance metrics.',
			},
			{
				name: 'MATLAB Plotting',
				description:
					'Built-in visualization capabilities for real-time signal monitoring.',
			},
			{
				name: 'Recharts (Website)',
				description:
					'Interactive charts for presenting results on the documentation website.',
			},
		],
	},
	{
		stage: 'Research & Documentation',
		icon: Microscope,
		description: 'Resources for research and knowledge building',
		tools: [
			{
				name: 'IEEE Xplore',
				description:
					'Access to research papers on adaptive filtering and PCG analysis.',
			},
			{
				name: 'SRMIST Library',
				description:
					'Institutional resources, research databases, and academic journals.',
			},
			{
				name: 'IEEE Signal Processing Magazine',
				description:
					'Latest techniques and applications in signal processing.',
			},
		],
	},
	{
		stage: 'Presentation & Deployment',
		icon: Globe,
		description: 'Website and documentation tools',
		websiteOnly: true,
		tools: [
			{
				name: 'Next.js + React',
				description:
					'Framework for building the interactive project documentation website.',
			},
			{
				name: 'Tailwind CSS + Radix UI',
				description:
					'UI framework and components for responsive, accessible design.',
			},
		],
	},
];

const ToolsAndLibraries = () => {
	return (
		<section className='w-full bg-background'>
			<div className='max-w-screen-xl mx-auto p-6 md:p-16'>
				{/* Main Title */}
				<h2 className='font-heading font-semibold text-3xl text-center'>
					Tools & Libraries
				</h2>

				<p className='font-medium text-center text-dim-greys mt-4 max-w-3xl mx-auto'>
					Comprehensive overview of the technologies, tools, and resources used in this
					PCG Signal Analysis project, organized by purpose, technology stack, and
					workflow stage.
				</p>

				{/* Organization by PURPOSE */}
				<div className='mt-12'>
					<div className='flex items-center gap-3 mb-6'>
						<Wrench className='text-primary' size={28} />
						<h3 className='font-heading font-semibold text-2xl'>
							Organized by Purpose
						</h3>
					</div>

					<div className='space-y-6'>
						{toolsByPurpose.map((category, idx) => {
							const IconComponent = category.icon;
							return (
								<div
									key={`purpose-${idx}`}
									className='bg-white rounded-2xl shadow-lg p-6'
								>
									<div className='flex items-center gap-3 mb-4'>
										<IconComponent className='text-primary' size={24} />
										<h4 className='font-heading font-semibold text-xl'>
											{category.category}
										</h4>
										{category.websiteOnly && (
											<span className='text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium'>
												Website Only
											</span>
										)}
									</div>

									<div className='space-y-4'>
										{category.tools.map((tool, toolIdx) => (
											<div
												key={`tool-${idx}-${toolIdx}`}
												className='border-l-4 border-primary pl-4 py-2'
											>
												<div className='flex items-start justify-between gap-4'>
													<div className='flex-1'>
														<div className='flex items-center gap-3 mb-2'>
															{tool.logo && (
																<div className='relative w-8 h-8'>
																	<Image
																		src={tool.logo}
																		alt={`${tool.name} logo`}
																		fill
																		className='object-contain'
																	/>
																</div>
															)}
															{tool.icon && !tool.logo && (
																<tool.icon
																	className='text-primary'
																	size={24}
																/>
															)}
															<h5 className='font-heading font-semibold text-lg'>
																{tool.name}
															</h5>
															{tool.websiteOnly && (
																<span className='text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium'>
																	Website
																</span>
															)}
														</div>
														<p className='font-medium text-sm text-dim-greys mb-2'>
															{tool.description}
														</p>
														{tool.toolboxes && (
															<div className='flex flex-wrap gap-2 mb-2'>
																{tool.toolboxes.map((tb, tbIdx) => (
																	<span
																		key={tbIdx}
																		className='text-xs bg-background px-2 py-1 rounded font-medium'
																	>
																		{tb}
																	</span>
																))}
															</div>
														)}
														{tool.features && (
															<ul className='mt-2 space-y-1'>
																{tool.features.map((feature, fIdx) => (
																	<li
																		key={fIdx}
																		className='text-sm font-medium text-dim-greys flex items-start gap-2'
																	>
																		<span className='text-primary mt-1'>
																			•
																		</span>
																		<span>{feature}</span>
																	</li>
																))}
															</ul>
														)}
													</div>
													{tool.link && (
														<Button
															asChild
															variant='outline'
															size='sm'
															className='shrink-0'
														>
															<a
																href={tool.link}
																target='_blank'
																rel='noopener noreferrer'
															>
																<ExternalLink size={16} />
															</a>
														</Button>
													)}
												</div>
											</div>
										))}
									</div>
								</div>
							);
						})}
					</div>

					{/* Website Tools Disclaimer */}
					<div className='mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg'>
						<p className='font-medium text-sm text-purple-900'>
							<span className='font-semibold'>Note:</span> Tools marked as &ldquo;Website Only&rdquo;
							are used exclusively for building this documentation website and are not
							part of the core PCG signal processing pipeline.
						</p>
					</div>
				</div>

				{/* Organization by TECHNOLOGY */}
				<div className='mt-16'>
					<div className='flex items-center gap-3 mb-6'>
						<Code2 className='text-primary' size={28} />
						<h3 className='font-heading font-semibold text-2xl'>
							Organized by Technology Stack
						</h3>
					</div>

					<div className='bg-white rounded-2xl shadow-lg p-6 md:p-8'>
						<Accordion type='multiple'>
							{toolsByTechnology.map((tech, idx) => {
								const IconComponent = tech.icon;
								return (
									<AccordionItem
										key={`tech-${idx}`}
										value={tech.category}
										className='border-b last:border-b-0'
									>
										<AccordionTrigger className='gap-5 hover:text-primary transition-colors'>
											<div className='text-left flex items-center gap-4'>
												<IconComponent
													className={tech.color || 'text-primary'}
													size={24}
												/>
												<div>
													<h4 className='text-lg font-heading font-medium'>
														{tech.category}
													</h4>
													{tech.websiteOnly && (
														<span className='text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium mt-1 inline-block'>
															Website Only
														</span>
													)}
												</div>
											</div>
										</AccordionTrigger>

										<AccordionContent className='pt-4'>
											<div className='space-y-4'>
												{tech.tools.map((tool, toolIdx) => (
													<div
														key={`tech-tool-${idx}-${toolIdx}`}
														className='bg-background rounded-lg p-4'
													>
														<div className='flex items-start justify-between gap-4'>
															<div className='flex-1'>
																<h5 className='font-semibold text-base mb-2'>
																	{tool.name}
																</h5>
																<p className='font-medium text-sm text-dim-greys'>
																	{tool.description}
																</p>
																{tool.algorithms && (
																	<div className='mt-2 flex flex-wrap gap-2'>
																		<span className='text-xs font-medium text-dim-greys mr-2'>
																			Files:
																		</span>
																		{tool.algorithms.map((algo, aIdx) => (
																			<code
																				key={aIdx}
																				className='text-xs bg-white px-2 py-1 rounded border font-mono'
																			>
																				{algo}
																			</code>
																		))}
																	</div>
																)}
																{tool.version && (
																	<p className='mt-2 text-xs font-medium text-dim-greys'>
																		Version: {tool.version}
																	</p>
																)}
															</div>
														</div>
													</div>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					</div>
				</div>

				{/* Organization by WORKFLOW STAGE */}
				<div className='mt-16'>
					<div className='flex items-center gap-3 mb-6'>
						<Workflow className='text-primary' size={28} />
						<h3 className='font-heading font-semibold text-2xl'>
							Organized by Workflow Stage
						</h3>
					</div>

					<div className='bg-white rounded-2xl shadow-lg p-6 md:p-8'>
						<Accordion type='multiple' defaultValue={['Data Acquisition']}>
							{toolsByWorkflow.map((stage, idx) => {
								const IconComponent = stage.icon;
								return (
									<AccordionItem
										key={`workflow-${idx}`}
										value={stage.stage}
										className='border-b last:border-b-0'
									>
										<AccordionTrigger className='gap-5 hover:text-primary transition-colors'>
											<div className='text-left flex items-start gap-4'>
												<span className='text-primary text-2xl font-heading font-semibold flex-shrink-0'>
													{idx + 1}
												</span>
												<div className='flex-1'>
													<div className='flex items-center gap-3'>
														<IconComponent className='text-primary' size={20} />
														<h4 className='text-lg font-heading font-medium'>
															{stage.stage}
														</h4>
														{stage.websiteOnly && (
															<span className='text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-medium'>
																Website
															</span>
														)}
													</div>
													<p className='text-sm font-medium text-dim-greys mt-1'>
														{stage.description}
													</p>
												</div>
											</div>
										</AccordionTrigger>

										<AccordionContent className='pt-4 ml-12'>
											<div className='space-y-3'>
												{stage.tools.map((tool, toolIdx) => (
													<div
														key={`workflow-tool-${idx}-${toolIdx}`}
														className='bg-background rounded-lg p-4'
													>
														<h5 className='font-semibold text-base mb-2'>
															{tool.name}
														</h5>
														<p className='font-medium text-sm text-dim-greys'>
															{tool.description}
														</p>
														{tool.files && (
															<div className='mt-2 flex flex-wrap gap-2'>
																{tool.files.map((file, fIdx) => (
																	<code
																		key={fIdx}
																		className='text-xs bg-white px-2 py-1 rounded border font-mono'
																	>
																		{file}
																	</code>
																))}
															</div>
														)}
													</div>
												))}
											</div>
										</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					</div>
				</div>

				{/* Additional Resources Section */}
				<div className='mt-16'>
					<div className='flex items-center gap-3 mb-6'>
						<BookOpen className='text-primary' size={28} />
						<h3 className='font-heading font-semibold text-2xl'>
							Institutional & Academic Support
						</h3>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{/* SRMIST Card */}
						<div className='bg-white rounded-2xl shadow-lg p-6'>
							<div className='flex items-center gap-3 mb-4'>
								<GraduationCap className='text-primary' size={28} />
								<h4 className='font-heading font-semibold text-xl'>
									SRM Institute of Science and Technology
								</h4>
							</div>
							<p className='font-medium text-sm text-dim-greys mb-4'>
								SRMIST provides comprehensive institutional support for this research
								project, including access to academic resources, laboratory facilities,
								and faculty mentorship.
							</p>
							<ul className='space-y-2 mb-4'>
								{[
									'Digital library and research databases',
									'IEEE and academic journal access',
									'Signal processing laboratory equipment',
									'Faculty guidance and technical mentorship',
									'Research infrastructure and support',
								].map((item, idx) => (
									<li
										key={idx}
										className='text-sm font-medium text-dim-greys flex items-start gap-2'
									>
										<span className='text-primary mt-1'>✓</span>
										<span>{item}</span>
									</li>
								))}
							</ul>
							<Button asChild className='gap-2 font-semibold w-full'>
								<a
									href='https://www.srmist.edu.in/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<ExternalLink className='shrink-0' size={20} />
									<span>Visit SRMIST Website</span>
								</a>
							</Button>
						</div>

						{/* IEEE Resources Card */}
						<div className='bg-white rounded-2xl shadow-lg p-6'>
							<div className='flex items-center gap-3 mb-4'>
								<div className='relative w-8 h-8'>
									<Image
										src='/resources/ieee.png'
										alt='IEEE logo'
										fill
										className='object-contain'
									/>
								</div>
								<h4 className='font-heading font-semibold text-xl'>
									IEEE Research Resources
								</h4>
							</div>
							<p className='font-medium text-sm text-dim-greys mb-4'>
								IEEE provides access to cutting-edge research papers, journals, and
								publications in signal processing and biomedical engineering.
							</p>
							<div className='space-y-3'>
								<div className='border-l-4 border-primary pl-4 py-2'>
									<h5 className='font-semibold text-sm mb-1'>IEEE Xplore</h5>
									<p className='text-xs font-medium text-dim-greys mb-2'>
										Comprehensive digital library for technical literature in
										engineering and technology.
									</p>
									<Button asChild variant='outline' size='sm' className='gap-2'>
										<a
											href='https://ieeexplore.ieee.org/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ExternalLink size={14} />
											<span>Visit IEEE Xplore</span>
										</a>
									</Button>
								</div>
								<div className='border-l-4 border-primary pl-4 py-2'>
									<h5 className='font-semibold text-sm mb-1'>
										IEEE Signal Processing Magazine
									</h5>
									<p className='text-xs font-medium text-dim-greys mb-2'>
										Leading publication for signal processing research, techniques, and
										applications.
									</p>
									<Button asChild variant='outline' size='sm' className='gap-2'>
										<a
											href='https://signalprocessingsociety.org/publications-resources/ieee-signal-processing-magazine'
											target='_blank'
											rel='noopener noreferrer'
										>
											<ExternalLink size={14} />
											<span>View Magazine</span>
										</a>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ToolsAndLibraries;
