import TableWithCheckboxes from "./TableWithCheckboxes"
import Pordz from "./Pordz"
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useCallback } from "react";

const filtering = (filters, allData) => {
  let filteredData = []
  allData.forEach((user) => {
    if( user.name.toLowerCase().includes(filters.name.toLowerCase()))
  }
   
  )
  return filteredData
}


export default function PacketsSection() {
  const [active, setActive] = useState(false)
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [filters, setFilters] = useState({})

  useEffect(() => {
    async function getUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      if (Object.keys(filters).length === 0) {
        setUsers(users)
      } else {
        const filteredData = filtering(filters, users)
        setUsers(filteredData)
      }
    }
    getUsers()
  }, [filters])


  function Arr(newFilters) {
      setFilters(newFilters)
  }
  return (
    <section style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      <div className="toolbar">
        <Button isIconOnly aria-label="Like" onClick={() => setActive(true)}>
          <FontAwesomeIcon icon="fa-solid fa-filter" />
        </Button>
      </div>
      <TableWithCheckboxes tableData={users} />
      <Pordz bacvac={active} lav={Arr}></Pordz>
    </section>
  )
}