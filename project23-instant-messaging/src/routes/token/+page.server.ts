import { flintstonesCharacter } from "$lib/models/profile/MOCK_DATA.js";
import { profileInstance } from "$lib/services/profile/profileInstance.js";
import { tokenInstance } from "$lib/services/token/tokenInstance.js";

export const actions = {
  submit: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const token = data.token as string;
    const tokenData = tokenInstance.generateNewToken();
    return {
      result: {
        success: true,
        data: tokenData,
        msg: `Created new token: ${tokenData}`,
      },
    };
  },
  generate: async ({ request }) => {
    const token = tokenInstance.getTokenHistory().length
      ? tokenInstance.generateNewToken()
      : tokenInstance.issueToken();

    profileInstance.createProfile(token, flintstonesCharacter);
    return {
      result: {
        success: true,
        data: token,
        msg: `Created new token: ${token}`,
      },
    };
  },
};
