import { useState } from "react"
import Home from "./Components/Home";
import { BrowserRouter, Routes,Route,Link } from "react-router-dom";
import {products} from './db/db';
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
let[mode,setMode]=useState('light')

let toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
  }else{
    setMode('light')
  }

}
  return (
    <>
    <BrowserRouter>
    <Navbar products={products} mode={mode} toggleMode={toggleMode}/>
    <Routes>
      <Route path="/" element={<Home products={products}/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
   
    </>

    
  )
}

export default App
