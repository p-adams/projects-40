export async function fetchBooks(page: number = 1) {
  const results = await fetch(
    `${import.meta.env.VITE_ENDPOINT}/books/?page=${page}`
  ).then(($r) => $r.json());

  return results;
}
