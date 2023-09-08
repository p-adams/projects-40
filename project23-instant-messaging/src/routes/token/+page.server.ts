export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const token = data.token;
    console.log(token);
  },
};
