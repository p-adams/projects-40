<script lang="ts">
  import { page } from "$app/stores";
  import AppDate from "../lib/AppDate.svelte";
</script>

<div class="app">
  <ul>
    <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
      <a href="/">Home</a>
    </li>
    <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
      <a href="/about">About</a>
    </li>
    <li aria-current={$page.url.pathname === "/projects" ? "page" : undefined}>
      <a href="/projects">Projects</a>
    </li>
    <li aria-current={$page.url.pathname === "/contact" ? "page" : undefined}>
      <a href="/contact">Contact</a>
    </li>
  </ul>

  <main>
    <slot />
  </main>

  <footer>
    <div>visitors (+1_000_000)</div>
    <a
      href="https://github.com/p-adams/projects-40/tree/main/project13-portfolio"
      target="_blank"
      rel="noreferrer">view source</a
    >
    <div>
      <AppDate />
    </div>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem 1rem 2.5rem;
    width: 100%;

    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px;
  }

  footer a {
    font-weight: bold;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
