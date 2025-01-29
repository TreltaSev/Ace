<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	
	let className: $$Props['class'] = undefined;
	export { className as class }
</script>

<button class={cn('', className)} {...$$restProps} on:click>
	<slot />
</button>
