import { entryListInstance } from "../services/entryListInstance";
import { identityServiceInstance } from "../services/userIdentityService";
import { getEntriesWithImages } from "../services/utils";
export function load() {
  const user = identityServiceInstance.getUser();

  return {
    root: {
      // make user stories available at component root
      stories: user ? getEntriesWithImages(user, entryListInstance) : [],
      user: {
        username: user?.username,
      },
    },
  };
}
