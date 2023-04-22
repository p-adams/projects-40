import { writable } from "svelte/store";

const feeds = writable<Lib.Feeds>({
  me: [],
  john_smith: [],
});

const mockFeedItems: Array<Lib.Dart> = [];
function createMockFeedItems(limit = 10) {
  const mockFeedItems: Array<Lib.Dart> = [];
  for (let i = 0; i < 10; i++) {
    const mockFeedItem: Lib.Dart = {
      username: `User ${i}`,
      text: `This is mock dart number ${i}`,
      date: new Date(),
    };
    mockFeedItems.push(mockFeedItem);
  }
  return mockFeedItems;
}

feeds.update((feed) => ({ ...feed, ["me"]: createMockFeedItems() }));
feeds.update((feed) => ({ ...feed, ["john_smith"]: createMockFeedItems() }));

function addToFeed(feedId: string, dart: Lib.Dart) {
  feeds.update((feed) => ({
    ...feed,
    [feedId]: [...feed[feedId], dart],
  }));
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
};
