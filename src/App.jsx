import './App.css'
import Navbar from './components/Navbar'
import Heros from './components/Heros'

import Stats from './components/Stats'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'

function App() {

  return (
    <div className="pt-12 px-24 overflow-visible">
      <Navbar />
      <Heros />

      <Stats />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default App
