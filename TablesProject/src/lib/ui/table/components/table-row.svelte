<script lang="ts">
	import { cn } from '@lib/utils';
	import type { RowProps } from '..';
	import { getContext } from 'svelte';

	import { Table } from '@ui';

	// -=-=-=-=- Contexts GET -=-=-=-=- //
	let itemClassName = getContext("itemClassName")
	let rowCellClassName = getContext("rowCellClassName");

	let oddColumnClassName = getContext("oddColumnClassName")
	let evenColumnClassName = getContext("evenColumnClassName");
	

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = RowProps;

	let className: $$Props['class'] = undefined;
	export let data: $$Props['data'] = [];
	export let cellClassName: $$Props['cellClassName'] = undefined;
	export { className as class };
</script>

<tr class={cn('', className)} {...$$restProps}>
	{#each data || [] as value, index}
		{@const isEven = (index + 1) % 2 === 0}
		<Table.Cell class={cn('', itemClassName, rowCellClassName, cellClassName, isEven ? evenColumnClassName : oddColumnClassName)} data={value} />
	{/each}

	<slot></slot>
</tr>
