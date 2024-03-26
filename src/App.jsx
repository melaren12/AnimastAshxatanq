import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import { Routes, Route } from "react-router-dom";
import PacketsSection from './components/PacketsSection';
import HomeSection from './components/HomeSection';
import Menu from './components/Menu';
import Section from './components/Section';

function App() {

  return (
    <>
      <main>
        <Header />
        <Section></Section>
      </main>
    </>
  )
}

export default App
