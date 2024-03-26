import HomeSection from "./HomeSection"
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import PacketsSection from "./PacketsSection";
import GraphicSection from "./GraphicSection";
import AlertSection from "./AlertSection";
import SettingsSection from "./SettingsSection";


export default function Section() {
  return (
    <>
      <section className="glx">
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomeSection />} />
            <Route path="alert" element={<AlertSection />} />
            <Route path="graphic" element={<GraphicSection />} />
            <Route path="packets" element={<PacketsSection />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>
        </Routes>
      </section>
    </>
  )
}