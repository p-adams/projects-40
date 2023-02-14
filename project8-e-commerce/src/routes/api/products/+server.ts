import { getProducts } from '$lib/db';
import { json } from '@sveltejs/kit';

export async function GET() {
	const response = await getProducts();
	return json({ data: response.products });
}
