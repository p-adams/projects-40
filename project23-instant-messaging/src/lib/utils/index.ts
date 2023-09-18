type TimestampItem = Pick<App.TimelineItem, "timestamp">;

export function compareByTimestampDescending(
  a: TimestampItem,
  b: TimestampItem
): number {
  const timestampA = new Date(a.timestamp);
  const timestampB = new Date(b.timestamp);

  if (timestampA > timestampB) {
    return -1;
  }
  if (timestampA < timestampB) {
    return 1;
  }
  return 0;
}

export function compareByTimestamp(a: TimestampItem, b: TimestampItem) {
  const timestampA = new Date(a.timestamp);
  const timestampB = new Date(b.timestamp);

  if (timestampA < timestampB) {
    return -1;
  }
  if (timestampA > timestampB) {
    return 1;
  }
  return 0;
}
