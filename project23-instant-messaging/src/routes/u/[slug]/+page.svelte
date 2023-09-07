<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="Profile--outer">
  <div>profile info: {$page.params.slug ?? "N/A"}</div>
  <div>timeline</div>
  <aside>messaging</aside>
</div>

<style>
  .Profile--outer {
    height: 100%;
    display: grid;
    grid-template-columns: 300px minmax(400px, 1fr) 300px;
    gap: 10px;
  }
  .Profile--outer > div,
  .Profile--outer > aside {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
