import { goto } from "$app/navigation";
import initIdentity from "../../../services/initIdentity.js";

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username") as string;
    const password = data.get("password") as string;
    // TODO register the user
    const result = initIdentity.registerUser(username, password);
    console.log("request", result, username, password);
    return result;
  },
};
