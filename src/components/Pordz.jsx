import useInput from "../useInput";
import { Button } from 'antd';

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
      <input type="text" className="control" placeholder="Id" {...id} />
      <input type="text" className="control" placeholder="Protocol" {...name} />
      <input type="text" className="control" placeholder="Source" {...name} />
      <input type="text" className="control" placeholder="Destination" {...name} />
      <input type="text" className="control" placeholder="Lenghth" {...name} />
      <div className="buttons">
        <Button type="default" size='default' onClick={handleClose}>
          Close
        </Button>
        <Button type="default" size='default' onClick={handleConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  )
}