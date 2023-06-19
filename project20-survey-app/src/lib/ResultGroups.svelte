<script lang="ts">
  export let data: Lib.SurveyCategory;
  export let responses: Lib.SurveyResult;
  const categoryName = (name: string) => name.replaceAll(/\s/g, "");
  function maxResponse(responses: Record<string, number>): {
    key: string;
    value: number;
  } | null {
    const values = Object.values(responses);
    const highestValue = Math.max(...values);
    const highestKey = Object.keys(responses).find(
      (key) => responses[key] === highestValue
    );
    if (!highestKey) {
      return null;
    }

    return { key: highestKey, value: highestValue };
  }
  function maxResponseClass(
    responses: any,
    category: Lib.SurveyQuestionGroup,
    subcategoryValue: string
  ) {
    const categoryResponses = responses[categoryName(category.name)];
    const $max = maxResponse(categoryResponses);
    if (!$max) {
      return "";
    }
    const maxResponseValue = $max.value;
    const maxResponseKey = $max.key;

    return maxResponseValue && maxResponseKey === subcategoryValue
      ? "max-response"
      : "";
  }
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
              <li
                class={`result-item ${maxResponseClass(
                  responses,
                  category,
                  subcategory.value
                )}`}
              >
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
  .max-response {
    background-color: aquamarine;
  }
</style>
