import { writable } from "svelte/store";
import { IdentityService } from "../../services/identity";

const identityService = new IdentityService();

const me = writable<IdentityService>(identityService);

export default {
  subscribe: me.subscribe,
};
