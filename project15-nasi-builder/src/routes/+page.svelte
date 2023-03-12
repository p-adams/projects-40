<script lang="ts">
  import { afterUpdate } from "svelte";

  type Side = { label: string; value: string };

  let sides: Array<Side> = [
    { label: "Chili Sauce", value: "chili_sauce" },
    { label: "Fried Anchovies", value: "fried_anchovies" },
    { label: "Roasted Peanuts", value: "roasted_peanuts" },
    { label: "Cucumber", value: "cucumber" },
    { label: "Fried Chicken", value: "fried_chicken" },
  ];

  let selectedSides: Array<Side> = [];
  const removeSide = (side: Side) =>
    (selectedSides = selectedSides.filter(
      (sside) => sside.value !== side.value
    ));
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>
<section>
  <h1>Nasi Builder</h1>

  <div>
    <div class="selected-sides">
      {#each selectedSides as side}
        <div class="chip">
          <span>{side.label}</span>
          <button on:click={() => removeSide(side)}>X</button>
        </div>
      {/each}
    </div>
    <select name="sides" bind:value={selectedSides} multiple>
      {#each sides as side}
        <option value={side}>{side.label}</option>
      {/each}
    </select>
  </div>
</section>

<style>
  .selected-sides {
    min-height: 50px;
    display: flex;
    margin-bottom: 10px;
  }
  .chip {
    display: flex;
    justify-content: end;
    align-items: center;
    width: fit-content;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 30px;
    font-size: small;
  }
  .chip button {
    font-size: 10px;
    margin-left: 4px;
  }
</style>
