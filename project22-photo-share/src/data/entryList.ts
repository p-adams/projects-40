import type { Entry, EntryInterface } from "./entry";

export class EntryList {
  private entries: EntryInterface[];

  constructor() {
    this.entries = [];
  }

  addEntry(entry: EntryInterface): void {
    this.entries.push(entry);
  }

  removeEntryById(id: string): void {
    this.entries = this.entries.filter((Entry) => Entry.id !== id);
  }

  getEntries(): EntryInterface[] {
    return this.entries;
  }
}
