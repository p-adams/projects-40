/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const username = data.username;
    const email = data.email;
    const password = data.password;
    return {
      result: "SUCCESS",
    };
  },
};
