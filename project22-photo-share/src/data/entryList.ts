import type { Entry } from "./entry";

export class EntryList {
  private entries: Entry[];

  constructor() {
    this.entries = [];
  }

  addEntry(entry: Entry): void {
    this.entries.push(entry);
  }

  removeEntryById(id: string): void {
    this.entries = this.entries.filter((Entry) => Entry.id !== id);
  }

  getEntries(): Entry[] {
    return this.entries;
  }
}
