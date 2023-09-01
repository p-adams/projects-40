import { nanoid } from "nanoid";
import { EntryList } from "../data/entryList";
import { User } from "../data/user";
import { identityServiceInstance } from "./userIdentityService";

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
    const user = identityServiceInstance.getUser();

    if (user?.username) {
      const entryListId = this.createEntryList();
      const entryList = this.getEntryList(entryListId);

      for (const story of stories) {
        entryList?.addEntry(story);
      }

      user.entryListId = entryListId;
    }
  }

  addEntryItem(entryListId: string) {
    const entryList = this.getEntryList(entryListId);
    entryList?.addEntry({ id: "1", title: "foo", description: "bar", img: "" });
  }
}
