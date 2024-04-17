import React from "react";
import { Table } from 'antd';
import eye from '/eye.svg'
import { useState } from "react";

export default function TableWithCheckboxes({ tableData }) {
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

  const prostoData = tableData.map((obj) => {
    obj.key = obj.id
    return obj;
  });

  const columns = [{
    title: 'Id',
    width: '50px',
    dataIndex: 'id',
  }, {
    title: 'Protocol',
    width: 'auto',
    dataIndex: 'name',
  }, {
    title: 'Source',
    width: 'auto',
    dataIndex: 'name',
  }, {
    title: 'Source Port',
    width: 'auto',
    dataIndex: 'name',
  }, {
    title: 'Destination',
    width: 'auto',
    dataIndex: 'name',
  }, {
    title: 'Destination Port',
    width: 'auto',
    dataIndex: 'name',
  }, {
    title: 'Lenght',
    width: 'auto',
    dataIndex: 'name',
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
        dataSource={tableData}
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
