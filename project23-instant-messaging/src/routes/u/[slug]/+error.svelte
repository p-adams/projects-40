<script lang="ts">
  import { page } from "$app/stores";
</script>

<section>
  <h1>error page</h1>
  <p>
    {$page.params.slug} does not exist. If you would like to create a new profile,
    <a href="/token">generate new token</a>
  </p>
</section>
