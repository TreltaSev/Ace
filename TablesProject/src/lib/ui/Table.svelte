<script lang="ts">
	// Default Headers, correlates to 1)
	export let headers = ['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge'];

	// Default Data, correlates to 1)
	export let data: any[][] = [
		['David', 85, 87, 88, 92, 88],
		['Richard', 85, 87, 88, 92, 88],
		['John', 85, 87, 88, 92, 88],
		['David', 85, 87, 88, 92, 88],
		['David', 85, 87, 88, 92, 88]
	];
</script>

<table>
	<!-- Header -->
	<thead>
		<tr>
			<!-- All Headers -->
			{#each headers as header}
				<th>{header}</th>
			{/each}
		</tr>
	</thead>

	<!-- Body -->
	<tbody>
		{#each data as data_array}
			<tr>
				{#each data_array as value}
					<td>{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
