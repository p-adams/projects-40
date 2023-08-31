import { goto } from "$app/navigation";
import initIdentity from "../../../services/initIdentity.js";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    const result = initIdentity.registerUser(username, password);
    if (result.success) {
    }
    return result;
  },
};
