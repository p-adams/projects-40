import type { EntryList } from "../data/entryList";

export class EntryService {
  #entryLists!: Record<string, EntryList>;
}
