<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import me from "./stores/me";
  const dispatch = createEventDispatcher<Lib.EventPayload>();
  let username = "";
  let password = "";
  let error: string | null = null;
  function handleLogin() {
    const result = $me.authenticateUser(username, password);
    username = "";
    password = "";
    if (!result.success) {
      error = result.msg;
      return;
    }
    // TODO: redirect to new user onboarding home
  }
</script>

<form on:submit|preventDefault={() => handleLogin()}>
  <h2>Welcome back</h2>
  <label>
    Name
    <input name="username" bind:value={username} />
  </label>
  <label>
    Password
    <input name="password" bind:value={password} />
  </label>
  <button type="submit">Login</button>
</form>
<div>Not a member? <a href="/u/register">Register</a></div>
