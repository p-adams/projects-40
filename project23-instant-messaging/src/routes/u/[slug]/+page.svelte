<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Profile } from "$lib/models/profile/index.js";
  import { error } from "@sveltejs/kit";

  import { afterUpdate } from "svelte";
  export let data;
  let profile = data.profile as Profile;
  afterUpdate(() => {
    // handle redirect
    if (data.success) {
      goto(`/u/${data.userToken}`);
    }
  });
</script>

<div class="Profile--outer">
  <div>
    <section>
      <h2>{profile.id}</h2>
      <div>
        <p>profile info: {data.userToken ?? "N/A"}</p>
      </div>
    </section>
  </div>

  <div>timeline</div>
  <aside>messaging</aside>
</div>

<style>
  .Profile--outer {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(400px, 1fr) minmax(400px, 1fr) 300px;
    gap: 10px;
    margin: 0 10px 0 10px;
  }
  .Profile--outer > div,
  .Profile--outer > aside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
