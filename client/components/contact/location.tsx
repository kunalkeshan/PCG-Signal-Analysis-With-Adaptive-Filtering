import React from 'react';

const Location = () => {
	return (
		<section className='w-full p-6 md:p-16'>
			<div className='max-w-screen-xl mx-auto bg-background grid grid-cols-1 lg:grid-cols-3 gap-5'>
				<div>
					<h2 className='font-heading font-semibold text-3xl text-center'>
						Location
					</h2>
				</div>
				<div className='col-span-2'>{/* Location iframe */}</div>
			</div>
		</section>
	);
};

export default Location;
