<script lang="ts">
  import { onMount } from "svelte";

  type offsets = { x: number; y: number };
  let _canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null;
  let isDrawing = false;
  let coords: offsets;
  let l: number;
  let t: number;
  let width: number = 600;
  let height: number = 400;

  onMount(() => {
    ctx = _canvas.getContext("2d");
    ctx!.lineWidth = 2;
    resize();
  });

  function start({ x, y }: offsets) {
    isDrawing = true;
    coords = { x, y };
  }
  function end() {
    console.log("end");
    isDrawing = false;
  }
  function draw(offsets: offsets) {
    if (!isDrawing) {
      return;
    }
    const { x: x1, y: y1 } = offsets;
    const { x, y } = coords;

    ctx?.beginPath();
    ctx?.moveTo(x, y);
    ctx?.lineTo(x1, y1);
    ctx?.closePath();
    ctx?.stroke();
    coords = { x: x1, y: y1 };
  }
  function resize() {
    const { top, left } = _canvas.getBoundingClientRect();
    l = left;
    t = top;
  }
</script>

<svelte:head>
  <title>Drawing App</title>
  <meta name="description" content="Drawing App" />
</svelte:head>

<svelte:window on:resize={resize} />

<section>
  <h1>Drawing App</h1>

  <canvas
    {width}
    {height}
    bind:this={_canvas}
    on:mousedown={({ offsetX, offsetY }) => start({ x: offsetX, y: offsetY })}
    on:mousemove={({ offsetX, offsetY }) => draw({ x: offsetX, y: offsetY })}
    on:mouseup={end}
    on:mouseleave={end}
    on:touchstart={(e) => {
      const { clientX, clientY } = e.touches[0];
      start({ x: clientX - l, y: clientY - t });
    }}
    on:touchmove={(e) => {
      const { clientX, clientY } = e.touches[0];
      draw({ x: clientX - l, y: clientY - t });
    }}
    on:touchend={end}
  />
</section>

<style>
  canvas {
    outline: 1px solid black;
  }
</style>
