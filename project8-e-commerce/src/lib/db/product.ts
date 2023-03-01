import { nanoid } from 'nanoid';
import type { Product, ProductOptions, ProductVariant } from '../types';

class ProductItem implements Product {
	productId: string;
	name: string = '';
	description: string = '';
	options: Array<ProductOptions> = [];
	variants: Array<ProductVariant> = [];
	vendor: string = '';
	createdAt: Date;
	constructor(productDetails: Pick<Product, 'name'>) {
		this.name = productDetails.name;
		this.productId = nanoid();
		this.createdAt = new Date();
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
				option0: this.options[0].name,
				price: 0.0,
				quantity: 0
			}
		];
	}

	public getProductId() {
		return this.productId;
	}
	public getName() {
		return this.name;
	}
	public getDescription() {
		return this.description;
	}
	public getOptions() {
		return this.options;
	}
	public getVariants() {
		return this.variants;
	}
	public getVendor() {
		return this.vendor;
	}
	public getCreatedDate() {
		return this.createdAt;
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
	public addOptions(option: ProductOptions) {
		this.options = [...this.options, option];
	}
	public removeOptions(id: string) {
		this.options = this.options.filter((option) => option.id !== id);
	}
}

export default ProductItem;
