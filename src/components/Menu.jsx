import './Main.css'
import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <section className="sec">
        <Link to="/" className="link">
          <p>Home</p>
        </Link>
        <Link to="/packets" className="link">
          <p>Packets</p>
        </Link>
      </section>
      <Outlet />
    </>

  )
}