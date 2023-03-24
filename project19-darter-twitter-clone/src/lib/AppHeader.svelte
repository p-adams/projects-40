<script lang="ts">
  import { goto } from "$app/navigation";
  import logo from "$lib/assets/head.png";
  import { sanitizeQueryString } from "./helpers";
  let sStr = "";
  function search(
    e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
  ) {
    if (e.code === "Enter") {
      goto(`/search?q=${sanitizeQueryString(sStr)}`);
    }
  }
</script>

<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/connect">Connect</a></li>
      <li><a href="/discover">Discover</a></li>
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
      <li><a href="/compose">Compose</a></li>
    </ul>
  </nav>
</header>

<style>
  nav {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
  }
  .logo img {
    width: 25px;
    height: 25px;
  }
  ul {
    display: flex;
    gap: 22px;
    list-style: none;
  }
  ul.right {
    margin-right: 40px;
  }
</style>
