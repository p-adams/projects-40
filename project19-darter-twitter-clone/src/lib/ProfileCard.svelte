<script lang="ts">
  import ComposeButton from "./ComposeButton.svelte";
  import ComposeInput from "./ComposeInput.svelte";
  import composeStore from "./composeStore";
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
  <div>
    <ComposeInput
      bind:compose
      on:composeDart={(e) => (compose = e.detail.dart)}
    />
    <ComposeButton
      on:compose={() => {
        composeStore.setContent(compose);
        compose = "";
      }}
    />
  </div>
</section>
