import Pordz from "./Pordz"
import { Table, ConfigProvider } from 'antd';
import { Button } from 'antd';
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const filtering = (filters, allData) => {
  let filteredData = []
  // allData.forEach((user) => {
  //   if( user.name.toLowerCase().includes(filters.name.toLowerCase()))
  // })
  return filteredData
}



export default function Rules() {
  const ourData = [{
    id: 1,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '-',
    destinationPort: '-',
  }, {
    id: 2,
    protocol: 'UDP',
    source: '-',
    sourcePort: '-',
    destination: '66.22.238.14',
    destinationPort: 50014,
  }, {
    id: 3,
    protocol: 'TCP',
    source: '192.168.0.194',
    sourcePort: 56673,
    destination: '192.168.0.1',
    destinationPort: 53,
  }]

  const finalData = ourData.map((obj) => {
    obj.key = obj.id;
    return obj;
  });

  const columns = [{
    title: 'Id',
    width: '50px',
    dataIndex: 'id',
  }, {
    title: 'Protocol',
    width: 'auto',
    dataIndex: 'protocol',
  }, {
    title: 'Source',
    width: 'auto',
    dataIndex: 'source',
  }, {
    title: 'Source Port',
    width: 'auto',
    dataIndex: 'sourcePort',
  }, {
    title: 'Destination',
    width: 'auto',
    dataIndex: 'destination',
  }, {
    title: 'Destination Port',
    width: 'auto',
    dataIndex: 'destinationPort',
  }]

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
          <div className="left-toolbar">
            <Button type="default" size='large' style={{ margin: '0 5px 0 0' }} className="but">
              <PlusOutlined style={{ fontSize: '18px' }} />
              Add
            </Button>
            <Button type="default" size='large' style={{ margin: '0 5px' }} className="but">
              <DeleteOutlined style={{ fontSize: '18px' }} />
              Delete
            </Button>
          </div>
        </ConfigProvider>

        {/* <Button type="default" size='default' onClick={opened} style={{ margin: '0' }}>
          <FontAwesomeIcon icon="fa-solid fa-filter" style={{ fontSize: '20px' }} />
        </Button> */}

      </div>
      <div className="packets-container">
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: 'var(--background-color)',
              colorText: 'var(--table-text-color)'
            },
            components: {
              Table: {
                rowHoverBg: 'var(--table-hover-color)',
                rowSelectedBg: 'black',
                headerBg: 'var(--background-color)',
                headerColor: 'var(--table-header-color)',
                cellFontSizeMD: '16px'
              }
            }
          }}
        >
          <Table
            columns={columns}
            dataSource={finalData}
            style={{ margin: '0 20px' }}
            rowSelection={{
              type: 'checkbox',
              columnWidth: '32px',
              fixed: true
            }}
            pagination={false}
            bordered
            className="table"
            size="middle"
          />
        </ConfigProvider>
      </div>
      <Pordz></Pordz>
    </section>
  )
}