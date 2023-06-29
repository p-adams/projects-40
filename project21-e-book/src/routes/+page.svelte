<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Pagination from "$lib/Pagination.svelte";

  export let data;
  $: currentPage = 1;
  function formatData(format: any) {
    return Object.keys(format);
  }
  function getFormatLink(
    format: Record<string, string | undefined>,
    key: string
  ): string | undefined {
    return format[key];
  }
  function handlePageChange(page: number) {
    currentPage = page;
    goto(`?page=${currentPage.toString()}`);
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>

<section>
  <h1>E Book</h1>
  <Pagination
    {currentPage}
    totalPages={2218}
    on:onPageChange={(e) => handlePageChange(e.detail.currentPage)}
  />
  <div class="Main-book-list">
    <ul>
      {#each data.results as result}
        <li class="Item--book-result">
          <div class="Item--primary">
            <span class="Item--title">{result.title}</span>
            <ul class="Item--authors">
              {#each result.authors as author}
                <li>
                  {author.name} ({author.birth_year} - {author.death_year}) Age {author.death_year -
                    author.birth_year}
                </li>
              {/each}
            </ul>
          </div>
          <div class="Item--secondary">
            <div><img src={result.formats["image/jpeg"]} alt="" /></div>
            <div>
              <h2>Download</h2>
              <div class="Download--table">
                <div class="th">Format</div>
                <div class="th">Link</div>
                {#each formatData(result.formats) as key}
                  <div class="Download--row">
                    <div class="td">{key}</div>
                    <div class="td">
                      <a
                        href={getFormatLink(result.formats, key)}
                        target="_blank">{getFormatLink(result.formats, key)}</a
                      >
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <div class="Item--tertiary">
            <div>
              Subjects: <ul>
                {#each result.subjects as subject}
                  <li>{subject}</li>
                {/each}
              </ul>
            </div>
            <div>
              Bookshelves: {#if !!result.bookshelves.length}
                <ul>
                  {#each result.bookshelves as bookshelf}
                    <li>{bookshelf}</li>
                  {/each}
                </ul>
              {:else}
                {"—"}
              {/if}
            </div>
            <div>
              Languages: <ul>
                {#each result.languages as language}
                  <li>{language}</li>
                {/each}
              </ul>
            </div>
            <div>
              Translators:
              {#if !!result.translators.length}
                <ul>
                  {#each result.translators as translator}
                    <li>{translator}</li>
                  {/each}
                </ul>
              {:else}
                {"—"}
              {/if}
            </div>

            <div>Download: {result.download_count}</div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .Item--title {
    font-weight: bold;
  }
  .Item--secondary {
    display: flex;
    gap: 16px;
  }
  .Download--table {
    display: grid;
    grid-template-columns: minmax(150px, 200px) 1fr;
  }
  .Download--row {
    display: contents;
  }
  .th,
  .td {
    border: 1px solid gray;
    padding: 8px;
  }
</style>
