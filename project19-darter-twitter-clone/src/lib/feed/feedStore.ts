import { writable } from "svelte/store";
import meStore from "$lib/me/store";

const feeds = writable<Lib.Feeds>({
  john_smith: [],
});

const mockFeedItems: Array<Lib.Dart> = [];
function createMockFeedItems(limit = 10, key: string) {
  const mockFeedItems: Array<Lib.Dart> = [];
  for (let i = 0; i < limit; i++) {
    const mockFeedItem: Lib.Dart = {
      username: `User ${i} - ${key}`,
      text: `This is mock dart number ${i}`,
      date: new Date(),
    };
    mockFeedItems.push(mockFeedItem);
  }
  return mockFeedItems;
}

function setMyFeed(feedId: string) {
  feeds.update((feed) => ({
    ...feed,
    [feedId]: createMockFeedItems(2, feedId),
  }));
}

feeds.update((feed) => ({
  ...feed,
  ["john_smith"]: createMockFeedItems(2, "john_smith"),
}));

function addToFeed(dart: Pick<Lib.Dart, "text" | "date">) {
  meStore.subscribe((me) => {
    feeds.update((feed) => ({
      ...feed,
      [me.feedId]: [...feed[me.feedId], { ...dart, username: me.feedId }],
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
