<script lang="ts">
	import type { CartItem, Product } from '$lib/types';
	import { cart } from '$lib/storage/cart';
	import { afterUpdate } from 'svelte';
	import { usCurrencyFormat } from '$lib/helpers';
	$: cartItems = [] as CartItem[];
	afterUpdate(() =>
		cart.subscribe((cart) => {
			cartItems = cart;
		})
	);
	$: itemsInCartCount = cartItems.reduce(($p, $c) => ($p += $c.selectedQuantity), 0);
	$: itemsInCartStr =
		itemsInCartCount !== 1 ? `${itemsInCartCount} items in your cart` : '1 item in your cart';
	$: subtotal = usCurrencyFormat(
		cartItems.reduce(($p, $c) => $p + $c.selectedVariant.price * $c.selectedQuantity, 0)
	);
</script>

<svelte:head>
	<title>Cart</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<a href="/">Return</a>
	{#if !itemsInCartCount}
		<h2 class="cart-count-header">Cart is empty!</h2>
	{:else}
		<h2 class="cart-count-header">{itemsInCartStr}</h2>
		<div class="cart-items-and-payment">
			<div class="cart-items">
				{#each cartItems as cartItem, index}
					<div class="cart-line-item">
						<div>{index}</div>
						<div>{cartItem.name}</div>
						<div class="align-center">{cartItem.selectedQuantity}</div>
						<div class="align-center price">
							<p class="total-price">
								{usCurrencyFormat(cartItem.selectedVariant.price * cartItem.selectedQuantity)}
							</p>
							{#if cartItem.selectedQuantity > 1}
								<p class="breakdown-price">
									({usCurrencyFormat(cartItem.selectedVariant.price)} each)
								</p>
							{/if}
						</div>
						<div
							class="align-right"
							on:click={() => cart.removeCartItem(cartItem.productId)}
							on:keypress={() => cart.removeCartItem(cartItem.productId)}
						>
							<i class="fa-solid fa-trash fa-l" />
						</div>
					</div>
				{/each}
				<div class="subtotal">
					<div>Subtotal</div>
					<div>({itemsInCartCount === 1 ? '1 item' : `${itemsInCartCount} items`} ) {subtotal}</div>
				</div>
			</div>
			<div class="payment">payment</div>
		</div>
	{/if}
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
		display: flex;
		flex-direction: column;
	}
	.cart-line-item {
		display: grid;
		grid-template-columns: minmax(0, 200px) minmax(50px, 300px) repeat(3, 1fr);
		line-height: 4em;
	}
	.cart-line-item:not(:last-child) {
		border-bottom: 1px solid gray;
	}
	.price p {
		margin-bottom: 0;
	}
	.total-price {
		font-weight: bold;
	}
	.breakdown-price {
		font-size: small;
	}
	.subtotal {
		display: flex;
		justify-content: space-between;
	}
</style>
