import { useAllRegisteredResident } from "./query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TResidentRegistered } from "./types";

const ResidentList = () => {
  // fetch all the residents
  const { data, isLoading } = useAllRegisteredResident();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return <p>Loading... </p>;
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h1>All Resident</h1>
      {/* <div>{data}</div> */}
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
        </thead>{" "}
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
        <tbody></tbody>
      </table>
    </div>
  );
};

export default ResidentList;

const columnHelper = createColumnHelper<TResidentRegistered>();

const columns = [
  columnHelper.accessor("userId", {
    header: () => "User",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("unitNo", {
    header: () => "Unit No",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("ownership", {
    header: () => "Ownership",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("building.name", {
    header: () => "Building Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("building.type", {
    header: () => "Building type",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
];
