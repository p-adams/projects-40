import { fetchBooks } from "../fetch";

export function load() {
  return { bookData: fetchBooks() };
}
