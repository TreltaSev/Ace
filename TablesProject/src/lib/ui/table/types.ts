/* eslint-disable @typescript-eslint/no-explicit-any */

import { type tButtonProps } from '@ui/button/types';
import type { HTMLAttributes, HTMLTableAttributes } from 'svelte/elements';
import type { Writable } from 'svelte/store';
import type { ClassNameValue } from 'tailwind-merge';

export type tTableHeaders = string[];
export type tTableData = any[][];
export type tTableProps = HTMLTableAttributes & {
	title?: string;
	rowCellClassName?: ClassNameValue;
	headCellClassName?: ClassNameValue;
	itemClassName?: ClassNameValue;
	caption?: string;
	captionClassName?: ClassNameValue;
	oddColumnClassName?: ClassNameValue;
	evenColumnClassName?: ClassNameValue;
	oddRowClassName?: ClassNameValue;
	evenRowClassName?: ClassNameValue
};

export type tTableBodyData = any[][]
export type tTableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
	data?: tTableBodyData
}

export type tTableCellProps = HTMLAttributes<HTMLTableCellElement> & {
	data?: undefined | string | number;
	header?: undefined | string;
};

export type tTableHeadHeaders = string[];
export type tTableHeadProps = HTMLAttributes<HTMLTableSectionElement> & {
	headers?: tTableHeadHeaders;
	cellClassName?: ClassNameValue;
};

export type tTableRowData = any[];
export type tTableRowProps = HTMLAttributes<HTMLTableRowElement> & {
	data?: tTableRowData;
	cellClassName?: ClassNameValue;
};

export type tTableSelectorProps = tButtonProps & {};

export type tTableHasCaptionStore = Writable<boolean>
export type tTableColumnsStore = Writable<number>
