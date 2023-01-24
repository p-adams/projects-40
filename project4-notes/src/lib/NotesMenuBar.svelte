<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { MenuModes } from "./datatypes";
  const dispatch = createEventDispatcher();
  const handleMenuItemSelection = (menuMode: MenuModes) => {
    dispatch("menuItemSelected", { menuMode });
  };
</script>

<div class="Notes-menu-bar">
  <div
    on:click={() => handleMenuItemSelection(MenuModes.create)}
    aria-hidden="true"
  >
    create
  </div>
  <div
    on:click={() => handleMenuItemSelection(MenuModes.update)}
    aria-hidden="true"
  >
    edit
  </div>
  <div
    on:click={() => handleMenuItemSelection(MenuModes.delete)}
    aria-hidden="true"
  >
    delete
  </div>
</div>

<style>
  .Notes-menu-bar {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>
