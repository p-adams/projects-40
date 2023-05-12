<script lang="ts">
  export let data: Lib.SurveyCategory;
</script>

<section>
  <h2>{data.name}</h2>
  <div>
    <h4>{data.description ?? ""}</h4>
    {#each data.surveyQuestionGroups as category}
      <li>
        <div class="category-name">{category.name}</div>
        <ul>
          {#each category.options as subcategory}
            <li>
              <div class="category-name sub">
                {#if category.allowMultiple}
                  <label for="subcategory">
                    <input type="checkbox" />
                    {subcategory.label}
                  </label>
                {:else}
                  <label for="subcategory">
                    <input type="radio" />
                    {subcategory.label}
                  </label>
                {/if}
              </div>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </div>
</section>
