import { goto } from "$app/navigation";
import { identityServiceInstance } from "../../../services/userIdentityService.js";
/** @type {import('./$types').Actions} */

export const actions = {
  default: async (event) => {
    const result = identityServiceInstance.logOut();
    return result;
  },
};
