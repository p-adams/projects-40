import { browser } from '$app/environment';
import type { Product } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

export class CartStorage {
	#cart: Writable<Product[]>;
	#storage;
	constructor() {
		this.#storage = browser ? window.localStorage.getItem('cart') ?? '[]' : '[]';
		this.#cart = writable<Product[]>(JSON.parse(this.#storage));
	}
	public subscribe() {
		return this.#cart.subscribe;
	}
	public updateCart(product: Product) {
		const cart = window.localStorage.getItem('cart');
		if (cart) {
			const cartItems = JSON.parse(cart);
			const newCart = [...cartItems, product];
			if (browser) {
				window.localStorage.setItem('cart', JSON.stringify(newCart));
			}
		}
	}
}
