import { MOCK_DATA } from "./MOCK_DATA";

export function fetchBooks() {
  /**
     *  return await fetch(`${import.meta.env.VITE_ENDPOINT}/books`)
    .then(($r) => $r.json())
    .catch((err) => console.error(err));
    */
  return MOCK_DATA.bookData;
}
