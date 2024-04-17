import { Select, Input } from 'antd';
import { useState } from 'react';

export default function HomeSection() {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(true)
  }
  const tableData =
    [{
      value: 'jack',
      label: 'Jack (100)',
    },
    {
      value: 'lucy',
      label: 'Lucy (101)',
    }
    ]
  return (
    <div className="home-section">
      <h3>Choose WiFi</h3>
      <div className="select">
        <Select
          labelInValue
          defaultValue={{
            value: 'lucy',
            label: 'Lucy (101)',
          }}
          
          style={{
            width: 200,
          }}
          
          options = {tableData}
          onChange={handleClick}
        />
        <Input.Password placeholder="input password" style={{ width: '200px' }} className={'input ' + (show ? 'show' : '')}/>
      </div>
    </div>
  )
}