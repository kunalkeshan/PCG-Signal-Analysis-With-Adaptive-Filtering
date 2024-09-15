import React, { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

interface Props {
	figure?: HTMLAttributes<HTMLElement>;
	figcaption?: HTMLAttributes<HTMLElement>;
	image: ImageProps;
	attribute: {
		name: string;
		url: string;
	};
}

const AttributedImage: React.FC<Props> = ({
	figure,
	image,
	attribute,
	figcaption,
}) => {
	return (
		<figure
			className={cn(
				'w-full h-full flex flex-col items-center justify-center',
				figure?.className
			)}
		>
			<Image
				{...image}
				width={image?.width || 800}
				height={image?.height || 400}
				unoptimized
				className={cn('w-full h-auto max-w-lg', image.className)}
				src={image?.src}
				alt={image?.alt}
			/>
			<figcaption
				className={cn('text-xs text-center', figcaption?.className)}
			>
				Image by{' '}
				<Link href={attribute.url} target='_blank'>
					{attribute.name}
				</Link>
			</figcaption>
		</figure>
	);
};

export default AttributedImage;
