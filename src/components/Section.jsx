import HomeSection from "./HomeSection"
import { Routes, Route } from "react-router-dom";
import PacketsSection from "./PacketsSection";
import Menu from "./Menu";

export default function Section() {
  return (
    <>
      <section className="glx">
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomeSection />} />
            <Route path="packets" element={<PacketsSection />} />
          </Route>
        </Routes>
      </section>
    </>
  )
}