<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher<Lib.EventPayload>();
  export let username = "";
  export let password = "";
</script>

<form
  on:submit|preventDefault={(e) =>
    dispatch("identitySubmit", { data: { username, password } })}
>
  <label>
    Name
    <input
      name="username"
      bind:value={username}
      on:keyup={(e) =>
        dispatch("input", {
          data: { field: e.currentTarget.name, value: username },
        })}
    />
  </label>
  <label>
    Password
    <input
      name="password"
      bind:value={password}
      on:keyup={(e) =>
        dispatch("input", {
          data: { field: e.currentTarget.name, value: password },
        })}
    />
  </label>
  <button type="submit">Submit</button>
</form>
