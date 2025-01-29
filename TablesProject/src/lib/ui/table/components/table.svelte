<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';
	import { setContext } from 'svelte';

	import { Table } from '@ui';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let caption: $$Props['caption'] = undefined;
	export let rowCellClassName: $$Props['rowCellClassName'] = undefined;
	export let headCellClassName: $$Props['headCellClassName'] = undefined;
	export let itemClassName: $$Props['itemClassName'] = undefined;

	export let oddColumnClassName: $$Props['oddColumnClassName'] = undefined;
	export let evenColumnClassName: $$Props['evenColumnClassName'] = undefined;
	export let oddRowClassName: $$Props['oddRowClassName'] = undefined;
	export let evenRowClassName: $$Props['evenRowClassName'] = undefined;

	export let captionClassName: $$Props['captionClassName'] = undefined;
	export { className as class };

	// -=-=-=-=- Contexts SET -=-=-=-=- //
	setContext('rowCellClassName', rowCellClassName);
	setContext('headCellClassName', headCellClassName);
	setContext('itemClassName', itemClassName)
	setContext('caption', caption);
	setContext('captionClassName', captionClassName)

	setContext('oddColumnClassName', oddColumnClassName);
	setContext('evenColumnClassName', evenColumnClassName);
	setContext('oddRowClassName', oddRowClassName)
	setContext('evenRowClassName', evenRowClassName);
</script>

<table class={cn('w-200 box-border border-solid border-4 border-gray-400 dark:border-gray-600 rounded-sm', className)} {...$$restProps}>
	<slot />
</table>
