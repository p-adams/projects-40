<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import logo from "$lib/assets/head.png";
  import composeDialogStore from "$lib/dialog/composeDialogStore";
  import { ariaCurrent, sanitizeQueryString } from "./helpers";
  import ComposeButton from "./compose/ComposeButton.svelte";
  let sStr = "";
  function search(
    e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    if (e.code === "Enter") {
      goto(`/search?q=${sanitizeQueryString(sStr)}`);
    }
  }
  $: currentPage = (path: string) => ariaCurrent($page, path);
</script>

<header>
  <nav>
    <ul>
      <li aria-current={currentPage("/")}>
        <a href="/">Home</a>
      </li>
      <li aria-current={currentPage("/connect")}>
        <a href="/connect">Connect</a>
      </li>
      <li aria-current={currentPage("/discover")}>
        <a href="/discover">Discover</a>
      </li>
    </ul>
    <div class="logo">
      <img src={logo} alt="big blue darter logo" />
    </div>
    <ul class="right">
      <li class="search-container">
        <i class="fas fa-search" />
        <input
          placeholder="Search"
          on:keydown={(e) => search(e)}
          bind:value={sStr}
        />
      </li>
      <li><a href="/account">Account</a></li>
      <li>
        <ComposeButton on:compose={() => composeDialogStore.openDialog()} />
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: var(--darkNavy);
    height: 60px;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
  ul {
    display: flex;
    gap: 22px;
    list-style: none;
  }
  ul.right {
    margin-right: 40px;
  }
  li {
    position: relative;
  }
  li a {
    color: var(--lightGray);
  }
  li[aria-current="page"]::before {
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent var(--orangeAccent) transparent;
    content: "";
    position: absolute;
    top: 120%;
    left: 35%;
    color: var(--pureWhite);
  }
  .search-container {
    position: relative;
  }
  .search-container i {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-70%);
  }
  .search-container input {
    padding-left: 30px;
  }
  /*.compose {
    height: 30px;
    width: 40px;
    background-color: var(--orangeAccent);
    color: var(--pureWhite);
  }*/
</style>
