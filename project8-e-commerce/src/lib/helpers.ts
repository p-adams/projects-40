import type { ProductVariant } from './types';

export function productPriceDisplay(variants: ProductVariant[]) {
	const lowestPrice = Math.min(...variants.map((variant: ProductVariant) => variant.price));
	return `${usCurrencyFormat(lowestPrice)}${variants.length > 1 ? '+' : ''}`;
}

export function usCurrencyFormat(value: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(value);
}
