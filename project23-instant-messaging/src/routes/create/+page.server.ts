export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const username = data.username;
    const email = data.email;
    return {
      result: "SUCCESS",
    };
  },
};
