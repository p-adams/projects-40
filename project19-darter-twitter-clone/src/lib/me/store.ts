import feedStore from "$lib/feed/feedStore";
import { writable } from "svelte/store";

const me = writable<Lib.Me>();

function setMe(feedId: string) {
  me.update((me) => ({ ...me, feedId }));
  feedStore.setMyFeed(feedId);
}

export default {
  subscribe: me.subscribe,
  set: setMe,
};
