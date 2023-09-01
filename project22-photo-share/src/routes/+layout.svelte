<script lang="ts">
  export let data;
  $: isLoggedIn = data.entryData.user.username;
</script>

<div>
  <header>
    <nav>
      <ul class="left">
        <li><a href="/">home</a></li>
        {#if isLoggedIn}<li>
            <a href="/u/{data.entryData.user.username}">stories</a>
          </li>
        {/if}
      </ul>
      <ul class="right">
        {#if !isLoggedIn}<li>
            Not a member? <a href="/u/register">Sign up</a>
          </li>{/if}
        {#if !isLoggedIn}
          <li>Already a member? <a href="/u/authenticate">Login</a></li>{/if}
        {#if isLoggedIn}<li>
            Hello: {data.entryData.user.username}!
          </li>{/if}
        {#if isLoggedIn}<li>
            <a href="/u/logout">Logout</a>
          </li>{/if}
      </ul>
    </nav>
  </header>
  <main>
    <slot />
  </main>
  <footer>footer</footer>
</div>

<style>
  @import "../app.css";
  nav {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
</style>
