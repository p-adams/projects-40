<script lang="ts">
	// import Counter from './Counter.svelte';
	import { onMount } from 'svelte';
	import type { Product } from '../lib/types';
	$: featuredProducts = [] as Product[];
	onMount(async () => {
		const { data: products } = await fetch('/api/products/').then((res) => res.json());
		featuredProducts = products;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>YouTajir</h1>

	<h2>Friendly Commerce Simplified</h2>
	<div>
		{#each featuredProducts as product}
			<div>{product.name}</div>
		{/each}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
