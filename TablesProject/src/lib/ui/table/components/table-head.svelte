<script lang="ts">
	import { cn } from '@lib/utils';
	import type { HeadProps } from '..';
	import { getContext } from 'svelte';

	import { Table } from '@ui';

	// -=-=-=-=- Contexts GET -=-=-=-=- //
	let itemClassName = getContext("itemClassName")
	let headCellClassName = getContext('headCellClassName');
	let caption = getContext('caption');
	let captionClassName = getContext('captionClassName')
	let oddRowClassName = getContext("oddRowClassName")

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = HeadProps;

	let className: $$Props['class'] = undefined;
	export let headers: $$Props['headers'] = [];
	export let cellClassName: $$Props['cellClassName'] = undefined;
	export { className as class };
</script>

<thead class={cn('', className)} {...$$restProps}>
	{#if caption}
		<tr>
			<Table.Cell colspan={headers?.length} class={cn('', itemClassName, headCellClassName, cellClassName, captionClassName)} header={caption as string} />
		</tr>
	{/if}


	<Table.Row class={cn(oddRowClassName)} data={headers}/>

	<slot />
</thead>
