import { tokenInstance } from "$lib/services/token/tokenInstance.js";

export const actions = {
  submit: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const token = data.token;
    console.log(token);
  },
  generate: async ({ request }) => {
    const token = tokenInstance.issueToken();
    return {
      result: {
        success: true,
        data: token,
        msg: `Created new token: ${token}`,
      },
    };
  },
};
