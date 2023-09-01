import { entryListInstance } from "../services/entryListInstance";
import { identityServiceInstance } from "../services/userIdentityService";

export function load() {
  const user = identityServiceInstance.getUser();
  return {
    entryData: {
      stories: user?.entryListId
        ? entryListInstance.getEntryList(user.entryListId)?.getEntries() ?? []
        : [],
      user: {
        username: user?.username,
        entryListId: user?.entryListId,
      },
    },
  };
}
