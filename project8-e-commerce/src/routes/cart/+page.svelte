<script lang="ts">
	import type { Product } from '$lib/types';
	import { cart } from '$lib/storage/cart';
	import { afterUpdate } from 'svelte';
	$: cartItems = [] as Product[];
	afterUpdate(() =>
		cart.subscribe((cart) => {
			cartItems = cart;
		})
	);
</script>

<section>
	<h3>Cart</h3>
	<div>
		{#each cartItems as cartItem, index}
			<div class="cart-line-item">
				<div>{index}</div>
				<div>{cartItem.name}</div>
			</div>
		{/each}
	</div>
</section>
