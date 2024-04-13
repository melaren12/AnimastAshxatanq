import useInput from "../useInput";
import { Button } from "@nextui-org/react";

export default function Pordz({ bacvac, lav }) {
  const name = useInput()
  const id = useInput()
  const handleConfirm = () => {
    lav({
      name: name.value,
      id: id.value
    })
  }
  return (
    <div className={
      'karmir ' + (bacvac ? 'bacvac' : '')
    }>
      <input type="text" className="control" {...name} />
      <input type="text" className="control" {...id} />
      <div className="buttons">
        <Button color="primary">
          Close
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          Confirm
        </Button>
      </div>
    </div>
  )
}