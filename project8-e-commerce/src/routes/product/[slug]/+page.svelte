<script lang="ts">
	import type { PageData } from './$types';
	import { cart } from '$lib/storage/cart';

	export let data: PageData;
	function addToCart(product: PageData) {
		cart?.storeCartItem(product);
	}
</script>

<section>
	<a href="/">Return</a>
	<h3>Product Page {data.name}</h3>
	<div>
		<button on:click={() => addToCart(data)}>Add to cart</button>
	</div>
</section>
