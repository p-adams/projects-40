<script lang="ts">
  import { goto } from "$app/navigation";
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
  <div><!-- big blue darter (Cooper's hawk logo here)--></div>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/connect">Connect</a></li>
      <li><a href="/discover">Discover</a></li>
    </ul>
    <ul>
      <li class="search">
        <input
          placeholder="Search"
          on:keydown={(e) => search(e)}
          bind:value={sStr}
        />
      </li>
      <li><a href="/account">Account</a></li>
      <li><a href="/compose">Compose Dart</a></li>
    </ul>
  </nav>
</header>

<style>
  nav {
    display: flex;
    justify-content: space-around;
  }
  ul {
    display: flex;
    gap: 22px;
  }
  .search {
    list-style: none;
  }
</style>
