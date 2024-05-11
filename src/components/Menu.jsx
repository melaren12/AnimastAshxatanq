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
        <NavLink to="/" className={({ isActive }) => "link " + (isActive ? "active" : "")} >
          Home
        </NavLink>
        <NavLink to="/packets" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          Packets
        </NavLink>
        <NavLink to="/graphic" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          Rules
        </NavLink>
        <NavLink to="/alert" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          Important packets
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => "link " + (isActive ? "active" : "")}>
          Router information
        </NavLink>
      </section>
      <Outlet />
    </>

  )
}