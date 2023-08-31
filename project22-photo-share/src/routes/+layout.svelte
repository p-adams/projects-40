<script lang="ts">
</script>

<div>
  <header>
    <nav>
      <ul>
        <li><a href="/">home</a></li>
      </ul>
    </nav>
    <div>Already a member? <a href="/u/authenticate">Login</a></div>
    <div>Not a member? <a href="/u/register">Sign up</a></div>
    <a href="/u/logout">Logout</a>
  </header>
  <main>
    <slot />
  </main>
  <footer>footer</footer>
</div>

<style>
  @import "../app.css";
</style>
