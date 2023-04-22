import type { Page } from "@sveltejs/kit";

export function sanitizeQueryString(queryString: string): string {
  // Remove any leading/trailing white space
  queryString = queryString.trim();

  // Encode any special characters in the query string
  queryString = encodeURIComponent(queryString);

  return queryString;
}

export function ariaCurrent(page: Page, path: string) {
  return page.url.pathname === path ? "page" : undefined;
}

export function allFeeds(feeds: Lib.Feeds): Lib.Dart[] {
  return Object.keys(feeds).reduce<Lib.Dart[]>(
    (arr: Lib.Dart[], feedId: string) => [...arr, ...feeds[feedId]],
    []
  );
}

export function myFeed(feeds: Lib.Feeds): Lib.Dart[] {
  return feeds.me;
}

export function normalizeString(str: string) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, "_");
  return str;
}

export function newestToOldest(arr: Lib.Dart[]) {
  return arr.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function oldestToNewest(arr: Lib.Dart[]) {
  return arr.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
