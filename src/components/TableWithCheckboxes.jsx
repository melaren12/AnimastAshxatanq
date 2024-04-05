import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { useEffect, useState, useCallback } from 'react'
import { Button } from "@nextui-org/react";
import useInput from "../useInput";
import Pordz from "./Pordz";

export default function TableWithCheckboxes() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const input = useInput()
  const [modal, setModal] = useState(false)
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }
  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (

    <div className="flex flex-col gap-3">
      <Pordz></Pordz>
      <Table
        selectionMode="multiple"
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>STATUS</TableColumn>
        </TableHeader>
        <TableBody>

          {users.filter((user) =>
            user.name.toLowerCase().includes(input.value.toLowerCase())
          ).map((user) => (
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
