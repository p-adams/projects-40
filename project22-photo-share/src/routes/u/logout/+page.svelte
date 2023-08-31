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

<section>
  <h1>Are you sure you want to logout?</h1>
  <div>
    <form method="POST">
      <button>Logout</button>
    </form>
    <form on:submit|preventDefault={() => goto("/")}>
      <button type="submit">Cancel</button>
    </form>
  </div>
</section>
