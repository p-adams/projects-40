import { nanoid } from "nanoid";
import { EntryList } from "../data/entryList";
import { User } from "../data/user";
import initIdentity from "./initIdentity";

export class EntryService {
  #entryLists!: Record<string, EntryList>;
  constructor() {
    this.#entryLists = {};
  }
  createEntryList(): string {
    const entryListId = nanoid();
    this.#entryLists[entryListId] = new EntryList();
    return entryListId;
  }
  getEntryList(entryListId: string): EntryList | undefined {
    return this.#entryLists[entryListId];
  }
  removeEntryList(entryListId: string): void {
    delete this.#entryLists[entryListId];
  }

  createUserWithEntryList(stories: App.StoryData[]) {
    const user = initIdentity.getUser();

    if (user?.username) {
      const entryListId = this.createEntryList();
      const entryList = this.getEntryList(entryListId);

      for (const story of stories) {
        entryList?.addEntry(story);
      }

      user.entryListId = entryListId;
    }

    return user;
  }
}

// example
const entryListService = new EntryService();
const user = new User();
user.username = "john123";
user.password = "password123";
user.entryListId = entryListService.createEntryList();
const userEntryList = entryListService.getEntryList(user.entryListId);
