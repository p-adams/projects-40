<script lang="ts">
  export let data: Lib.SurveyCategory;
  export let responses: Lib.SurveyResult;
  const categoryName = (name: string) => name.replaceAll(/\s/g, "");
</script>

<section>
  <h2>{data.name}</h2>
  <div>
    <h4>{data.description ?? ""}</h4>
    {#each data.surveyQuestionGroups as category}
      {#if category.name}
        <li>
          <h3 class="category-name">{category.name}</h3>

          <ul>
            {#each category.options as subcategory}
              <li class="result-item">
                <div class="category-name sub">{subcategory.label}</div>
                <div class="score">
                  {responses[categoryName(category.name)][subcategory.value]}
                </div>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </div>
</section>

<style>
  .result-item {
    display: flex;
  }
  .score {
    margin-left: 10px;
  }
</style>
