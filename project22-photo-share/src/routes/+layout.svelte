<script lang="ts">
  export let data;
  $: isLoggedIn = data.root.user.username;
</script>

<div>
  <header>
    <nav>
      <ul class="left">
        <li><a href="/">home</a></li>
        {#if isLoggedIn}<li>
            <a href="/u/{data.root.user.username}">stories</a>
          </li>
        {/if}
      </ul>
      <ul class="right">
        {#if isLoggedIn}
          <li>
            Hello: {data.root.user.username}!
          </li>
          <li>
            <a href="/u/logout">Logout</a>
          </li>
        {:else}
          <li>
            Not a member? <a href="/u/register">Sign up</a>
          </li>
          <li>Already a member? <a href="/u/authenticate">Login</a></li>
        {/if}
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</div>

<style>
  @import "../app.css";
  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
</style>
