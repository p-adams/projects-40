<script lang="ts">
</script>

<div class="Card">
  <slot name="date-header" />
  <slot name="weather-content" />
</div>

<style>
  .Card {
    outline: 1px solid lightgray;
    height: 180px;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    padding: 4px;
  }
</style>
