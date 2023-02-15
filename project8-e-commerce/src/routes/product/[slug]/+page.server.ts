import { getProduct } from '$lib/db';
export async function load({ params }: { params: any }) {
	return await getProduct(params.slug);
}
