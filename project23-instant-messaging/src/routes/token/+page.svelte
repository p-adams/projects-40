<script lang="ts">
  import { goto } from "$app/navigation";
  import GenerateToken from "$lib/generate-token.svelte";
  import { afterUpdate } from "svelte";
  export let data;
  export let form;
  afterUpdate(() => {
    console.log("daat: ", data.userToken);
    if (form?.result.success) {
      goto("/");
    }
  });
</script>

<form method="POST" action="?/submit">
  <label>
    enter token (ex: gd5K8VuFcOGj3Zp4Lalv-)
    <input name="token" placeholder="enter token..." />
  </label>

  <button>Submit</button>
</form>

<GenerateToken />
