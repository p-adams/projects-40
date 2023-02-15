<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	function addToCart(product: PageData) {
		console.log(product);
	}
</script>

<section>
	<a href="/">Return</a>
	<h3>Product Page {data.name}</h3>
	<div>
		<button on:click={() => addToCart(data)}>Add to cart</button>
	</div>
</section>
