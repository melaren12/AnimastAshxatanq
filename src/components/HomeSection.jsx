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
      value: 'Wi-Fi',
      label: 'Wi-Fi',
    }
    ]
  return (
    <div className="home-section">
      <h3 style={{position: 'relative', bottom: '30px'}}>Choose Your Access Point </h3>
      <div className="select">
        <Select
          labelInValue
          // defaultValue={{
          //   value: 'Wi-Fi',
          //   label: 'Wi-Fi',
          // }}
          
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