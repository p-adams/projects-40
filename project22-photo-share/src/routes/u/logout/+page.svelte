<script lang="ts">
  import { goto } from "$app/navigation";
  import { afterUpdate } from "svelte";
  export let form;
  afterUpdate(() => {
    if (form?.success) {
      goto("/");
    }
  });
</script>

<form method="POST">
  <button>logout</button>
</form>
