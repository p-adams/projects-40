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
  return Object.keys(feeds).reduce(
    (arr: any, feedId: any) => [...arr, ...feeds[feedId]],
    []
  );
}
