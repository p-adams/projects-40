import { tokenInstance } from "$lib/services/token/tokenInstance.js";

export function load({ request }) {
  return {
    userToken: tokenInstance.getCurrentToken(),
  };
}
