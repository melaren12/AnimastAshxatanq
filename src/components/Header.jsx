import { WifiOutlined } from "@ant-design/icons"
import { useState } from "react"

export default function Header() {
  const [mode, setMode] = useState(false)

  const myFunction = () => {
    document.body.classList.toggle('dark')
    setMode(!mode)
  }
  return (
    <>
      <header>
        <div style={{display: 'flex', gap: '10px'}}>
          <WifiOutlined style={{fontSize: '30px', color: '#1677ff'}}/>
          <p>Wi-Fi Monitoring App</p>
        </div>
        <button className="dark-light" onClick={myFunction}>
          <div className={
            'white ' + (mode ? 'dark' : '')
          }></div>
        </button>
      </header>

    </>
  )
}