<script lang="ts">
  import ComposeButton from "./ComposeButton.svelte";
  import composeStore from "./composeStore";
  let compose = "";
  let textArea: HTMLTextAreaElement;
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
    <textarea
      bind:this={textArea}
      on:change={(e) => (compose = e.currentTarget.value)}
    />
    <ComposeButton
      on:compose={() => {
        composeStore.setContent(compose);
        textArea.value = "";
      }}
    />
  </div>
</section>
