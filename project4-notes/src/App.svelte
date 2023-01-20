<script lang="ts">
  import NotesArea from "./lib/NotesArea.svelte";
  import NotesList from "./lib/NotesList.svelte";
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
</script>

<main>
  <h2>Notes Project</h2>
  <div class="card">
    <NotesList
      {notes}
      on:selectNote={(event) => console.log(event.detail.note)}
    />
    <NotesArea />
  </div>
</main>

<style>
  h2 {
    text-align: center;
  }
</style>
