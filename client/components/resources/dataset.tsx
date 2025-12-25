import React from 'react';
import { Database, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dataset = () => {
	return (
		<section className='w-full max-w-screen-xl mx-auto p-6 md:p-16'>
			<h2 className='font-heading font-semibold text-3xl text-center'>
				Dataset
			</h2>
			<div className='mt-10 flex flex-col gap-5'>
				<div className='flex flex-col gap-3 p-6 bg-white rounded-2xl shadow-lg'>
					<div className='flex items-center gap-3'>
						<Database size={32} className='text-primary' />
						<h3 className='text-2xl font-heading font-medium'>
							PhysioNet/CinC Challenge 2016
						</h3>
					</div>
					<p className='font-medium mt-3'>
						This project uses the <strong>PhysioNet/CinC Challenge 2016 Dataset</strong> for PCG signal analysis. The dataset contains phonocardiogram recordings from multiple clinical locations, providing a diverse set of heart sound samples for testing and validation.
					</p>
					<p className='font-medium'>
						The dataset includes normal and abnormal heart sound recordings, making it suitable for developing and evaluating adaptive filtering techniques for cardiac assessment.
					</p>
					<div className='mt-4'>
						<Button asChild className='gap-2 font-semibold'>
							<a
								href='https://archive.physionet.org/pn3/challenge/2016/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<ExternalLink className='shrink-0' size={20} />
								<span>View Dataset</span>
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Dataset;
