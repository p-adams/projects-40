<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let timeoutId: NodeJS.Timer;
	function search(e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		let $input = e?.currentTarget?.value;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			dispatch('search', { value: $input });
		}, 500);
	}
</script>

<div class="search">
	<input on:keyup={(e) => search(e)} />
</div>
