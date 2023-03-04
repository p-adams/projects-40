<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let timeoutId: NodeJS.Timer;
	function search(e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }) {
		const $input = e?.currentTarget?.value;
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			dispatch('search', { value: $input });
		}, 500);
	}
</script>

<div class="search">
	<input on:keyup={(e) => search(e)} />
	<!-- TODO impl dropdown ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
    </ul>-->
</div>
