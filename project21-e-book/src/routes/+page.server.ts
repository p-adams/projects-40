import type { PageServerLoad } from "./$types";
import { fetchBooks } from "../fetch";

export const load = (({ url }) => {
  const pageParam = url.searchParams;
  const page = parseInt(pageParam.get("page") ?? "");
  return fetchBooks(page);
}) satisfies PageServerLoad;
