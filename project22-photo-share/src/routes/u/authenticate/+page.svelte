<script lang="ts">
  import { goto } from "$app/navigation";
  import { afterUpdate } from "svelte";
  export let data;
  export let form;
  let errorMsg: string = "";
  afterUpdate(() => {
    if (form?.success) {
      goto(`/u/${data.entryData.user.username}`);
    } else if (form) {
      errorMsg = form.msg;
    }
  });
</script>

<svelte:head>
  <title>EpicSnap Chronicle: Login</title>
  <meta name="description" content="login" />
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
  <button>Log in</button>
</form>
{#if errorMsg}<p class="error-message-text">{errorMsg}</p>{/if}
<div>Not a member? <a href="/u/register">Register</a></div>
