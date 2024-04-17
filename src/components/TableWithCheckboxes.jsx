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
    width: 100,
    dataIndex: 'id',
  }, {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
  }]
  return (

    <div className="table-parent">
      <Table
    columns={columns}
    dataSource={prostoData}
    // scroll={{
    //   x: 1300,
    // }}
    rowSelection={{
      type: 'checkbox',
    }}
    pagination={false}
    bordered
  />
      <div className={"about " + (about ? 'ab' : '')}>
      </div>
    </div>
  );
}
