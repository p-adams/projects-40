<script lang="ts">
  import initIdentity from "../services/initIdentity";
</script>

<div>
  <header>
    <nav>
      <ul>
        <li><a href="/">home</a></li>
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
</style>
