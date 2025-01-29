<script lang="ts">
	import { cn } from '@lib/utils';
	import type { SelectorProps } from '..';

	import { Button } from '@ui';

	// -=-=-=-=- Props -=-=-=-=- //
	type $$Props = SelectorProps;
	
	let className: $$Props['class'] = undefined;
	export { className as class }
</script>

<Button._ class={cn('size-[2rem] rounded-full shrink-0 bg-primary-800 text-gray-900 dark:text-white', className)} {...$$restProps}>
    <slot/>
</Button._>
