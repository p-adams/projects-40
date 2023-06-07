<script lang="ts">
  export let data: Lib.SurveyCategories = [];
</script>

<div class="sidebar">
  <ul>
    {#each data as category}
      {#if category.name}<li>
          <div class="category-name">{category.name}</div>
          <ul>
            {#each category.surveyQuestionGroups as subcategory}
              <li>
                <div class="category-name sub">{subcategory.name}</div>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style>
  .sidebar {
    margin-right: 10px;
  }
</style>
