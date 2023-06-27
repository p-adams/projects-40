import { MOCK_DATA } from "./MOCK_DATA";

export function fetchBooks(page: number = 1) {
  /**
     *  return await fetch(`${import.meta.env.VITE_ENDPOINT}/books/?page=${page}`)
    .then(($r) => $r.json())
    .catch((err) => console.error(err));
    */
  return MOCK_DATA.bookData;
}
