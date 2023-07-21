<script lang="ts">
  import me from "./stores/me";
  let username = "";
  let password = "";
  let error: string | null = null;
  function handleRegistration() {
    const result = $me.registerUser(username, password);
    username = "";
    password = "";
    if (!result.success) {
      error = result.msg;
      return;
    }
    // TODO: redirect to new user onboarding home
  }
</script>

{#if error}
  <div class="error">{error}</div>
{/if}
<form on:submit|preventDefault={() => handleRegistration()}>
  <h2>Create your account</h2>
  <label>
    Name
    <input name="username" bind:value={username} />
  </label>
  <label>
    Password
    <input name="password" bind:value={password} />
  </label>
  <button type="submit">Register</button>
</form>
<div>Already a member? <a href="/u/authenticate">Login</a></div>
