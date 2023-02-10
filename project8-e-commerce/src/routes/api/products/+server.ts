import { getProducts } from '$lib/db';
import type { Product } from '$lib/types';
import { json } from '@sveltejs/kit';

export async function GET() {
	const response = await getProducts();
	return json({ data: response.products });
}
