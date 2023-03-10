<script lang="ts">
  import { afterUpdate } from "svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>{data.slug}</title>
  <meta name="description" content="Project" />
</svelte:head>
<section>
  <a href="/projects">return</a>
  <h3>{data.slug}</h3>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae
    porttitor urna. Cras id dui aliquam, malesuada tortor quis, pretium nisi.
    Proin tristique eu mauris vel tempus. Etiam id sapien turpis. Pellentesque
    sed lorem tincidunt, lobortis magna quis, vestibulum justo. In vel ante
    ultrices, dignissim nulla dignissim, feugiat dolor. Donec dapibus feugiat
    tristique. Donec quam nibh, tempus non tempor quis, scelerisque quis nisl.
    Donec aliquam dui quis lacus aliquet cursus. In non diam tempor ex eleifend
    sodales nec sed urna.
  </p>
</section>
