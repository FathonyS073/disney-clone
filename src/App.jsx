import './App.css'
import Header from './Components/header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'


function App() {
  return (
    <div className="App w-full min-h-screen"> 
      <Header />
      <Slider />
      <ProductionHouse/>
    </div>
  )
}

export default App
