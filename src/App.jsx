import './App.css'
import Header from './components/Header'
import Section from './components/Section';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {

  return (
      <main>
        <Header />
        <Section />
      </main>
  )
}

export default App
