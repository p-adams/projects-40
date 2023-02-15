import { Product } from '../types';

export async function getProducts() {
	return await (
		await import('./mock_data/products.json')
	).default;
}

export async function getProduct(id: string) {
	const data = await getProducts();
	return data.products.find((product) => product.productId === id);
}
