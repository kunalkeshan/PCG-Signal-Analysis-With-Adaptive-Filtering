import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function assertValue<T>(
	value: T | null | undefined,
	message: string
): T {
	if (value === null || value === undefined) {
		throw new Error(message);
	}
	return value;
}
