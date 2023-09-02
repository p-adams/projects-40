import { fail } from "@sveltejs/kit";
import { entryListInstance } from "../../../services/entryListInstance.js";
import { identityServiceInstance } from "../../../services/userIdentityService.js";

import { nanoid } from "nanoid";
import { getEntriesWithImages } from "../../../services/utils.js";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
    const title = formData.title as string;
    const imgFile = formData.img as File;
    const description = formData.description as string;

    if (!imgFile.name) {
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
