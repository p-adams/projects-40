import { identityServiceInstance } from "../../../services/userIdentityService.js";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    const result = identityServiceInstance.authenticateUser(username, password);
    if (result.success) {
    }
    return result;
  },
};
