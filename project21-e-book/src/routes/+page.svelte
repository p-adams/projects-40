<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>

<section>
  <h1>E Book</h1>
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
            <div>download links table</div>
          </div>
          <div class="Item--tertiary">
            <div>bookshelves</div>
            <div>languages</div>
            <div>subjects</div>
            <div>translators</div>
            <div>download count</div>
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
</style>
