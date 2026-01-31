import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { PageBtn } from './board.style';
import Mobile from './Mobile';
import DeskTop from './Desktop';

const columnHelper = createColumnHelper();

const columns = [
	columnHelper.accessor('id', {
		header: '번호',
		headerStyle: { width: '3rem' },
		cellStyle: { width: '3rem' },
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('title', {
		header: '제목',
		headerStyle: { textAlign: 'left', flex: 1 },
		cellStyle: { textAlign: 'left', flex: 1 },
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('writer', {
		header: '작성자',
		headerStyle: { width: '3rem' },
		cellStyle: { width: '3rem' },
		cell: (info) => info.getValue()
	}),
	columnHelper.accessor('createdAt', {
		header: '작성일',
		headerStyle: { width: '6rem' },
		cellStyle: { width: '6rem' },
		cell: (info) => info.getValue()
	})
];

export default function DataTable({ data }) {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: { pagination: { pageSize: 20 } }
	});

	return (
		<div className='flex flex-col'>
			<Mobile table={table} />
			<DeskTop table={table} />

			<div className='mt-6 flex items-center justify-center space-x-2'>
				<PageBtn onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
					이전
				</PageBtn>
				<span className='px-2 font-bold text-sm'>
					{table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
				</span>
				<PageBtn onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
					다음
				</PageBtn>
			</div>
		</div>
	);
}
