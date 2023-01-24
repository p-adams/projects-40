<script lang="ts">
  enum MenuModes {
    create = "create",
    read = "read",
    update = "update",
    delete = "delete",
  }
</script>

<div class="Notes-menu-bar">
  <div>create</div>
  <div>edit</div>
  <div>delete</div>
</div>

<style>
  .Notes-menu-bar {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>
