import { browser } from '$app/environment';
import type { Product } from '$lib/types';
import { writable, type Writable } from 'svelte/store';
type Products = Product[];
export class CartStorage {
	#cart: Writable<Products>;
	constructor(products: Products) {
		console.log('foo: ', this.storageItems);
		if (!!this.storageItems) {
			this.storageItems = JSON.stringify(products);
		}

		this.#cart = writable<Products>(JSON.parse(this.storageItems));
	}
	public get storageItems() {
		return browser ? window.localStorage.getItem('cart') ?? '[]' : '[]';
	}
	public set storageItems(items: string) {
		console.log('items: ', JSON.parse(items));
		window.localStorage.setItem('cart', items);
	}
	private updateStorageItems(product: Product) {
		if (browser) {
			const cart = JSON.parse(this.storageItems);
			const newCart = [...cart, product];
			this.storageItems = JSON.stringify(newCart);
		}
	}

	public storeCartItem(product: Product) {
		this.updateStorageItems(product);
		return this.#cart.set(JSON.parse(this.storageItems));
	}

	public subscribe(sb: (val: Products) => void) {
		this.#cart.subscribe((val) => sb(val));
	}
}
