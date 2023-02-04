import type { Product, ProductOptions, ProductVariant } from '../types';

class ProductItem implements Product {
	productId: number = 0;
	name: string = '';
	description: string = '';
	options: Array<ProductOptions> = [];
	variants: Array<ProductVariant> = [];
	vendor: string = '';
	constructor(productDetails: Pick<Product, 'productId' | 'name' | 'options' | 'variants'>) {
		this.productId = productDetails.productId;
		this.name = productDetails.name;
		this.options = productDetails.options;
		this.variants = productDetails.variants;
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
}

export default ProductItem;
