import type { ProductVariant } from './types';

export const productPriceDisplay = (variants: ProductVariant[]) =>
	`$${Math.min(...variants.map((variant: ProductVariant) => variant.price))}${
		variants.length > 1 ? '+' : ''
	}`;
