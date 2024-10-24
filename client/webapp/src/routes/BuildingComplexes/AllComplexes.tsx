import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  RowData,
  useReactTable,
} from "@tanstack/react-table";
import { useAllComplexes } from "./query";
import { TComplex } from "./types";
import { useState } from "react";

declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    roleSelection: (complexId: string) => void;
  }
}

const AllComplexes = () => {
  const { data, isLoading } = useAllComplexes();
  const [selectedRow, setSelectedRow] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      roleSelection: (complexId) => {
        setSelectedRow(complexId);
      },
    },
  });

  if (isLoading) {
    return <p>Loading... </p>;
  }

  return (
    <div className="mx-24 mt-24">
      <h1 className="mb-8">All Complexes</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-400 px-4 py-2"
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
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-400 px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* list of buildings */}
      <h2 className="text-2xl mt-8">Buildings</h2>
    </div>
  );
};

export default AllComplexes;

const columnHelper = createColumnHelper<TComplex>();

const columns = [
  columnHelper.accessor("name", {
    header: "Complex Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("noOfBuildings", {
    header: () => "No of Buildings",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("id", {
    id: "details",
    header: () => "Details",
    cell: () => (
      <>
        <button
          className="bg-blue-500 text-white rounded"
          //   onClick={table.options.meta?.roleSelection(cell.getValue() ?? "")}
        >
          View
        </button>
      </>
    ),
  }),
];
