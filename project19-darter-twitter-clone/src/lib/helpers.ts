export function sanitizeQueryString(queryString: string): string {
  // Remove any leading/trailing white space
  queryString = queryString.trim();

  // Encode any special characters in the query string
  queryString = encodeURIComponent(queryString);

  return queryString;
}
