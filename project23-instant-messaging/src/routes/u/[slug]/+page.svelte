<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Profile } from "$lib/models/profile/index.js";
  import { compareByTimestampDescending } from "$lib/utils/index.js";

  import { afterUpdate } from "svelte";
  import ProfilePic from "../../../assets/fred.jpg";
  export let data;
  let { about, messages, id, timeline } = data.profile as Profile;

  let profileTimeline = timeline.sort(compareByTimestampDescending);

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
      <h2>{id}</h2>
      <div class="Profile-card">
        <img src={ProfilePic} alt="Profile" />
        <p>Token: {data.userToken ?? "N/A"}</p>
        <p>Name: {about?.name}</p>
        <p>Location: {about?.location}</p>
        <div>
          <h4>Contact</h4>
          <p>Email: {about?.contact?.email}</p>
          <p>Phone: {about?.contact?.phone}</p>
          <p>Website: {about?.contact?.website}</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>{about?.address?.street}</p>

          <p>
            {about?.address?.state}, {about?.address?.state}
            {about?.address?.zip}
            {about?.address?.country}
          </p>
        </div>
      </div>
    </section>
  </div>

  <div class="Timeline--outer">
    <section>
      <h2>timeline</h2>
      <div class="Timeline--inner">
        {#each profileTimeline as data}
          <div class="Timeline--item">
            <p>{data.timestamp}</p>
            <p>{data.content.text}</p>
          </div>
        {/each}
      </div>
    </section>
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
  section > h2 {
    font-size: medium;
    text-transform: uppercase;
  }
</style>
