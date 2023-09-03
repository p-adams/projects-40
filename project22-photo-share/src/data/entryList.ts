import type { Entry, EntryData } from "./entry";

export class EntryList {
  private entries: EntryData[];

  constructor() {
    this.entries = [];
  }

  addEntry(entry: EntryData): void {
    this.entries.push(entry);
  }

  removeEntryById(id: string): void {
    this.entries = this.entries.filter((entry) => entry.id !== id);
  }

  getEntries(): EntryData[] {
    return this.entries;
  }
}
