<script lang="ts">
	import type { CartItem } from '$lib/types';
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
	$: itemStr = itemsInCartCount === 1 ? '1 item' : `${itemsInCartCount} items`;
	$: itemsInCartStr = `${itemStr} in your cart`;
	$: quantity = (cartItem: CartItem) => cartItem.selectedVariant.price * cartItem.selectedQuantity;
	$: subtotal = usCurrencyFormat(cartItems.reduce(($p, $c) => $p + quantity($c), 0));
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
				{#each cartItems as cartItem}
					<div class="cart-line-item">
						<div><img src="https://via.placeholder.com/120" alt="Product" /></div>
						<div>{cartItem.name}</div>
						<div class="align-center">{cartItem.selectedQuantity}</div>
						<div class="align-center price">
							<p class="total-price">
								{usCurrencyFormat(quantity(cartItem))}
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
					<div>({itemStr}) {subtotal}</div>
				</div>
			</div>
			<div class="payment">
				<div class="subtotal">
					<div>Subtotal</div>
					<div>({itemStr}) {subtotal}</div>
				</div>
				<button> Proceed to checkout </button>
			</div>
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
	.price p {
		margin-bottom: 0;
	}
	.total-price {
		font-weight: bold;
	}
	.breakdown-price {
		font-size: small;
	}
	.payment {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.subtotal {
		display: flex;
		justify-content: space-between;
	}
</style>
