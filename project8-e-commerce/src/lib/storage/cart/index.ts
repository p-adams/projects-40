import { browser } from '$app/environment';
import type { Product } from '$lib/types';
import { writable } from 'svelte/store';
const defaultCart = browser ? JSON.parse(window.localStorage.getItem('cart') || '[]') : [];
const cart = writable<Product[]>(defaultCart);
cart.subscribe((value: Product[]) => {
	if (browser) {
		window.localStorage.set('cart', JSON.stringify(value));
	}
});
