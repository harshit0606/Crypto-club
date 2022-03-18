import React,{useState} from 'react';

import Logo from "../Assets/logo.png";
import {Link} from "react-router-dom"
import "../styles/header.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate=useNavigate();
   const [mobileMenuOpen,setMobileMenuOpen]=useState(false); 

  function handleOpen(e){
    e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
  }
   const handleClick = (e, path) => {
    e.preventDefault()
 
     if (path === "/#about") {
       setMobileMenuOpen(false);
       navigate(path)
     }
     if (path === "/#faq") {
      setMobileMenuOpen(false);
        navigate(path)
     }
     if (path === "/contactus") {
      setMobileMenuOpen(false);
      navigate(path)
   }
   }; 

  return (
  <div>
  <div className="Header">
  <div className="logo_div">
    <Link to="/"><img src={Logo}/></Link>
  </div>
  <div className="links">
  <a href="/#about">About Us</a>
  <a href="/#faq">FAQ</a>
  <a href="/contactus">Contact Us</a>
  
  </div>
  <div className="Ham">
  <GiHamburgerMenu onClick={handleOpen} style={{color:"white",fontSize:"30px"}}/>
  </div>
  </div>
  {mobileMenuOpen &&
  (<div className="mobileMenu">
    <div className='mobileLinks'>
    <a  onClick={(e)=>handleClick(e,"/#about")} href="/#about" >About Us</a>
    <a onClick={(e)=>handleClick(e,"/#faq")} href="/#faq">FAQ</a>
    <a onClick={(e)=>handleClick(e,"/contactus")} href="/contactus">Contact Us</a>
    </div>
  </div>)
}

  </div>);

}

export default Header;