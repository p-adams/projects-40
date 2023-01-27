<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import { MenuModes, type Note } from "./lib/datatypes";
  import NotesArea from "./lib/NotesArea.svelte";
  import NotesList from "./lib/NotesList.svelte";
  import NotesMenuBar from "./lib/NotesMenuBar.svelte";
  let notes: Array<Note>;
  let selectedNote: Note;
  let menuMode: MenuModes;
  $: notes = [
    {
      id: 0,
      body: "Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      body: "Ut enim ad minim veniam, \nquis nostrud exercitation ullamco laboris \nnisi ut aliquip ex ea commodo consequat. ",
    },
    {
      id: 2,
      body: "Duis aute irure dolor in reprehenderit\nin voluptate velit esse cillum \ndolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt \nmollit anim id est laborum.",
    },
  ];
  $: selectedNote = null;
  $: menuMode = MenuModes.read;
  $: noteInput = "";
  onMount(() => {
    selectedNote = notes[0];
  });

  afterUpdate(() => {
    switch (menuMode) {
      case "create":
        const note = {
          id: notes.at(-1) ? notes.at(-1)?.id + 1 : 0,
          body: "TEST",
        };
        selectedNote = note;
        notes = [...notes, selectedNote];
        noteInput = selectedNote.body;
        menuMode = MenuModes.update;
      case "read":
        break;
      case "update":
        noteInput = !!noteInput ? noteInput : selectedNote.body;
        break;
      case "delete":
        notes = notes.filter((note) => note.id !== selectedNote.id);
        menuMode = MenuModes.read;
        selectedNote = notes.at(0);
        break;
      default:
        console.error("not found");
    }
  });
  function handleSelectNote(note) {
    selectedNote = note;
    menuMode = MenuModes.read;
    noteInput = "";
  }
  function handleNoteInput(input) {
    noteInput = input;
    const idx = notes.findIndex((note) => note.id === selectedNote.id);
    notes[idx].body = noteInput;
  }
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
      on:selectNote={(event) => handleSelectNote(event.detail.note)}
    />
    <NotesArea
      {menuMode}
      {selectedNote}
      {noteInput}
      on:notesAreaInput={(e) => handleNoteInput(e.detail.value)}
    />
  </div>
</main>

<style>
  h2 {
    text-align: center;
  }
</style>
