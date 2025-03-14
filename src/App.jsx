import './App.css'
import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header.jsx'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'


function App() {
  return (
    <div className="App max-w-screen overflow-hidden min-h-screen"> 
      <Header/>
      <Slider />
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
