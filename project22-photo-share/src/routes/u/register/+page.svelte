<script lang="ts">
  import { goto } from "$app/navigation";
  import { afterUpdate } from "svelte";
  export let data;
  export let form;
  let errorMsg: string = "";
  afterUpdate(() => {
    if (form?.success) {
      goto(`/u/${data.root.user.username}`);
    } else if (form) {
      errorMsg = form.msg;
    }
  });
</script>

<svelte:head>
  <title>EpicSnap Chronicle: Register</title>
  <meta name="description" content="register" />
</svelte:head>

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
{#if errorMsg}<p class="error-message-text">{errorMsg}</p>{/if}
<div>Already a member? <a href="/u/authenticate">Login</a></div>
