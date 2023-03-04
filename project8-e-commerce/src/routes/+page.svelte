<script lang="ts">
	import { goto } from '$app/navigation';
	import { productPriceDisplay } from '$lib/helpers';
	import { afterUpdate, onMount } from 'svelte';
	import type { Product, ProductVariant } from '../lib/types';
	import Search from './Search.svelte';

	onMount(async () => {
		const { data: products } = await fetch('/api/products/').then((res) => res.json());
		featuredProducts = products;
	});

	$: featuredProducts = [] as Product[];
	$: productPrice = (variants: any) => productPriceDisplay(variants as ProductVariant[]);
	let searchVal = '';
	$: filteredFeaturedProducts = featuredProducts.filter((product) =>
		product.name.includes(searchVal)
	);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="TeeTajir featured products" />
</svelte:head>

<section>
	<Search on:search={(e) => (searchVal = e.detail.value)} />
	<div class="product-grid">
		{#each filteredFeaturedProducts as product}
			<div class="product-card">
				<img
					src="https://via.placeholder.com/120"
					on:click={() => goto(`/product/${product.productId}`)}
					on:keypress={() => goto(`/product/${product.productId}`)}
					alt="Product"
				/>
				<div class="content">
					<a href={`/product/${product.productId}`}>{product.name}</a>
					<div class="price">
						{productPrice(product.variants)}
					</div>
				</div>
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
		display: flex;
		flex-direction: column;
		height: 220px;
		text-align: center;
		padding: 8px;
	}
	.product-card a {
		padding: 0;
		margin: 0;
		font-size: 13px;
		text-align: center;
	}
	.product-card img {
		cursor: pointer;
		object-fit: contain;
	}

	.product-card .content {
		margin-top: 4px;
	}

	.product-card .price {
		margin-top: 4px;
		font-weight: bold;
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
