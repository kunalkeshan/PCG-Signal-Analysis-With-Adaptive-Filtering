import React from 'react';

const Location = () => {
	return (
		<section className='w-full p-6 md:p-16'>
			<div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
				<div>
					<h2 className='font-heading font-semibold text-3xl'>
						Location
					</h2>
					<address className='mt-10'>
						SRM Nagar, Kattankulathur - 603 203 Chengalpattu
						District, Tamil Nadu.
					</address>
				</div>
				<div className='col-span-2'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248942.83965674773!2d79.97717913677633!3d12.86058701142404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1728032612720!5m2!1sen!2sin'
						width='100%'
						height='320'
						style={{ border: 0 }}
						allowFullScreen
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						title='SRM Institute of Science and Technology'
					></iframe>
				</div>
			</div>
		</section>
	);
};

export default Location;
