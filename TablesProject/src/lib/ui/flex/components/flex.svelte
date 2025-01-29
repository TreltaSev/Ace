<script lang="ts">
	import { cn } from '@lib/utils';
	import type { Props } from '..';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = Props;
	
	let className: $$Props['class'] = undefined;
	export { className as class }
</script>

<div class={cn('flex', className)} {...$$restProps}>
	<slot />
</div>
