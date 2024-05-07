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
        <p>Wi-Fi Monitoring App</p>
        <button className="dark-light" onClick={myFunction}>
          <div className={
            'white ' + (mode ? 'dark' : '')
          }></div>
        </button>
      </header>

    </>
  )
}