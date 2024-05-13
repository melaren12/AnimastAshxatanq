import { Table, ConfigProvider } from 'antd';
import { Button } from 'antd';
import { ExportOutlined } from "@ant-design/icons";

export default function SettingsSection() {
  const ourData = [{
    id: 1,
    mac: '00-F4-8D-90-2A-3D',
    ip: '192.168.1.1',
    name: '-'
  }, {
    id: 2,
    mac: 'A0-10-81-31-87-EF',
    ip: '192.168.1.101',
    name: 'DESKTOP-D5U7ITR'
  }, {
    id: 3,
    mac: 'DC-97-58-9E-16-62',
    ip: '192.168.0.103',
    name: '-'
  }, {
    id: 4,
    mac: '88-BD-45-A8-10-18	',
    ip: '192.168.0.104',
    name: '-'
  }, {
    id: 5,
    mac: 'A8-3E-0E-BE-11-98',
    ip: '192.168.1.240',
    name: '-'
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
    title: 'MAC Address',
    width: 'auto',
    dataIndex: 'mac',
  }, {
    title: 'IP',
    width: 'auto',
    dataIndex: 'ip',
  }, {
    title: 'Name',
    width: 'auto',
    dataIndex: 'name',
  }]

  const handleClick = () => {
    window.open(
      'http://tplinkmodem.net/'
    )
  }

  return (
    <section className='info'>
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
        <Button type="default" size='large' style={{ margin: '10px 20px' }} className='gjvcrec but' onClick={handleClick}>
          Open Admin Panel
          <ExportOutlined />
        </Button>
      </ConfigProvider>
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
          scroll={scroll}
          pagination={false}
          bordered
          className="routertable"
          size="middle"
        />
      </ConfigProvider>
    </section>

  )
}