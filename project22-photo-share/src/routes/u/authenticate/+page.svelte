<script lang="ts">
  import { goto } from "$app/navigation";
  import { afterUpdate } from "svelte";

  export let form;
  afterUpdate(() => {
    if (form?.success) goto("/");
  });
</script>

<form method="POST">
  <label>
    Email
    <input name="username" />
  </label>
  <label>
    Password
    <input name="password" />
  </label>
  <button>Log in</button>
</form>
<div>Not a member? <a href="/u/register">Register</a></div>
