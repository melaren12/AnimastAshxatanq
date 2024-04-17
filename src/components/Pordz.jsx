import useInput from "../useInput";

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
      <input type="text" className="control" {...name} />
      <input type="text" className="control" {...id} />
      <div className="buttons">
        {/* <Button color="primary" onClick={handleClose}>
          Close
        </Button>
        <Button color="primary" onClick={handleConfirm}>
          Confirm
        </Button> */}
      </div>
    </div>
  )
}