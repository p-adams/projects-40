<script lang="ts">
  import NotesArea from "./lib/NotesArea.svelte";
  import NotesList from "./lib/NotesList.svelte";
  import NotesMenuBar from "./lib/NotesMenuBar.svelte";
  $: notes = [
    {
      id: 0,
      title: "note #1",
      body: "",
    },
    {
      id: 1,
      title: "note #2",
      body: "",
    },
    {
      id: 2,
      title: "note #3",
      body: "",
    },
  ];
  $: selectedNote = notes[0];
</script>

<main>
  <h2>Notes Project</h2>
  <NotesMenuBar />
  <div class="card">
    <NotesList
      {notes}
      {selectedNote}
      on:selectNote={(event) => (selectedNote = event.detail.note)}
    />
    <NotesArea />
  </div>
</main>

<style>
  h2 {
    text-align: center;
  }
</style>
