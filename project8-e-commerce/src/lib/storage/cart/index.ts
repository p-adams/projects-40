import { browser } from '$app/environment';
import type { Product } from '$lib/types';
import { writable, type Writable } from 'svelte/store';
import type { PageData } from '../../../routes/$types';
type Products = Product[];

const toObj = JSON.parse;
const toString = (value: any) => JSON.stringify(value);

class CartStorage {
	#cart: Writable<Products>;
	constructor(products: Products) {
		const cart = toObj(this.storageItems);
		if (cart.length === 0) {
			this.storageItems = toString(products);
		}

		this.#cart = writable<Products>(toObj(this.storageItems));
	}

	public get storageItems() {
		return browser ? window.localStorage.getItem('cart') ?? '[]' : '[]';
	}
	public set storageItems(items: string) {
		browser && window.localStorage.setItem('cart', items);
	}
	private updateStorageItems(product: PageData) {
		if (browser) {
			const cart = toObj(this.storageItems);
			const newCart = [...cart, product];
			this.storageItems = toString(newCart);
		}
	}
	public removeCartItem(productId: string) {
		// TODO: handle remove from local storage and cart
		const newCart = toObj(this.storageItems).filter(
			(cartItem: Product) => cartItem.productId !== productId
		);
		this.storageItems = toString(newCart);
		this.#cart.set(toObj(this.storageItems));
	}
	public storeCartItem(product: PageData) {
		this.updateStorageItems(product);
		return this.#cart.set(toObj(this.storageItems));
	}

	public subscribe(sub: (val: Products) => void) {
		this.#cart.subscribe((value) => sub(value));
	}
}

export const cart = new CartStorage([]);
