"use client";

import { CaretDownIcon, ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { data, formatDateToYYYYMMDD, getNumber } from "@/utils/constants";
import SelectComponent from "../select/select";
import DatePickerComponent from "../datePicker/datePicker";
import { useSelector } from "react-redux";
import { IoAddCircle } from "react-icons/io5";
import { ListActions } from "../list-actions";
import { Tooltip } from "../ui/tooltip";
import { CustomTooltip } from "../custom-tooltip";

export const columns = [

  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("status")}</div>
    ),
  },

  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("projectName")}</div>
    ),
  },
  
  {
    accessorKey: "enquiryNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Enquiry Number
          <CaretDownIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("enquiryNumber")}</div>
    ),
    filterFn: (row, columnId, filterValue) => {
      const rowValue = row.getValue(columnId).toString();
      return rowValue.includes(filterValue);
    },
  },

  {
    accessorKey: "date",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Date
        <CaretDownIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
    filterFn: (row, columnId, filterValue) => {
      const [from, to] = filterValue;
      const rowDate = new Date(row.getValue(columnId));
      if (from && to) {
        return rowDate >= new Date(from) && rowDate <= new Date(to);
      } else if (from) {
        return rowDate >= new Date(from);
      } else if (to) {
        return rowDate <= new Date(to);
      }
      return true;
    },
  },

  {
    accessorKey: "enquiryType",
    header: "Enquiry Type",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("enquiryType")}</div>
    ),
  },

  {
    accessorKey: "siteReference",
    header: "Site Reference",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("siteReference")}</div>
    ),
  },

  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("customerName")}</div>
    ),
  },

  {
    accessorKey: "contactName",
    header: "Contact Name",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("contactName")}</div>
    ),
  },

  {
    accessorKey: "salesRepresentative",
    header: "Sales Representative",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("salesRepresentative")}</div>
    ),
  },

  {
    accessorKey: "enquiryBy",
    header: "Enquiry By",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("enquiryBy")}</div>
    ),
  },

  {
    accessorKey: "notes",
    header: "Notes",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("notes")}</div>
    ),
  },

  {
    accessorKey: "amount",
    header: () => <div className="text-right">Tentative...</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  
  {
    accessorKey: "branch",
    header: "Branch",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("branch")}</div>
    ),
  },

  {
    accessorKey: "targetDate",
    header: "Target Date",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("targetDate")}</div>
    ),
  },

  {
    accessorKey: "phoneNo",
    header: "Phone No.",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("phoneNo")}</div>
    ),
  },

  {
    accessorKey: "mobileNo",
    header: "Mobile No.",
    cell: ({ row }) => (
      <div className="min-w-[100px]">{row.getValue("mobileNo")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => <ListActions item={row.original} />,
  }

];

const statusOptions = [
  { value: "all", label: "All" },
  { value: "lead in", label: "Lead In" },
  { value: "quote in progress", label: "Quote In Progress" },
  { value: "waiting information cost", label: "Waiting Information - Cost." },
  { value: "lost", label: "Lost" },
  { value: "quote ready", label: "Quote Ready" },
  { value: "waiting information supl", label: "Waiting Information - Supl." },
];

export default function DataTableDemo() {

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState({ from: null, to: null });
  const { enquiries } = useSelector((state) => state.enquiry_list);

  const newData = useMemo(() => {

    return enquiries.map((item) => {

      return {
        status: item.status,
        projectName: item.project_name,
        enquiryNumber: item.enquiry_no,
        date: formatDateToYYYYMMDD(item.enquiry_date),
        enquiryType: item.type.join(', ').trim(),
        siteReference: item.site_reference,
        customerName: item.customer,
        contactName: item.contact_name,
        salesRepresentative: item.sales_representative,
        enquiryBy: item.by,
        notes: item.notes,
        amount: item.tentative_project_value,
        branch: item.branch,
        targetDate: formatDateToYYYYMMDD(item.enquiry_date),
        phoneNo: item.phone_no,
        mobileNo: item.mobile_no,
      };

    });

  }, [enquiries]);

  const table = useReactTable({
    data: newData,
    // data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleStatusChange = (selectedOption) => {

    setStatusFilter(selectedOption);
    if (selectedOption === "all") {
      table.getColumn("status").setFilterValue(undefined);
    } else {
      table.getColumn("status").setFilterValue(selectedOption);
    }

  };

  const handleDateChange = (key, date) => {

    const newFilter = { ...dateFilter, [key]: date };
    setDateFilter(newFilter);
    table.getColumn("date").setFilterValue([newFilter.from, newFilter.to]);
    
  };

  return (

    <div className="w-[96%]">

      {/* <div>
        <Button variant='secondary'>
          <CustomTooltip content="Add Enquiry">
            <IoAddCircle size={20} />
          </CustomTooltip>
        </Button>
      </div> */}

      <div className="flex items-center py-4 gap-4">

        <Input
          placeholder="Filter Enquiry..."
          value={table.getColumn("enquiryNumber")?.getFilterValue() ?? ""}
          onChange={(event) => {
            const value = event.target.value;
            table.getColumn("enquiryNumber")?.setFilterValue(value);
          }}
          className="max-w-xs"
        />

        <SelectComponent
          options={statusOptions}
          value={statusFilter}
          onChange={handleStatusChange}
          placeholder="Filter by Status"
        />

        <DatePickerComponent
          placeholderText="From Date"
          selected={dateFilter.from}
          onChange={(date) => handleDateChange("from", date)}
          maxDate={dateFilter.to}
        />

        <DatePickerComponent
          placeholderText="To Date"
          selected={dateFilter.to}
          onChange={(date) => handleDateChange("to", date)}
          minDate={dateFilter.from}
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>

      <div className="rounded-md border max-h-[70vh] overflow-y-auto">

        <Table>

          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>

      </div>

      <div className="flex items-center justify-end space-x-2 py-4">

        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>

      </div>

    </div>
  );

}