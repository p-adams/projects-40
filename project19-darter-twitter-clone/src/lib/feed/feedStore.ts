import { writable } from "svelte/store";

const feeds = writable<Lib.Feeds>({
  me: [],
});

const mockFeedItems: Array<Lib.Dart> = [];
for (let i = 0; i < 10; i++) {
  const mockFeedItem: Lib.Dart = {
    username: `User ${i}`,
    text: `This is mock dart number ${i}`,
    date: new Date(),
  };
  mockFeedItems.push(mockFeedItem);
}

feeds.update((feed) => ({ ...feed, ["me"]: mockFeedItems }));

export default {
  subscribe: feeds.subscribe,
};
