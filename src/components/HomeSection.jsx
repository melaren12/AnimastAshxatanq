import { Select, Input, ConfigProvider } from 'antd';
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
      <h3 style={{ position: 'relative', bottom: '30px' }}>Choose Your Access Point </h3>
      <div className="select">
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: 'var(--select-bg-color)',
                optionActiveBg: 'var(--active-bg)',
                optionSelectedBg: 'var(--select-bg-color)',
              }
            },
            token: {
              colorBgContainer: 'var(--select-bg-color)',
              colorBgElevated: 'var(--select-bg-color)',
              colorText: 'var(--table-text-color)',
              colorTextPlaceholder: 'var(--table-text-color)'
            }
          }}
        >
          <Select
            labelInValue
            defaultValue={'Select'}
            // defaultValue={{
            //   value: 'Wi-Fi',
            //   label: 'Wi-Fi',
            // }}

            style={{
              width: 200,
            }}

            options={tableData}
            onChange={handleClick}
          />
          <Input.Password placeholder="input password" style={{ width: '200px' }} className={'input ' + (show ? 'show' : '')} />
        </ConfigProvider>
      </div>
    </div>
  )
}