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
	$: itemsInCartCount = cartItems?.length;
	$: itemsInCartStr =
		itemsInCartCount !== 1 ? `${itemsInCartCount} items in your cart` : '1 item in your cart';
</script>

<svelte:head>
	<title>Cart</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h2 class="cart-count-header">{itemsInCartStr}</h2>
	<div class="cart-items-and-payment">
		<div class="cart-items">
			{#each cartItems as cartItem, index}
				<div class="cart-line-item">
					<div>{index}</div>
					<div>{cartItem.name}</div>
				</div>
			{/each}
		</div>
		<div class="payment">payment</div>
	</div>
</section>

<style>
	.cart-count-header {
		font-size: 32px;
	}
	.cart-items-and-payment {
		display: flex;
		gap: 66px;
	}
	.cart-items {
		flex: 1;
	}
	.cart-line-item {
		display: grid;
		grid-template-columns: minmax(0, 200px) 1fr;
	}
	.cart-line-item:not(:last-child) {
		border-bottom: 1px solid gray;
	}
</style>
