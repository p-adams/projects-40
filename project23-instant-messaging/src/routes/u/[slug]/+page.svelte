<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Profile } from "$lib/models/profile/index.js";

  import { afterUpdate } from "svelte";
  export let data;
  let profile = data.profile as Profile;
  let messages = profile.messages;
  afterUpdate(() => {
    // handle redirect
    if (data.success) {
      // if user has current token, redirect to user page w/current token
      goto(`/u/${data.userToken}`);
    }
  });
</script>

<div class="Profile--wrapper">
  <div class="Profile--outer">
    <section>
      <h2>{profile.id}</h2>
      <div class="Profile-card">
        <p>profile info: {data.userToken ?? "N/A"}</p>
      </div>
    </section>
  </div>

  <div class="Timeline--outer">
    <section><h2>timeline</h2></section>
  </div>
  <aside class="Message--outer">
    <section>
      <h2>messaging</h2>
      <div class="Message--inner">
        {#each messages as data}
          <div class="Message--item">
            <div class="Message--name">
              <p>{data.name}</p>
              <p>{data.timestamp}</p>
            </div>
            <p>{data.message}</p>
          </div>
        {/each}
      </div>
    </section>
  </aside>
</div>

<style>
  .Profile--wrapper {
    height: 100%;
    display: grid;
    grid-template-columns: minmax(400px, 1fr) minmax(400px, 1fr) 300px;
    gap: 10px;
    margin: 0 10px 0 10px;
  }
  .Profile--wrapper > div,
  .Profile--wrapper > aside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .Message--name {
    display: flex;
    justify-content: space-between;
  }
</style>
