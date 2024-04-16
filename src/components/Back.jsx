import { useState, useEffect } from "react"

export default function Back({ bacvac }) {
  const [height, setHeight] = useState(false)
  useEffect(() => {
    if (bacvac) {
      setHeight(true)
    } else {
      setTimeout(() => {
        setHeight(false)
      }, 200)
    }
  }, [bacvac])
  return (
    <section className={'back ' + (bacvac ? 'background' : '')}
      style={height ? { height: 'calc(100vh - 50px)' } : {}}>
    </section>
  )
}