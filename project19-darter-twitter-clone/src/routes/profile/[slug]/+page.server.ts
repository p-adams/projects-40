import type { PageServerLoad } from "./$types";
export const load = (({ params }) => {
  return params;
}) satisfies PageServerLoad;
