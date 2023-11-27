

import './App.css'
import { Route, Routes, useLocation } from "react-router-dom"
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import SearchBar from './views/searchBar/SearchBar';

function App() {
  const {pathname} = useLocation();
 
  return (
    <>
    {pathname === "/" ? <SearchBar/> : null}
    <Routes>
    <Route path='/home' element={<Home/>}/> 
    <Route path='/footer' element={<Footer/>}/> 
    </Routes>
    </>
  )
}

export default App
