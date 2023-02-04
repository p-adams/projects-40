export interface ShoppingCart {
	products: Array<Product>[];
}

interface ProductVariant {
	size: string;
	color: string;
}

export interface Product {
	description: string;
	cost: number;
	variants: Array<ProductVariant>;
}
