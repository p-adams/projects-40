<script lang="ts">
	import { goto } from '$app/navigation';

	// import Counter from './Counter.svelte';
	import { onMount } from 'svelte';
	import type { Product } from '../lib/types';
	import { CartStorage } from '$lib/storage/cart';
	import { afterUpdate } from 'svelte';
	// TODO move cart initialization to product details page
	$: cart = null as null | CartStorage;
	$: featuredProducts = [] as Product[];
	onMount(async () => {
		const { data: products } = await fetch('/api/products/').then((res) => res.json());
		featuredProducts = products;
		cart = new CartStorage(products);
	});
	afterUpdate(() => {
		cart?.subscribe((val) => {});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>YouTajir</h1>

	<h2>Friendly Commerce Simplified</h2>
	<div class="product-grid">
		{#each featuredProducts as product}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="product-card" on:click={() => goto(`/product/${product.productId}`)}>
				<h3>{product.name}</h3>
				<div>product content</div>
			</div>
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

	.product-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	.product-card {
		outline: 1px solid gray;
		display: flex;
		flex-direction: column;
		height: 220px;
		padding: 8px;
	}
	.product-card h3 {
		padding: 0;
		margin: 0;

		text-align: center;
	}

	/* TODO: use following CSS for e commerce SVG logo */

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
