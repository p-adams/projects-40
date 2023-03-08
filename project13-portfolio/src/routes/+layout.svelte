<script>
  import { page } from "$app/stores";
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
    <p>footer</p>
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
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }

  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
