import React from "react";
import { Space, Table, ConfigProvider } from 'antd';
import { useState } from "react";
import { CloseOutlined, PlusOutlined, EyeOutlined } from "@ant-design/icons";

export default function TableWithCheckboxes({ tableData }) {
  const [about, setAbout] = useState(false)
  const handleClick = () => {
    console.log('about');
    setAbout(!about)
    setYScroll(!yScroll)
  }

  const [yScroll, setYScroll] = useState(false);

  const scroll = {};
  if (yScroll) {
    scroll.y = 180;
  } else {
    scroll.y = 400;
  }

  const prostoData = tableData.map((obj) => {
    obj.key = obj.id
    return obj;
  });

  const text = `Frame 2073: 54 bytes on wire (432 bits), 54 bytes captured (432 bits) on interface \Device\NPF_{13D11F63-8151-4EE3-B815-E1B0AE93D01D}, id 0
  Ethernet II, Src: TPLink_0f:9e:b0 (50:91:e3:0f:9e:b0), Dst: CloudNetwork_9f:3f:8d (74:97:79:9f:3f:8d)
  Internet Protocol Version 4, Src: 192.168.0.1, Dst: 192.168.0.194
  Transmission Control Protocol, Src Port: 53, Dst Port: 50333, Seq: 1, Ack: 36, Len: 0
      Source Port: 53
      Destination Port: 50333
      [Stream index: 5]
      [Conversation completeness: Complete, WITH_DATA (31)]
      [TCP Segment Len: 0]
      Sequence Number: 1    (relative sequence number)
      Sequence Number (raw): 2065967333
      [Next Sequence Number: 1    (relative sequence number)]
      Acknowledgment Number: 36    (relative ack number)
      Acknowledgment number (raw): 497277497
      0101 .... = Header Length: 20 bytes (5)
      Flags: 0x010 (ACK)
      Window: 65
      [Calculated window size: 66560]
      [Window size scaling factor: 1024]
      Checksum: 0xb403 [unverified]
      [Checksum Status: Unverified]
      Urgent Pointer: 0
      [Timestamps]
      [SEQ/ACK analysis]`
  const ourData2 = [{
    id: 45,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 46,
    protocol: 'UDP',
    source: '192.168.0.194',
    sourcePort: 53591,
    destination: '66.22.238.14',
    destinationPort: 50014,
    length: 127
  }, {
    id: 47,
    protocol: 'TCP',
    source: '192.168.0.194',
    sourcePort: 56673,
    destination: '192.168.0.1',
    destinationPort: 53,
    length: 54
  }, {
    id: 48,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 49,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 50,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 51,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 52,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 53,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 54,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 55,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 56,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 57,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 58,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 59,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }]

  const ourData = [{
    id: 1,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }, {
    id: 2,
    protocol: 'UDP',
    source: '192.168.0.194',
    sourcePort: 53591,
    destination: '66.22.238.14',
    destinationPort: 50014,
    length: 127
  }, {
    id: 3,
    protocol: 'TCP',
    source: '192.168.0.194',
    sourcePort: 56673,
    destination: '192.168.0.1',
    destinationPort: 53,
    length: 54
  }]

  const finalData = ourData2.map((obj) => {
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
  }, {
    title: 'Lenght',
    width: 'auto',
    dataIndex: 'length',
  }, {
    title: 'Action',
    width: 'auto',
    dataIndex: 'id',
    render: (id) => (
      <Space size={'middle'} style={{ display: 'flex', justifyContent: 'space-between' }}>
        <EyeOutlined onClick={handleClick} style={{ cursor: 'pointer' }}/>
        <PlusOutlined style={{ fontSize: '20px', cursor: 'pointer' }} />
      </Space>)

  }]


  return (

    <div className="table-parent">
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: 'var(--background-color)',
            colorText: 'var(--table-text-color)',
            colorPrimary: 'var(--color-primary)'
          },
          components: {
            Table: {
              rowHoverBg: 'var(--table-hover-color)',
              rowSelectedBg: 'black',
              headerBg: 'var(--background-color)',
              headerColor: 'var(--table-header-color)',
              rowSelectedHoverBg: 'var(--row-selected-hover)',
              rowSelectedBg: 'var(--row-selected)'
            }
          }
        }}
      >
        <Table
          columns={columns}
          dataSource={finalData}
          scroll={scroll}
          // scroll={{
          //   x: 1300,
          // }}
          rowSelection={{
            type: 'checkbox',
            columnWidth: '32px',
            fixed: true
          }}
          pagination={false}
          bordered
          className="table"
          size="small"
        />
      </ConfigProvider>

      <div className={"about " + (about ? 'ab' : '')}>
        <div className="about-container">
          <div className="header">
            <CloseOutlined className="close" onClick={handleClick} />
          </div>
          <div className="abbody" style={{ overflow: 'auto' }}>
            <pre >{text}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
