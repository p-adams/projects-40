<script lang="ts">
  import { currency } from "../lib/utils";

  type SelectItem = { label: string; value: string; price: number };
  let riceOptions: Array<SelectItem> = [
    { label: "Plain Rice", value: "plain_rice", price: 0 },
    { label: "Coconut Rice", value: "coconut_rice", price: 0.5 },
    { label: "Blue Rice", value: "blue_rice", price: 0.75 },
  ];
  let sides: Array<SelectItem> = [
    { label: "Chili Sauce", value: "chili_sauce", price: 0.5 },
    { label: "Fried Anchovies", value: "fried_anchovies", price: 0.75 },
    { label: "Roasted Peanuts", value: "roasted_peanuts", price: 0.75 },
    { label: "Cucumber", value: "cucumber", price: 0.5 },
  ];
  let proteins: Array<SelectItem> = [
    { label: "Barbecued Chicken", value: "barbecued_chicken", price: 3.0 },
    { label: "Fried Chicken", value: "fried_chicken", price: 3.5 },
    { label: "Fried Catfish", value: "fried_catfish", price: 2.5 },
    { label: "Shrimp", value: "shrimp", price: 3.0 },
  ];
  let sauces: Array<SelectItem> = [
    { label: "Chili Sauce", value: "chili_sauce", price: 0.5 },
    { label: "Peanut Sauce", value: "peanut_sauce", price: 0.5 },
    { label: "Curry", value: "curry", price: 0.5 },
  ];

  let selectedSides: Array<SelectItem> = [];
  let selectedRice: SelectItem = riceOptions[0];
  let selectedSauces: Array<SelectItem> = [];
  let selectedProteins: Array<SelectItem> = [];
  const removeSide = (side: SelectItem) =>
    (selectedSides = selectedSides.filter(
      (sside) => sside.value !== side.value
    ));
  const removeSauce = (sauce: SelectItem) =>
    (selectedSauces = selectedSauces.filter(
      (ssauce) => ssauce.value !== sauce.value
    ));
  const removeProtein = (protein: SelectItem) =>
    (selectedProteins = selectedProteins.filter(
      (pprotein) => pprotein.value !== protein.value
    ));

  $: subtotal =
    selectedRice.price +
    selectedSides.reduce((acc, curr) => acc + curr?.price, 0) +
    selectedSauces.reduce((acc, curr) => acc + curr.price, 0) +
    selectedProteins.reduce((acc, curr) => acc + curr.price, 0);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Home" />
</svelte:head>
<section>
  <h1>Nasi Builder</h1>

  <div class="Builder">
    <div class="chip">{selectedRice.label}</div>
    <div class="selected-item sides">
      {#each selectedSides as side}
        <div class="chip">
          <span>{side.label}</span>
          <button on:click={() => removeSide(side)}>X</button>
        </div>
      {/each}
    </div>
    <div class="selected-item sauces">
      {#each selectedSauces as sauce}
        <div class="chip">
          <span>{sauce.label}</span>
          <button on:click={() => removeSauce(sauce)}>X</button>
        </div>
      {/each}
    </div>
    <div class="selected-item proteins">
      {#each selectedProteins as protein}
        <div class="chip">
          <span>{protein.label}</span>
          <button on:click={() => removeProtein(protein)}>X</button>
        </div>
      {/each}
    </div>
    <select name="rice" bind:value={selectedRice}>
      {#each riceOptions as rice}
        <option value={rice}
          >{rice.label}
          {#if rice.price !== null}{currency(rice.price)}{/if}</option
        >
      {/each}
    </select>
    <select name="sides" bind:value={selectedSides} multiple>
      {#each sides as side}
        <option value={side}
          >{side.label}
          {#if side.price !== null} {currency(side.price)}{/if}</option
        >
      {/each}
    </select>
    <select name="sauces" bind:value={selectedSauces} multiple>
      {#each sauces as sauce}
        <option value={sauce}
          >{sauce.label}
          {#if sauce.price !== null} {currency(sauce.price)}{/if}</option
        >
      {/each}
    </select>
    <select name="proteins" bind:value={selectedProteins} multiple>
      {#each proteins as protein}
        <option value={protein}
          >{protein.label}
          {#if protein.price !== null} {currency(protein.price)}{/if}</option
        >
      {/each}
    </select>
  </div>
  <div class="subtotal-wrapper">
    <div>
      Subtotal: {currency(subtotal)}
    </div>
    <section class="tip-selection">
      <h4>Tip</h4>
      <div class="selection-group">
        <div>10%</div>
        <div>15%</div>
        <div>20%</div>
        <div>30%</div>
      </div>
      <label for="tip">
        Custom
        <input placeholder="Enter amount" />
      </label>
    </section>
  </div>
</section>

<style>
  .selected-item {
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
    margin-bottom: 4px;
    margin-right: 4px;
  }
  .chip button {
    font-size: 10px;
    margin-left: 4px;
  }
  .subtotal-wrapper {
    margin-top: 10px;
  }
</style>
