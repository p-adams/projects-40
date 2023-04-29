import { writable } from "svelte/store";
import meStore from "$lib/me/store";
import { normalizeString } from "$lib/helpers";

const feeds = writable<Lib.Feeds>({ main: [] });

function createMockFeedItems(limit = 10, key: string): Array<Lib.Dart> {
  const mockFeedItems: Array<Lib.Dart> = [];
  for (let i = 0; i < limit; i++) {
    const mockFeedItem: Lib.Dart = {
      feedId: normalizeString(`User ${i} - ${key}`),
      username: `User ${i} - ${key}`,
      text: `This is mock dart number ${i}`,
      date: new Date(),
    };
    mockFeedItems.push(mockFeedItem);
  }
  return mockFeedItems;
}

feeds.update((feed) => ({ ...feed, ["main"]: createMockFeedItems(2, "main") }));

function setMyFeed(feedId: string) {
  feeds.update((feed) => ({
    ...feed,
    [feedId]: createMockFeedItems(2, feedId),
  }));
}

function addToFeed(dart: Pick<Lib.Dart, "text" | "date">) {
  meStore.subscribe((me) => {
    feeds.update((feed) => ({
      ...feed,
      [me.feedId]: [
        ...feed[me.feedId],
        { ...dart, username: me.feedId, feedId: me.feedId },
      ],
    }));
  });
}

function subscribeToFeed(feedId: string) {
  feeds.update((feed) => ({ ...feed, [feedId]: [] }));
}

function unsubscribeToFeed(feedId: string) {
  feeds.update((feed) => {
    const { [feedId]: value, ...rest } = feed;
    return rest;
  });
}

export default {
  subscribe: feeds.subscribe,
  addToFeed,
  subscribeToFeed,
  unsubscribeToFeed,
  setMyFeed,
};
