<script lang="ts">
</script>

<div>
  <header>
    <nav>
      <ul>
        <li><a href="/">home</a></li>
      </ul>
    </nav>

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
