<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher<Lib.EventPayload>();
  let username = "";
  let password = "";
</script>

<form>
  <label>
    Name
    <input
      name="username"
      bind:value={username}
      on:keyup={(e) =>
        dispatch("input", {
          inputData: { field: e.currentTarget.name, value: username },
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
          inputData: { field: e.currentTarget.name, value: password },
        })}
    />
  </label>
</form>
