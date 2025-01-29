<script lang="ts">
	import { cn } from '@lib/utils';
	import type { BodyProps } from '..';
	import { getContext } from 'svelte';

	import {Table} from '@ui';

	// -=-=-=-=- Contexts GET -=-=-=-=- //
	let oddRowClassName = getContext("oddRowClassName")
	let evenRowClassName = getContext("evenRowClassName");


	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = BodyProps;

	let className: $$Props['class'] = undefined;
	export let data: $$Props['data'] = [];
	export { className as class };
</script>

<tbody class={cn('', className)} {...$$restProps}>

	{#each data || [] as column, index}
		{@const isEven = (index) % 2 === 0}
		<Table.Row class={cn(isEven ? evenRowClassName : oddRowClassName)} data={column}/>
	{/each}

	<slot />
</tbody>
