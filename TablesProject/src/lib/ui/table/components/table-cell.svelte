<script lang="ts">
	import { cn } from '@lib/utils';
	import type { CellProps } from '..';
	import { getContext } from 'svelte';

	// -=-=-=-=- Contexts GET -=-=-=-=- //
	let rowCellClassName = getContext('rowCellClassName');
	let headCellClassName = getContext('headCellClassName');
	let itemClassName = getContext("itemClassName")

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = CellProps;

	let className: $$Props['class'] = undefined;
	export let data: $$Props['data'] = undefined;
	export let header: $$Props['header'] = undefined;

	// Notify user of issue
	if (!data && !header) {
		console.warn('[ui:table-cell] Need to specify either data or header');
	}

	export { className as class };
</script>

<svelte:element
	this={data ? 'td' : 'th'}
	class={cn('px-2 py-1', itemClassName, data ? rowCellClassName : headCellClassName, className)}
	{...$$restProps}
>
	{data ? data : header}
</svelte:element>
