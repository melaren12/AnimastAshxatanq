import useInput from "../useInput";
import { Button, ConfigProvider, Input } from 'antd';

export default function Pordz({ bacvac, lav, bac }) {
  const name = useInput()
  const id = useInput()
  const handleConfirm = () => {
    console.log('lav', lav);
    lav({
      name: name.value,
      id: id.value
    })
  }
  const handleClose = () => {
    bac(false)
  }
  return (
    <div className={
      'karmir ' + (bacvac ? 'bacvac' : '')
    }>
      <Input size="large" className="control" placeholder="Id" />
      <Input size="large" className="control" placeholder="Protocol" />
      <div className="source" style={{ display: 'flex', gap: '5px' }}>
        <Input size="large" className="control" placeholder="Source" style={{ flex: '3' }} />
        <Input size="large" className="control" placeholder="Port" style={{ flex: '1' }} />
      </div>
      <div className="source" style={{ display: 'flex', gap: '5px' }}>
        <Input size="large" className="control" placeholder="Destination" style={{ flex: '3' }} />
        <Input size="large" className="control" placeholder="Port" style={{ flex: '1' }} />
      </div>
      <Input size="large" className="control" placeholder="Length" />
      <div className="buttons">
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
          <>
            <Button type="default" size='large' onClick={handleClose}>
              Close
            </Button>
            <Button type="default" size='large' onClick={handleConfirm}>
              Confirm
            </Button>
          </>
        </ConfigProvider>
      </div>
    </div>
  )
}