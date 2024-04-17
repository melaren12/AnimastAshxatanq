import { Select } from 'antd';

export default function HomeSection() {
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
      <Select
        labelInValue
        defaultValue={{
          value: 'lucy',
          label: 'Lucy (101)',
        }}
        style={{
          width: 200,
        }}
        options={tableData}
      />
    </div>
  )
}