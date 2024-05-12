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
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
          <WifiOutlined style={{fontSize: '30px', color: '#1677ff'}}/>
          <span>Wi-Fi Monitoring App</span>
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