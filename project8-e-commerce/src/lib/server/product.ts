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
		const defaultOption: ProductOptions = {
			id: nanoid(),
			productId: this.productId,
			name: 'Default',
			values: ['Default']
		};

		this.options = [defaultOption];
		this.variants = [
			{
				id: nanoid(),
				productId: this.productId,
				option0: defaultOption,
				cost: 0.0,
				quantity: 0
			}
		];
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
	public removeVariant(id: string) {
		this.variants = this.variants.filter((variant) => variant.id !== id);
	}
	public addOptions(option: ProductOptions) {}
	public removeOptions(id: string) {}
}

export default ProductItem;
