import { Select, Button, ConfigProvider } from 'antd';

export default function HomeSection() {
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
    <div className="home-section main-section">
      <h1>Welcome to Wi-Fi Monitoring App</h1>
      <p style={{ margin: '20px 0', lineHeight: '25px' }}>The simple and user-friendly WiFi monitoring app. Stay informed about your network's status effortlessly. Easy-to-use interface, no technical expertise required. Monitor your WiFi network with ease.</p>
      <p style={{margin: '50px 0 10px', fontWeight: '600'}}>To start capturing packets first select the network interface</p>
      <div className="select">
        <ConfigProvider
          theme={{
            components: {
              Select: {
                selectorBg: 'var(--select-bg-color)',
                optionActiveBg: 'var(--active-bg)',
                optionSelectedBg: 'var(--select-bg-color)',
              },
              Button: {
                defaultHoverBg: 'var(--button-hover-color)',
                defaultHoverBorderColor: 'var(--but-hover-border)',
                defaultHoverColor: 'var(--but-hover-text)',
                defaultBg: 'var(--but-bg-color)',
                defaultColor: 'var(--but-text-color)'
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
            size='large'
            style={{
              width: 200,
            }}
            options={tableData}
          />
          <Button type="primary" size='large' style={{ margin: '0 5px 0 0', display: 'flex', alignItems: 'center' }} className="but">
            Start Capturing Packets
          </Button>
        </ConfigProvider>
      </div>
    </div>
  )
}