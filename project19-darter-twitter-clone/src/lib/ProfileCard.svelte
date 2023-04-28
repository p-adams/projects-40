<script lang="ts">
  import ComposeButton from "./compose/ComposeButton.svelte";
  import ComposeInput from "./compose/ComposeInput.svelte";
  import composeStore from "./compose/composeStore";
  import feedStore from "./feed/feedStore";
  import meStore from "$lib/me/store";
  let compose = "";
</script>

<section>
  <div class="profile">
    <img alt="User profile" />
    <div>username</div>
    <div>Darts</div>
    <div>Followers</div>
    <div>Following</div>
  </div>

  {#if $meStore?.feedId}
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
