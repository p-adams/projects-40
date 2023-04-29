<script lang="ts">
  import ComposeButton from "./compose/ComposeButton.svelte";
  import ComposeInput from "./compose/ComposeInput.svelte";
  import composeStore from "./compose/composeStore";
  import feedStore from "./feed/feedStore";
  import meStore from "$lib/me/store";
  import { normalizeString } from "./helpers";
  let compose = "";
</script>

<section>
  {#if $meStore?.feedId}
    <div class="profile">
      <img
        class="img"
        src="https://via.placeholder.com/50"
        alt={`user-${$meStore?.feedId}`}
      />
      <div class="name">
        <a href={`/profile/${normalizeString($meStore?.feedId)}`}
          >{$meStore?.feedId}</a
        >
      </div>
      <div class="dart">
        <div class="count">500</div>
        <div class="label">Darts</div>
      </div>
      <div class="followers">
        <div class="count">500</div>
        <div class="label">Followers</div>
      </div>

      <div class="following">
        <div class="count">500</div>
        <div class="label">Following</div>
      </div>
    </div>

    <div>
      <ComposeInput
        bind:compose
        on:composeDart={(e) => (compose = e.detail.dart)}
      />
      <ComposeButton
        on:compose={() => {
          composeStore.setContent(compose);
          feedStore.addToFeed({
            text: compose,
            date: new Date(),
          });
          compose = "";
        }}
      />
    </div>
  {:else}
    <a href="/account">create feed</a>
  {/if}
</section>

<style>
  .profile {
    display: grid;
    grid-template-columns: 70px 1fr 1fr;
    grid-template-areas:
      "img name name"
      "dart followers following";
    gap: 10px 0px;
    border: 1px solid var(--lightGray);
  }
  .img {
    grid-area: img;
  }
  .name {
    grid-area: name;
  }
  .dart {
    grid-area: dart;
  }
  .followers {
    grid-area: followers;
  }
  .following {
    grid-area: following;
  }
  .count {
    font-size: larger;
    font-weight: bold;
  }
  .label {
    font-size: medium;
    color: gray;
  }
  .dart,
  .following,
  .followers {
    padding: 4px;
    border-top: 1px solid var(--lightGray);
  }
  .dart,
  .followers {
    border-right: 1px solid var(--lightGray);
  }
</style>
