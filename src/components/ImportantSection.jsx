import TableWithCheckboxes from "./TableWithCheckboxes"
import Pordz from "./Pordz"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useCallback } from "react";
import { Button } from 'antd';
import { DeleteOutlined, DownloadOutlined } from "@ant-design/icons";

const filtering = (filters, allData) => {
  let filteredData = []
  // allData.forEach((user) => {
  //   if( user.name.toLowerCase().includes(filters.name.toLowerCase()))
  // })
  return filteredData
}



export default function ImportantSection(props) {
  const [active, setActive] = useState(false)
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [filters, setFilters] = useState({})

  useEffect(() => {
    props.makeItBlack(active)
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

  function Aren(newCost) {
    setActive(newCost)
    props.makeItBlack(newCost)
  }

  function opened() {
    setActive(true)
    props.makeItBlack(true)
  }


  function Arr(newFilters) {
    setFilters(newFilters)
  }
  return (
    <section className="main-section packets-section">
      <div className="toolbar">
        <div className="left-toolbar">
          <Button type="default" size='default' style={{ margin: '0 5px' }}>
            <DownloadOutlined style={{ fontSize: '20px'}}/>
          </Button>
          <Button type="default" size='default' style={{ margin: '0 5px' }}>
            <DeleteOutlined style={{ fontSize: '20px'}}/>
          </Button>
        </div>
        <Button type="default" size='default' onClick={opened} style={{ margin: '0' }}>
          <FontAwesomeIcon icon="fa-solid fa-filter" style={{ fontSize: '20px'}}/>
        </Button>

      </div>
      <div className="packets-container">
        <TableWithCheckboxes tableData={users} />
      </div>
      <Pordz bacvac={active} lav={Arr} bac={Aren}></Pordz>
    </section>
  )
}