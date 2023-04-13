import './App.css'
import Navbar from './components/Navbar'
import Heros from './components/Heros'

import Stats from './components/Stats'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'

function App() {

  return (
    <div className="lg:pt-12 lg:px-16 xl:px-24 lg:overflow-visible overflow-hidden
    
    px-4 pt-6">
      <Navbar />
      <Heros />

      <Stats />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default App
