export interface ShoppingCart {
	products: Array<Product>[];
}

interface ProductVariant {
	barcode: string;
	productId: number;
	// id used to associate an inventory item
	inventoryId: number;
	name: string;
	cost: number;
	sku: string;
}

interface ProductOptions {
	// id used to associate a variant
	productId: number;
	name: string; // size, color, etc
	values: Array<string>;
	quantity: number;
}

export interface Product {
	productId: number;
	name: string;
	description: string;
	options: Array<ProductOptions>;
	variants: Array<ProductVariant>;
	vendor: string;
}

export interface Inventory {
	unitCost: number;
	origin: string; // where item was made
	inventoryId: number;
	sku: string;
	location: Location;
}

export interface Location {
	inventoryId: number;
	quantity: number;
	address: any;
}
