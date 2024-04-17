import React from "react";
import { Table } from 'antd';
import eye from '/eye.svg'
import { useState } from "react";

export default function TableWithCheckboxes({ tableData }) {
  const [about, setAbout] = useState(false)
  const handleClick = () => {
    console.log('about');
    setAbout(true)
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
    title: 'Info',
    width: 'auto',
    dataIndex: 'name',
  }]

  return (

    <div className="table-parent">
      <Table
        columns={columns}
        dataSource={prostoData}
        scroll={{
          y: 240,
        }}
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
