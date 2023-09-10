<script lang="ts">
  import { goto } from "$app/navigation";
  import GenerateToken from "$lib/generate-token.svelte";
  import { afterUpdate } from "svelte";
  export let form;
  export let data;
  let token = "";
  afterUpdate(() => {
    if (form?.result.success) {
      goto("/");
    }
  });
</script>

<form method="POST" action="?/submit">
  <label>
    Have an existing token? Paste token here (ex: gd5K8VuFcOGj3Zp4Lalv-)
    <input name="token" placeholder="enter token..." bind:value={token} />
  </label>

  <button disabled={token !== data.userToken}>Submit</button>
</form>

<GenerateToken />
