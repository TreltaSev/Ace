<script lang="ts">
	import { Flex, Table } from '@ui';
	import clsx from 'clsx';

</script>

<Table.Selector>1</Table.Selector>

<Flex.Col class="size-full items-center justify-center gap-5">

	<!-- Table 1 -->
	<Table._ class="hidden" headCellClassName="pr-8">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body>
			<Table.Row data={['David', 85, 87, 88, 92, 88]} />
			<Table.Row data={['Richard', 85, 87, 88, 92, 92]} />
			<Table.Row data={['John', 85, 87, 88, 92, 88]} />
			<Table.Row data={['David', 85, 87, 88, 92, 88]} />
		</Table.Body>
	</Table._>

	<!-- Table 2 -->
	<Table._ class="hidden" caption="STUDENTS MARK SHEET" headCellClassName="pr-8">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body>
			<Table.Row data={['David', 85, 87, 88, 92, 88]} />
			<Table.Row data={['Richard', 85, 87, 88, 92, 92]} />
			<Table.Row data={['John', 85, 87, 88, 92, 88]} />
			<Table.Row data={['David', 85, 87, 88, 92, 88]} />
		</Table.Body>
	</Table._>

	<!-- Table 3 -->
	<Table._ class="hidden" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" caption="STUDENTS MARK SHEET" headCellClassName="pr-8">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body>
			<Table.Row data={['David', 85, 87, 88, 92, 88]} />
			<Table.Row data={['Richard', 85, 87, 88, 92, 92]} />
			<Table.Row data={['John', 85, 87, 88, 92, 88]} />
			<Table.Row data={['David', 85, 87, 88, 92, 88]} />
		</Table.Body>
	</Table._>

	<!-- Table 4 -->
	<Table._ class="hidden" oddRowClassName="bg-gray-800" evenRowClassName="bg-gray-700" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" caption="STUDENTS MARK SHEET" headCellClassName="pr-8" captionClassName="bg-gray-400 dark:bg-gray-900">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body data={[
			['David', 85, 87, 88, 92, 88],
			['Richard', 85, 87, 88, 92, 92],
			['John', 85, 87, 88, 92, 88],
			['David', 85, 87, 88, 92, 88]
		]}/>
	</Table._>

	<!-- Table 5 -->
	<Table._ class="hidden" oddColumnClassName="bg-gray-800" evenColumnClassName="bg-gray-700" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" caption="STUDENTS MARK SHEET" headCellClassName="pr-8" captionClassName="bg-gray-400 dark:bg-gray-900">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body data={[
			['David', 85, 87, 88, 92, 88],
			['Richard', 85, 87, 88, 92, 92],
			['John', 85, 87, 88, 92, 88],
			['David', 85, 87, 88, 92, 88]
		]}/>
	</Table._>

	<!-- Table 6 -->
	<Table._ class="hidden" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600 w-[100px] h-[30px]" headCellClassName="pr-8">
		<Table.Body>
			<Table.Row data={['', '', '']}/>
			<Table.Row>
				<Table.Cell data=''/>
				<Table.Cell data='' class="border-3 border-primary-400 dark:border-primary-600"/>
				<Table.Cell data=''/>
			</Table.Row>
			<Table.Row data={['', '', '']}/>
		</Table.Body>
	</Table._>

	<!-- Table 7 -->
	<Table._ class="hidden" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" headCellClassName="pr-8">
		<Table.Head headers={['Company', 'Model']} />
		<Table.Body>
			<Table.Row data={["Dodge", "Challenger"]}/>
			<Table.Row data={["Maruti", "Swift"]}/>
			<Table.Row data={["Jeep", "Wrangler"]}/>

			<!-- Fun Stuff-->
			 <Table.Row>
				<Table.Cell data="Ford" rowspan={3}/>
				<Table.Cell data="Fusion"/>
			 </Table.Row>

			 <Table.Row>
				<Table.Cell data="Fiesta"/>
			 </Table.Row>

			 <Table.Row>
				<Table.Cell data="Escape"/>
			 </Table.Row>

			<Table.Row data={["BMW", "BMW 5 Series"]}/>
		</Table.Body>
	</Table._>

	<!-- Table 8 -->
	<Table._ class="hidden" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" headCellClassName="pr-8">
		<Table.Head headers={['Company', 'Model']} />
		<Table.Body>
			<Table.Row data={["Dodge", "Challenger"]}/>
			<Table.Row data={["Maruti", "Swift"]}/>
			<Table.Row data={["Jeep", "Wrangler"]}/>

			<!-- Fun Stuff-->
			<Table.Row>
				<Table.Cell colspan={2} data="All these car company names and their model names are collected from the internet. You can change the company and yap yap yap"/>
			</Table.Row>

			<Table.Row data={["BMW", "BMW 5 Series"]}/>
		</Table.Body>
	</Table._>

	<!-- Table 9 -->
	<Table._ class="hidden" itemClassName="border-solid border-1 border-gray-400 dark:border-gray-600" headCellClassName="pr-8" >
		<Table.Head headers={['Company', 'Model']} />
		<Table.Body>
			<Table.Row data={["Dodge", "Challenger"]}/>
			<Table.Row data={["Maruti", "Swift"]}/>
			<Table.Row data={["Jeep", "Wrangler"]}/>

			<!-- Fun Stuff-->
			<Table.Row data={["Disclaimer", "All these car company names and their model names are collected from the internet. You can change the company and yap yap yap, All these car company names and their model names are collected from the internet. You can change the company and yap yap yap... Why did I do this one?"]}/>

			<Table.Row data={["BMW", "BMW 5 Series"]}/>
		</Table.Body>
	</Table._>

	<!-- Table 10 -->
	<Table._ class="hidden" itemClassName="p-1 h-[115px] aspect-square text-center border-solid border-1 border-gray-400 dark:border-gray-600"headCellClassName="pr-8" >
		<Table.Head headers={['Sno', 'Fruit Name', 'Quantity']} />
		<Table.Body>
			<Table.Row data={[1, "Orange", 60]}/>
			<Table.Row data={[2, "Mango", 50]}/>
			<Table.Row data={[3, "Pineapple", 30]}/>
		</Table.Body>
	</Table._>

	<!-- Table 11 -->
	<Table._ class="hidden" itemClassName="border-solid border-r border-gray-400 dark:border-gray-600" headCellClassName="pr-8" captionClassName="bg-gray-400 dark:bg-gray-900">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body data={[
			['David', 85, 87, 88, 92, 88],
			['Richard', 85, 87, 88, 92, 92],
			['John', 85, 87, 88, 92, 88],
			['David', 85, 87, 88, 92, 88]
		]}/>
	</Table._>

	<!-- Table 12 -->
	<Table._ class="hidden" itemClassName="border-solid border-b border-gray-400 dark:border-gray-600" headCellClassName="pr-8" captionClassName="bg-gray-400 dark:bg-gray-900">
		<Table.Head headers={['Name', 'Maths', 'Science', 'English', 'Physics', 'General Knowledge']} />
		<Table.Body data={[
			['David', 85, 87, 88, 92, 88],
			['Richard', 85, 87, 88, 92, 92],
			['John', 85, 87, 88, 92, 88],
			['David', 85, 87, 88, 92, 88]
		]}/>
	</Table._>

</Flex.Col>


<!--
align_items:c enter
justify_content

-->
