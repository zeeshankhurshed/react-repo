import React ,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Modal from './Modal'



function Navbar({products , toggleMode , mode}) {
  let [isModalOpen, setIsModalOpen]=useState(false)


  let openModal=()=>{
    if(isModalOpen){
      setIsModalOpen(false)
    }else{
      setIsModalOpen(true)
    }

  }
  return (
    <>
     <nav class={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <Link class="navbar-brand" to={"/"}>Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item mx-2">
          {/* <a class="nav-link " aria-current="page" href="#">Home</a> */}
          <NavLink class="nav-link td-none" aria-current="page" to={"/about "}>About</NavLink>
        </li>
             <li class="nav-item">
          {/* <a class="nav-link " href='#'>Contact</a> */}
          <NavLink class="nav-link td-none" to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
   
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
             <button class="btn btn-info me-2" onClick={openModal}>LogIn</button>
        </li>
      </ul>
    </div>
  </div>
  <div className={`form-check form-switch text-${mode==='light' ? 'dark':'light'}`}>
  <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault"></label>
</div>
</nav> 

{
  isModalOpen ? <Modal openModal={openModal}/> : ""
}
    </>
  )
}

export default Navbar
