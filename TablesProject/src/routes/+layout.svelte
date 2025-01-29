<script lang="ts">
	import { Flex } from '@ui';
	let { children } = $props();
	import '../app.css';
</script>

<Flex.Col class="bg-white gap-5 overflow-scroll dark:bg-primary-950" style="height: 100%">
    {@render children()}
</Flex.Col>

<style>
    :global(html, body) {
        width: 100%;
        height: 100%;
    }
</style>