<script lang="ts">
	import type { PageData } from './$types';
	import { cart } from '$lib/storage/cart';
	import type { CartItem, Product, ProductVariant } from '$lib/types';
	import { usCurrencyFormat } from '$lib/helpers';
	import { goto } from '$app/navigation';

	export let data: PageData;

	function addToCart(product: PageData) {
		cart?.storeCartItem({ ...(product as unknown as Product), selectedVariant, selectedQuantity });
		goto('/cart');
	}
	$: variants = data.variants as unknown as ProductVariant[];
	let selectedVariant: ProductVariant = variants?.[0];
	let selectedQuantity = 1;
</script>

<section>
	<a href="/">Return</a>
	<div class="product-details-container">
		<div class="product-image-container">
			<img src="https://via.placeholder.com/500" alt="Product" />
		</div>
		<div class="product-selection-container">
			<h1>{usCurrencyFormat(selectedVariant?.price)}</h1>
			<h3>{data.name}</h3>
			<div class="product-variants">
				<label for="product-selection">
					Select
					<select bind:value={selectedVariant}>
						{#each variants as variant}
							<option value={variant}
								>{#if variant?.option0 === 'Default'}
									${variant.price}
								{:else}
									{variant.option0} {variant.option1}: {usCurrencyFormat(variant.price)}
								{/if}</option
							>
						{/each}
					</select>
				</label>
			</div>
			<div class="product-quantity">
				<label for="product-quantity">
					Quantity
					<select bind:value={selectedQuantity}>
						{#each Array(10) as _, i}
							<option value={i + 1}>{i + 1}</option>
						{/each}
					</select>
				</label>
			</div>
			<button on:click={() => addToCart(data)}>Add to cart</button>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
	}
	.product-details-container {
		display: flex;
		gap: 100px;
	}
	.product-selection-container {
		display: flex;
		flex-direction: column;
	}
</style>
