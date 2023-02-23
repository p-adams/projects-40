<script lang="ts">
	import type { PageData } from './$types';
	import { cart } from '$lib/storage/cart';
	import type { ProductVariant } from '$lib/types';
	import { productPriceDisplay } from '$lib/helpers';

	export let data: PageData;
	function addToCart(product: PageData) {
		cart?.storeCartItem(product);
	}
	$: productPrice = (variants: any) => productPriceDisplay(variants);
</script>

<section>
	<a href="/">Return</a>
	<div class="product-details-container">
		<div class="product-image-container">
			<img src="https://via.placeholder.com/500" alt="Product" />
		</div>
		<div>
			<h1>{productPrice(data.variants)}</h1>
			<h3>{data.name}</h3>
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
</style>
