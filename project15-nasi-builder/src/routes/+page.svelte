<script lang="ts">
  type Side = { label: string; value: string; price: number | null };

  let sides: Array<Side> = [
    { label: "Chili Sauce", value: "chili_sauce", price: 0.5 },
    { label: "Fried Anchovies", value: "fried_anchovies", price: 0.75 },
    { label: "Roasted Peanuts", value: "roasted_peanuts", price: 0.75 },
    { label: "Cucumber", value: "cucumber", price: 0.5 },
    { label: "Fried Chicken", value: "fried_chicken", price: 3.5 },
  ];

  let selectedSides: Array<Side> = [];
  const removeSide = (side: Side) =>
    (selectedSides = selectedSides.filter(
      (sside) => sside.value !== side.value
    ));
  const currency = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
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
        <option value={side}
          >{side.label}
          {#if side.price !== null} {currency(side.price)}{/if}</option
        >
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
