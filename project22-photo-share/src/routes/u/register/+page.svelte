<script lang="ts">
  import { goto } from "$app/navigation";
  import { afterUpdate } from "svelte";

  export let form;
  afterUpdate(() => {
    console.log("form: ", form);
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
  <button>Register</button>
</form>
<div>Already a member? <a href="/u/authenticate">Login</a></div>
