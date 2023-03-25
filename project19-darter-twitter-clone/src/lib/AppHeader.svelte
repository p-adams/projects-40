<script lang="ts">
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import logo from "$lib/assets/head.png";
  import composeDialogStore from "$lib/composeDialogStore";
  import { ariaCurrent, sanitizeQueryString } from "./helpers";
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
      <li class="search">
        <input
          placeholder="Search"
          on:keydown={(e) => search(e)}
          bind:value={sStr}
        />
      </li>
      <li><a href="/account">Account</a></li>
      <li>
        <button class="compose" on:click={() => composeDialogStore.openDialog()}
          >Compose</button
        >
      </li>
    </ul>
  </nav>
</header>

<style>
  header {
    background-color: var(--darkNavy);
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
    content: "*";
    position: absolute;
    top: 100%;
    left: 50%;
    color: var(--pureWhite);
  }
</style>
