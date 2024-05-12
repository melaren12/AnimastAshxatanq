import TableWithCheckboxes from "./TableWithCheckboxes"
import Pordz from "./Pordz"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useCallback } from "react";
import { Button, ConfigProvider } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, DownloadOutlined } from "@ant-design/icons";

const filtering = (filters, allData) => {
  let filteredData = []
  // allData.forEach((user) => {
  //   if( user.name.toLowerCase().includes(filters.name.toLowerCase()))
  // })
  return filteredData
}


export default function PacketsSection(props) {
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

        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultHoverBg: 'var(--button-hover-color)',
                defaultHoverBorderColor: 'var(--but-hover-border)',
                defaultHoverColor: 'var(--but-hover-text)',
                defaultBg: 'var(--but-bg-color)',
                defaultColor: 'var(--but-text-color)'
              }
            }
          }}
        >
          <>
            <div className="left-toolbar" style={{ display: 'flex' }}>
              <Button type="default" size='large' style={{ margin: '0 5px 0 0', display: 'flex', alignItems: 'center' }} className="but">
                <PlayCircleOutlined style={{ fontSize: '18px' }} />
                Start
              </Button>
              <Button type="default" size='large' style={{ margin: '0 5px', display: 'flex', alignItems: 'center' }} className="but">
                <PauseCircleOutlined style={{ fontSize: '18px' }} />
                Stop
              </Button>
              <Button type="default" size='large' style={{ margin: '0 5px', display: 'flex', alignItems: 'center' }} className="but">
                <DownloadOutlined style={{ fontSize: '18px' }} />
                Download
              </Button>
            </div>
            <Button type="default" size='large' onClick={opened} style={{ margin: '0', display: 'flex', alignItems: 'center' }} className="but">
              <FontAwesomeIcon icon="fa-solid fa-filter" style={{ fontSize: '18px', marginRight: '5px' }} />
              Filter
            </Button>
          </>

        </ConfigProvider>



      </div>
      <div className="packets-container">
        <TableWithCheckboxes tableData={users} />
      </div>
      <Pordz bacvac={active} lav={Arr} bac={Aren}></Pordz>
    </section>
  )
}