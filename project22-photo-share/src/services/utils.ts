import type { User } from "../data/user";
import type { EntryService } from "./entry";

export function getEntriesWithImages(
  user: User,
  entryListInstance: EntryService
) {
  if (user?.entryListId) {
    const entryList = entryListInstance.getEntryList(user.entryListId);
    if (entryList) {
      return entryList.getEntries().map((entry) => ({
        ...entry,
        img: `/images/${entry.img.name ?? "palms.jpg"}`,
      }));
    }
  }
  return [];
}
