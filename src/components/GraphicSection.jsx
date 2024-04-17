import React from "react";
import { Table } from 'antd';
import eye from '/eye.svg'
import { useState } from "react";

export default function GraphicSection({ tableData }) {
  const [about, setAbout] = useState(false)
  const handleClick = () => {
    console.log('about');
    setAbout(true)
    setYScroll(true)
  }

  const [yScroll, setYScroll] = useState(false);

  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  
  const ourData = [{
    id: 45,
    protocol: 'TCP',
    source: '192.168.0.1',
    sourcePort: 53,
    destination: '192.168.0.194',
    destinationPort: 50333,
    length: 54
  }]

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
    render: (id) => <img src={eye} alt="Eye" onClick={handleClick} style={{cursor: 'pointer'}}/>,
  }]

  return (

    <div className="table-parent">
      <Table
        columns={columns}
        dataSource={ourData}
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
      <div className={"about " + (about ? 'ab' : '')}>
      </div>
    </div>
  );
}
