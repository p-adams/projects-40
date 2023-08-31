// See https://kit.svelte.dev/docs/types#app

import type { Entry, EntryInterface } from "./data/entry";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
    interface StoryData extends EntryInterface {
      id: string;
      title: string;
      img: string;
      description?: string;
    }
  }
}

export {};
