<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
</script>

<main>
  <div>
    <a href="#/" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo TeeTajir" alt="TeeTajir Logo" />
    </a>
  </div>
  <h1>TeeTajir</h1>

  <div class="card" />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.TeeTajir:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
