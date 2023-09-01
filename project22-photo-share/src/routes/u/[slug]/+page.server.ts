import { entryListInstance } from "../../../services/entryListInstance.js";
import { identityServiceInstance } from "../../../services/userIdentityService.js";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const result = entryListInstance.addEntryItem();
    return result;
  },
};
