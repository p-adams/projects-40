import { entryListInstance } from "../../../services/entryListInstance.js";
import { identityServiceInstance } from "../../../services/userIdentityService.js";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const result = entryListInstance.addEntryItem();
    return result;
  },
};
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const user = identityServiceInstance.getUserByName(params.slug);
  return {
    stories: user?.entryListId
      ? entryListInstance.getEntryList(user.entryListId)?.getEntries() ?? []
      : [],
    user: params.slug,
  };
}
