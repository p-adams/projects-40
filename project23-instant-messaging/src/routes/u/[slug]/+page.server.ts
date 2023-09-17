import { flintstonesCharacter } from "$lib/models/profile/MOCK_DATA.js";
import type { Profile } from "$lib/models/profile/index.js";
import { TokenCoordinator } from "$lib/models/token";
import { profileInstance } from "$lib/services/profile/profileInstance.js";
import { tokenInstance } from "$lib/services/token/tokenInstance.js";
import { error, fail, redirect } from "@sveltejs/kit";

export function load({ params }) {
  const _token = params.slug as string;

  if (tokenInstance.getCurrentToken()) {
    const $profile: Profile | undefined = profileInstance.getProfileById(
      tokenInstance.getCurrentToken()!
    );
    return {
      success: true,
      profile: {
        id: $profile?.id,
        about: $profile?.about,
        image: $profile?.image,
        timeline: $profile?.timeline,
        messages: $profile?.messages,
      } as Profile,
    };
  } else {
    throw error(404);
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
