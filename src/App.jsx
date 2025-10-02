import './App.css'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Mission from './components/sections/Mission'
import TrustSignals from './components/sections/TrustSignals'
import MilitarySupport from './components/sections/MilitarySupport'
import ProductFooterSection from './components/sections/ProductFooterSection'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Mission />
        <MilitarySupport />
        <TrustSignals />
        <ProductFooterSection />
      </main>
    </div>
  )
}

export default App
