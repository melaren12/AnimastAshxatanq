import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import eye from '/eye.svg'
import { useState } from "react";

export default function TableWithCheckboxes({ tableData }) {
  const [about, setAbout] = useState(false)
  const handleClick = () => {
    console.log('about');
    setAbout(true)
  }
  return (

    <div className="table-parent">
      <Table
        isHeaderSticky
        selectionMode="multiple"
        aria-label="Example static collection table"
        classNames={{
          base: "max-h-[200px] overflow-scroll",
          table: "max-h-[100px]",
        }}
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody
          items={tableData}
        >

          {tableData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell><img src={eye} alt={'Result'} onClick={handleClick} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={"about " + (about ? 'ab' : '')}>
      </div>
    </div>
  );
}
