<script lang="ts">
  import surveyStore from "./surveyStore";
  export let data: Lib.SurveyCategory;
  function handleCheckboxChange(
    event: Event & { currentTarget: EventTarget & HTMLInputElement },
    key: string,
    value: string
  ) {
    const checkboxValues = (event.target as HTMLInputElement).checked
      ? [...($surveyStore[key] || []), value] // Add the value to the array
      : ($surveyStore[key] || []).filter((item: any) => item !== value); // Remove the value from the array

    surveyStore.updateSurvey(key, checkboxValues);
  }
</script>

<section>
  <h2>{data.name}</h2>
  <div>
    <h4>{data.description ?? ""}</h4>
    {JSON.stringify($surveyStore)}
    {#each data.surveyQuestionGroups as category}
      {#if category.name}
        <li>
          <div class="category-name">{category.name}</div>
          <ul>
            {#each category.options as subcategory}
              <li>
                <div class="category-name sub">
                  {#if category.allowMultiple}
                    <label for="subcategory">
                      <input
                        type="checkbox"
                        checked={$surveyStore[category.name]?.includes(
                          subcategory.value
                        )}
                        value={subcategory.value}
                        on:change={(event) =>
                          handleCheckboxChange(
                            event,
                            category.name,
                            subcategory.value
                          )}
                      />
                      {subcategory.label}
                    </label>
                  {:else}
                    <label for="subcategory">
                      <input
                        type="radio"
                        bind:group={$surveyStore[category.name]}
                        value={subcategory.value}
                        on:change={() =>
                          surveyStore.updateSurvey(
                            category.name,
                            subcategory.value
                          )}
                      />
                      {subcategory.label}
                    </label>
                  {/if}
                </div>
              </li>
            {/each}
          </ul>
        </li>
      {/if}
    {/each}
  </div>
</section>
