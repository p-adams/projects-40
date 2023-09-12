import { TokenCoordinator } from "$lib/models/token";
import { tokenInstance } from "$lib/services/token/tokenInstance.js";
import { error, fail, redirect } from "@sveltejs/kit";

export function load({ params }) {
  const token = params.slug as string;
  if (!tokenInstance.validateToken(token)) {
    if (tokenInstance.getCurrentToken()) {
      return {
        success: true,
      };
    } else {
      throw error(404);
    }
  }
}

export const actions = {
  token: ({ request }) => {
    const userToken = "";
    return {
      userToken,
    };
  },
};
