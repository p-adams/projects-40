<script lang="ts">
  export let data;
  $: queryString = data.search.params.get("q");
</script>

search results
