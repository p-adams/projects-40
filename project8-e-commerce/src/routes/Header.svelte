<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { page } from '$app/stores';
	import { cart } from '$lib/storage/cart';
	import type { Product } from '$lib/types';

	$: cartItems = null as Product[] | null;
	afterUpdate(() =>
		cart.subscribe((cart) => {
			cartItems = cart;
		})
	);
</script>

<header>
	<div class="corner">
		<a href="/"> Tee Tajir </a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li
				class="cart"
				title="Cart"
				aria-current={$page.url.pathname === '/cart' ? 'page' : undefined}
			>
				<a href="/cart">
					Cart
					{#if cartItems?.length}<div class="count-wrapper">
							<div class="count">{cartItems?.length}</div>
						</div>{/if}

					<i class="fa-solid fa-cart-shopping fa-l" />
				</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner" />
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 5em;
	}
	.corner a {
		font-size: large;
	}

	.cart {
		position: relative;
		display: flex;
		padding: 8px;
		align-items: center;
		justify-content: center;
	}
	.cart i {
		margin-left: 4px;
	}

	.cart .count-wrapper {
		display: flex;
		position: absolute;
		left: 75px;
		bottom: 32px;
		background-color: white;
		border-radius: 50%;
		width: 18px;
	}

	.count-wrapper .count {
		width: 100%;
		display: flex;
		justify-content: center;
		font-size: 14px;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
