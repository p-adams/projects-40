import { nanoid } from "nanoid";
import { EntryList } from "../data/entryList";
import { User } from "../data/user";

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
}

// example
const entryListService = new EntryService();
const user = new User();
user.username = "john123";
user.password = "password123";
user.entryListId = entryListService.createEntryList();
const userEntryList = entryListService.getEntryList(user.entryListId);
