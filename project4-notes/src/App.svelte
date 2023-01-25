<script lang="ts">
  import { afterUpdate } from "svelte";
  import { MenuModes } from "./lib/datatypes";
  import NotesArea from "./lib/NotesArea.svelte";
  import NotesList from "./lib/NotesList.svelte";
  import NotesMenuBar from "./lib/NotesMenuBar.svelte";
  $: notes = [
    {
      id: 0,
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  $: selectedNote = notes[0];
  $: menuMode = MenuModes.read;
</script>

<main>
  <h2>Notes Project</h2>
  <NotesMenuBar
    on:menuItemSelected={(event) => (menuMode = event.detail.menuMode)}
  />
  <div class="card">
    <NotesList
      {notes}
      {selectedNote}
      on:selectNote={(event) => (selectedNote = event.detail.note)}
    />
    <NotesArea {menuMode} {selectedNote} />
  </div>
</main>

<style>
  h2 {
    text-align: center;
  }
</style>
