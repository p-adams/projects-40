export interface ShoppingCart {
	products: Array<Product>[];
}
// product UUID
type ProductId = string;
// inventory UUID
type InventoryId = string;
// location UUID
type LocationId = string;

export interface Product {
	productId: ProductId;
	name: string;
	options: Array<ProductOptions>;
	variants: Array<ProductVariant>;
	description?: string;
	vendor?: string;
	createdAt?: Date;
}

export interface ProductVariant {
	id?: string;
	barcode?: string;
	productId: ProductId;
	// id used to associate an inventory item
	inventoryId?: number;
	// supports as 2 options
	option0: string;
	option1?: string | null;
	price: number;
	sku?: string;
	quantity?: number;
}

export interface ProductOptions {
	id: string;
	// id used to associate a variant
	productId: ProductId;
	name: string; // size, color, etc
	values: Array<string>;
}

export interface Inventory {
	unitCost: number;
	origin: string; // where item was made
	inventoryId: InventoryId;
	locationId: LocationId;
	sku: string;
}

interface InventoryItems {
	id: InventoryId;
	quantity: number;
}

export interface Location {
	locationId: LocationId;
	inventoryItems: InventoryItems[];
	address: any;
}
