<script lang="ts">
  export let data: Lib.SurveyCategories = [];
</script>

<div class="sidebar">
  <ul>
    {#each data as category}
      <li>
        <div class="category-name">{category.name}</div>
        <ul>
          {#each category.surveyQuestionGroups as subcategory}
            <li>
              <div class="category-name sub">{subcategory.name}</div>
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>
