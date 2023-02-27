<script lang="ts">
	import type { PageData } from './$types';
	import { cart } from '$lib/storage/cart';
	import type { ProductVariant } from '$lib/types';
	import { productPriceDisplay } from '$lib/helpers';

	export let data: PageData;

	function addToCart(product: PageData) {
		cart?.storeCartItem({ ...product, selectedVariant });
	}
	$: productPrice = (variants: any) => productPriceDisplay(variants as ProductVariant[]);
	$: variants = data.variants as unknown as ProductVariant[];
	let selectedVariant: ProductVariant = variants?.[0];
</script>

<section>
	<a href="/">Return</a>
	<div class="product-details-container">
		<div class="product-image-container">
			<img src="https://via.placeholder.com/500" alt="Product" />
		</div>
		<div class="product-selection-container">
			<h1>{productPrice(data.variants)}</h1>
			<h3>{data.name}</h3>
			<div class="product-variants">
				<label for="production selection">
					Select
					<select bind:value={selectedVariant}>
						{#each variants as variant}
							<option value={variant}>{variant.option0} {variant.option1}: ${variant.price}</option>
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
