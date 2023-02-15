import { getProduct } from '$lib/db';
import type { PageServerLoad } from './$types';
export const load = (({ params }) => {
	return getProduct(params.slug);
}) satisfies PageServerLoad;
