import { fail } from "@sveltejs/kit";
import { entryListInstance } from "../../../services/entryListInstance.js";
import { identityServiceInstance } from "../../../services/userIdentityService.js";

import { nanoid } from "nanoid";
import { getEntriesWithImages } from "../../../services/utils.js";
import type { Entry } from "../../../data/entry.js";

/** @type {import('./$types').Actions} */
export const actions = {
  create: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const title = formData.title as string;
    const imgFile = formData.img as File;
    const description = formData.description as string;
    if (!imgFile.name || imgFile.name === "undefined") {
      return fail(400, {
        error: true,
        message: "image upload required",
      });
    }
    const result = await entryListInstance.addEntryItem({
      id: nanoid(),
      title,
      description,
      img: imgFile,
    });
    return result;
  },
  delete: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const storyId = data.storyId as string;
    entryListInstance.removeEntryItem(storyId);
  },
};
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  // get params.slug stories
  const user = identityServiceInstance.getUserByName(params.slug);
  return {
    stories: user ? getEntriesWithImages(user, entryListInstance) : [],
    user: {
      username: user?.username,
    },
  };
}
