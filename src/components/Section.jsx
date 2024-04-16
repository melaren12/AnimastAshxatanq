import HomeSection from "./HomeSection"
import { Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import PacketsSection from "./PacketsSection";
import GraphicSection from "./GraphicSection";
import AlertSection from "./AlertSection";
import SettingsSection from "./SettingsSection";
import Back from "./Back";
import { useState } from "react";


export default function Section() {
  const [black, setBlack] = useState(false)
  const makeItBlack = (mesrop) => {
    setBlack(mesrop)
    // if (mesrop === false) {
    //   height: calc(100vh - 50px);
    //   setTimeout(() => {
    //   }, 200)
    // } else {
    //   setBlack(mesrop)
    // }
  }
  return (
    <>
      <section className="glx">
        <Back bacvac={black}></Back>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomeSection />} />
            <Route path="alert" element={<AlertSection />} />
            <Route path="graphic" element={<GraphicSection />} />
            <Route path="packets" element={<PacketsSection makeItBlack={makeItBlack} />} />
            <Route path="settings" element={<SettingsSection />} />
          </Route>
        </Routes>
      </section>
    </>
  )
}