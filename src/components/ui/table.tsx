import _ from "lodash";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import Spinner from "./spinner";
import Disclosure from "./disclosure";

interface Props<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  onRowClick?: (row: T) => void;
  title: string;
  isLoading?: boolean;
  primaryField: string;
  limit?: number;
}

function Table<T>({
  data,
  isLoading,
  columns,
  title,
  onRowClick,
  primaryField,
  limit = 10,
}: Props<T>) {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    table.setPageSize(limit);
  }, [table, limit]);

  return (
    <div>
      <h1 className="text-primary font-bold mb-4">{title}</h1>
      {windowSize > 800 ? (
        <table className="w-full whitespace-nowrap text-sm">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="py-2 px-2 overflow-hidden text-ellipsis text-secondary"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {!isLoading &&
              table.getRowModel().rows.map((row, rowIndex) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick && onRowClick(row.original)}
                  className={`hover:bg-gray-200/50 cursor-pointer ${
                    rowIndex % 2 ? "bg-gray-200/20" : ""
                  }`}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{
                        maxWidth: cell.column.getSize(),
                      }}
                      className="py-3 px-2 whitespace-nowrap overflow-hidden text-ellipsis"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      ) : (
        <ul className="flex flex-col">
          {table.getRowModel().rows.map((row) => (
            <Disclosure
              title={_.toString(_.get(row.original, primaryField))}
              defaultOpen={false}
            >
              <table onClick={() => onRowClick && onRowClick(row.original)}>
                {_.zip(
                  table
                    .getHeaderGroups()
                    .flatMap((headerGroup) => headerGroup.headers),
                  row.getAllCells()
                ).map(([header, cell]) => (
                  <tr key={row.id}>
                    <th
                      key={header?.id}
                      className="py-2 px-2 overflow-hidden text-ellipsis text-secondary"
                    >
                      {header?.column.columnDef.header?.toString()}
                    </th>
                    {cell && (
                      <td
                        key={cell.id}
                        style={{ maxWidth: cell.column.getSize() }}
                        className="py-3 px-2 whitespace-nowrap overflow-hidden text-ellipsis"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </table>
            </Disclosure>
          ))}
        </ul>
      )}
      {isLoading ? (
        <div className="w-full flex items-center justify-center py-8">
          <Spinner className="w-10 h-10 " />
        </div>
      ) : (
        <div className="w-full flex justify-center mt-2 text-secondary">
          <button
            className="disabled:text-gray-300 disabled:cursor-not-allowed px-2 cursor-pointer"
            disabled={!table.getCanPreviousPage()}
            onClick={table.previousPage}
          >
            &lt;
          </button>
          {_.times(table.getPageCount(), (i) => (
            <div
              key={i}
              className={`px-3 cursor-pointer ${
                table.getState().pagination.pageIndex === i && "text-primary"
              }`}
              onClick={() => table.setPageIndex(i)}
            >
              {i + 1}
            </div>
          ))}
          <button
            className="disabled:text-gray-300 disabled:cursor-not-allowed px-2 cursor-pointer"
            disabled={!table.getCanNextPage()}
            onClick={table.nextPage}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;
