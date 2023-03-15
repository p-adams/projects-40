<script lang="ts">
  import { currency, riceOptions, sides, sauces, proteins } from "../lib/utils";
  import type { SelectItem } from "../lib/types";
  import AppChip from "$lib/AppChip.svelte";

  let selectedSides: Array<SelectItem> = [];
  let selectedRice: SelectItem = riceOptions[0];
  let selectedSauces: Array<SelectItem> = [];
  let selectedProteins: Array<SelectItem> = [];
  let tip = 0.0;
  let orderNumber = 0;

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

  $: getTotal = (selectedItems: SelectItem[]) =>
    selectedItems.reduce((acc, curr) => acc + curr?.price, 0);

  $: total =
    selectedRice.price +
    getTotal(selectedSides) +
    getTotal(selectedSauces) +
    getTotal(selectedProteins) +
    Number(tip);
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
        <AppChip item={side} on:remove={(e) => removeSide(e.detail.item)} />
      {/each}
    </div>
    <div class="selected-item sauces">
      {#each selectedSauces as sauce}
        <AppChip item={sauce} on:remove={(e) => removeSauce(e.detail.item)} />
      {/each}
    </div>
    <div class="selected-item proteins">
      {#each selectedProteins as protein}
        <AppChip
          item={protein}
          on:remove={(e) => removeProtein(e.detail.item)}
        />
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
  <div class="total-wrapper">
    <label for="tip">
      Tip
      <input bind:value={tip} placeholder="Enter $ amount" />
    </label>
    <div>
      Total: {currency(total)}
    </div>
    <div>
      <button
        on:click={() =>
          alert(`Order #${++orderNumber}. Thank you for your order!`)}
        >Order</button
      >
    </div>
  </div>
</section>

<style>
  .selected-item {
    min-height: 50px;
    display: flex;
    margin-bottom: 10px;
  }
  .total-wrapper {
    margin-top: 10px;
  }
  .total-wrapper div {
    margin-top: 10px;
  }
</style>
