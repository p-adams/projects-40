import { tokenInstance } from "$lib/services/token/tokenInstance.js";
import { fail } from "@sveltejs/kit";

export function load({ params }) {
  return {
    userToken: tokenInstance.getCurrentToken(),
  };
}
