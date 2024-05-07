import './Main.css'
import { NavLink, Outlet } from "react-router-dom";
import { useState } from 'react'
import Button from './Button/Button';

export default function Menu() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }
  return (
    <>
      <section className="navbar">
        <NavLink to="/" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          <Button
            isActive={contentType === 'home'}
            onClick={() => handleClick('home')}
          >
            <p>Home</p>
          </Button>
        </NavLink>
        <NavLink to="/packets" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          <Button
            isActive={contentType === 'packets'}
            onClick={() => handleClick('packets')}
          >
            <p>Packets</p>
          </Button>
        </NavLink>
        <NavLink to="/graphic" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          <Button
            isActive={contentType === 'graphic'}
            onClick={() => handleClick('graphic')}
          >
            <p>Rules</p>
          </Button>
        </NavLink>
        <NavLink to="/alert" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          <Button
            isActive={contentType === 'alert'}
            onClick={() => handleClick('alert')}
          >
            <p>Important packets</p>
          </Button>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          <Button
            isActive={contentType === 'settings'}
            onClick={() => handleClick('settings')}
          >
            <p>Router information</p>
          </Button>
        </NavLink>
      </section>
      <Outlet />
    </>

  )
}