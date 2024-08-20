"use client"

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from "@nextui-org/react";
import {columns, recipes} from "./data";
import { Button } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

const tagColorMap = {
  VG: "success",
  GF: "primary",
  DF: "warning",
};



export default function App() {
  const renderCell = React.useCallback((recipe, columnKey) => {
    const cellValue = recipe[columnKey];

    switch (columnKey) {
      case "recipe":
        return (
          <div>
            <p className="text-bold text-sm">{recipe.recipe}</p>
            <p className="text-sm text-default-400">Cook Time: {recipe.cooktime}</p>
          </div>
        );
      case "ingredients":
        return <p className="text-sm text-default-600">{cellValue}</p>;
      case "tags":
        return (
          <div className="flex gap-2">
            {cellValue.split(', ').map((tag) => (
              <Chip
                key={tag}
                className="capitalize"
                color={tagColorMap[tag] || "default"}
                size="sm"
                variant="flat"
              >
                {tag}
              </Chip>
            ))}
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
          <Button color="success" size="small">View</Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const searchParams = useSearchParams();
  console.log(searchParams.get("recipe"));

  return (
    <Table
      aria-label="Recipe search results"
      className="w-4/5 mx-auto mt-6 shadow-lg rounded-lg border border-gray-200"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            <span className="font-semibold text-lg text-gray-700">{column.name}</span>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={recipes} className="divide-y divide-gray-300">
        {(item) => (
          <TableRow
            key={item.id}
            className="hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            {(columnKey) => (
              <TableCell>
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
