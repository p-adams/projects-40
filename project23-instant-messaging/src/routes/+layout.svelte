<script lang="ts">
  export let data;
</script>

<header>
  <nav>
    <ul>
      <li>ProfileTalk</li>
    </ul>
    {data.userToken}
  </nav>
</header>
<main>
  <slot />
</main>

<style>
  @import "../app.css";
  main {
    height: calc(100vh - 60px);
  }
</style>
