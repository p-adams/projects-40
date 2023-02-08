import { Product } from '../types';

export async function getProducts() {
	return await (
		await import('./mock_data/products.json')
	).default;
}
