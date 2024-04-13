import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useEffect, useState, useCallback } from 'react'
import useInput from "../useInput";
// import Pordz from "./Pordz";

export default function TableWithCheckboxes({tableData}) {
 
  return (

    <div className="flex flex-col gap-3 table-parent">
      {/* <Pordz></Pordz> */}
      <Table
        selectionMode="multiple"
        aria-label="Example static collection table"
        className="table"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>

          {tableData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
