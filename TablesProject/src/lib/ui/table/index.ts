export { default as _, default as Root } from './components/table.svelte';

export { default as Cell } from './components/table-cell.svelte';
export { default as Body } from './components/table-body.svelte';
export { default as Data } from './components/table-cell.svelte';
export { default as Head } from './components/table-head.svelte';
export { default as Row } from './components/table-row.svelte';
export { default as Selector } from "./components/table-selector.svelte"

export type {
	tTableProps as Props,
	tTableBodyProps as BodyProps,
	tTableCellProps as CellProps,
	tTableHeadProps as HeadProps,
	tTableRowProps as RowProps,
	tTableSelectorProps as SelectorProps
} from './types';
