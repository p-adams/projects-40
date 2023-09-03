import { writeFileSync } from "fs";
import { nanoid } from "nanoid";
import { EntryList } from "../data/entryList";
import { identityServiceInstance } from "./userIdentityService";
import type { EntryData } from "../data/entry";

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

  createUserWithEntryList(entryData: EntryData[]) {
    const user = identityServiceInstance.getUser();

    if (user?.username) {
      const entryListId = this.createEntryList();
      const entryList = this.getEntryList(entryListId);

      for (const entry of entryData) {
        entryList?.addEntry(entry);
      }

      user.entryListId = entryListId;
    }
  }

  async addEntryItem(entry: EntryData) {
    const entryListId = identityServiceInstance.getUser()!.entryListId;
    const entryList = this.getEntryList(entryListId);
    // Write the file to the static folder
    writeFileSync(
      `static/images/${entry.img.name}`,
      Buffer.from(await entry.img.arrayBuffer())
    );
    entryList?.addEntry(entry);
  }
  removeEntryItem(storyId: string) {
    const entryListId = identityServiceInstance.getUser()!.entryListId;
    const entryList = this.getEntryList(entryListId);
    entryList?.removeEntryById(storyId);
  }
}
