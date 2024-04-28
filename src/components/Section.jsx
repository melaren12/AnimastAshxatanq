import HomeSection from "./HomeSection"
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import PacketsSection from "./PacketsSection";
import RulesSection from "./RulesSection";
import ImportantSection from "./ImportantSection";
import SettingsSection from "./SettingsSection";
import Back from "./Back";
import { useState } from "react";


export default function Section() {
  const [black, setBlack] = useState(false)
  const makeItBlack = (mesrop) => {
    setBlack(mesrop)
  }
  return (
    <>
      <section className="glx">
        <Back bacvac={black}></Back>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomeSection />} />
            <Route path="alert" element={<ImportantSection makeItBlack={makeItBlack} />} />
            <Route path="graphic" element={<RulesSection makeItBlack={makeItBlack} />} />
            <Route path="packets" element={<PacketsSection makeItBlack={makeItBlack} />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>
        </Routes>
      </section>
    </>
  )
}