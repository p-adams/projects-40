<script lang="ts">
  import { goto } from "$app/navigation";
  import GenerateToken from "$lib/components/generate-token.svelte";
  import { afterUpdate } from "svelte";
  export let form;
  export let data;
  let token = "";
  afterUpdate(() => {
    if (form?.result.success) {
      goto(`/u/${form.result.data}`);
    }
  });
</script>

<section>
  <h1>Token</h1>
  <div>
    <form method="POST" action="?/submit">
      <label for="token">
        Have an existing token? Paste token here (ex: gd5K8VuFcOGj3Zp4Lalv-)
      </label>
      <p class="help-text">See <a href="guide">Guide</a>for me information</p>
      <input name="token" placeholder="enter token..." bind:value={token} />

      <button disabled={token !== data.userToken}>Submit</button>
    </form>

    <GenerateToken generateDisabled={!!data.userToken}
      ><p class="help-text">
        New to ProfileTalk? Generate token to <a href="/guide">get started</a
        >now
      </p></GenerateToken
    >
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
