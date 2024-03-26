import './Main.css'
import { Link, Outlet } from "react-router-dom";
import { useState } from 'react'
import Button from './Button/Button';

export default function Menu() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }
  return (
    <>
      <section className="sec">
        <Link to="/" className="link" >
          <Button
            isActive={contentType === 'home'}
            onClick={() => handleClick('home')}
          >
            Home
          </Button>
        </Link>
        <Link to="/alert" className="link">
          <Button
            isActive={contentType === 'alert'}
            onClick={() => handleClick('alert')}
          >
            Alert
          </Button>
        </Link>
        <Link to="/graphic" className="link">
          <Button
            isActive={contentType === 'graphic'}
            onClick={() => handleClick('graphic')}
          >
            Graphic
          </Button>
        </Link>
        <Link to="/packets" className="link">
          <Button
            isActive={contentType === 'packets'}
            onClick={() => handleClick('packets')}
          >
            Packets
          </Button>
        </Link>
        <Link to="/settings" className="link">
          <Button
            isActive={contentType === 'settings'}
            onClick={() => handleClick('settings')}
          >
            Settings
          </Button>
        </Link>
      </section>
      <Outlet />
    </>

  )
}