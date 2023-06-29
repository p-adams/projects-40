<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let currentPage = 0;
  export let totalPages = 0;
  let inputPage = "1";

  function handlePageSubmit(e: { preventDefault: () => void }) {
    e?.preventDefault();
    const newPage = parseInt(inputPage);
    if (newPage >= 1 && newPage <= totalPages && newPage !== currentPage) {
      dispatch("onPageChange", { currentPage: newPage });
    }
    inputPage = "";
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      dispatch("onPageChange", { currentPage: currentPage - 1 });
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      dispatch("onPageChange", { currentPage: currentPage + 1 });
    }
  }
</script>

<div class="Pagination">
  <button on:click={() => handlePrevPage()}> Previous </button>
  <form on:submit={handlePageSubmit}>
    <input type="number" bind:value={inputPage} min="1" max={totalPages} />
    <button type="submit">Go</button>
  </form>
  <button on:click={handleNextPage}> Next </button>
</div>
