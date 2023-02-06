import { nanoid } from 'nanoid';
import type { Product, ProductOptions, ProductVariant } from '../types';

class ProductItem implements Product {
	productId: string;
	name: string = '';
	description: string = '';
	options: Array<ProductOptions> = [];
	variants: Array<ProductVariant> = [];
	vendor: string = '';
	constructor(productDetails: Pick<Product, 'name'>) {
		this.name = productDetails.name;
		this.productId = nanoid();
	}

	public setDescription(description: string) {
		this.description = description;
	}
	public setVendor(vendor: string) {
		this.vendor = vendor;
	}
	public addVariant(variant: ProductVariant) {
		this.variants = [...this.variants, variant];
	}
	public removeVariant(id: number) {
		this.variants = this.variants.filter((variant) => variant.id !== id);
	}
	public addOptions(option: ProductOptions) {}
	public removeOptions(id: number) {}
}

export default ProductItem;
