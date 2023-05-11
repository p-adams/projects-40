<script lang="ts">
  import { onMount } from "svelte";

  export let data: Array<Lib.SurveyCategory> = [];
  onMount(() => console.log(data));
</script>
