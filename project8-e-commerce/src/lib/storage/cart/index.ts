import { browser } from '$app/environment';
import type ProductItem from '$lib/db/product';
import type { CartItem, Product } from '$lib/types';
import { writable, type Writable } from 'svelte/store';
import type { PageData } from '../../../routes/$types';
type CartItems = CartItem[];

export const toObj = JSON.parse;
export const toString = (value: any) => JSON.stringify(value);

class CartStorage {
	#cart: Writable<CartItems>;
	constructor(CartItems: CartItems) {
		const cart = toObj(this.storageItems);
		if (cart.length === 0) {
			this.storageItems = toString(CartItems);
		}

		this.#cart = writable<CartItems>(toObj(this.storageItems));
	}

	public get storageItems() {
		return browser ? window.localStorage.getItem('cart') ?? '[]' : '[]';
	}
	public set storageItems(items: string) {
		browser && window.localStorage.setItem('cart', items);
	}
	private addNewStorageItem(cartItem: CartItem) {
		if (browser) {
			const cart = toObj(this.storageItems);
			const newCart = [...cart, cartItem];
			this.storageItems = toString(newCart);
		}
	}
	public removeCartItem(productId: string) {
		const newCart = toObj(this.storageItems).filter(
			(cartItem: Product) => cartItem.productId !== productId
		);
		this.storageItems = toString(newCart);
		this.#cart.set(toObj(this.storageItems));
	}
	public storeCartItem(cartItem: CartItem) {
		const storageItems: CartItems = toObj(this.storageItems);
		const matchingCartItem = storageItems.find(($i) => $i.productId === cartItem.productId);
		if (matchingCartItem) {
			const updatedStorageItems = storageItems.map(($i) =>
				$i.productId === cartItem.productId
					? {
							...$i,
							selectedQuantity: $i.selectedQuantity + 1
					  }
					: $i
			);
			this.storageItems = toString(updatedStorageItems);
		} else {
			this.addNewStorageItem(cartItem);
		}
		return this.#cart.set(toObj(this.storageItems));
	}

	public subscribe(sub: (val: CartItems) => void) {
		this.#cart.subscribe((value) => sub(value));
	}
}

export const cart = new CartStorage([]);
