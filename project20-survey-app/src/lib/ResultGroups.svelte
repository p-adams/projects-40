<script lang="ts">
  export let data: Lib.SurveyCategory;
  export let responses: Lib.SurveyResult;
</script>

<section>
  <h2>{data.name}</h2>
  <div>
    <h4>{data.description ?? ""}</h4>
    {#each data.surveyQuestionGroups as category}
      {#if category.name}
        <li>
          <h3 class="category-name">{category.name}</h3>
          <p class="category-description">{category.description}</p>
          <ul>
            {#each category.options as subcategory}
              <li>
                <div class="category-name sub">{subcategory.label}</div>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </div>
</section>
