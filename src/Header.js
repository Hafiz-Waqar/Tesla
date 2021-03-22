import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'



function Header({isMenuOpen, setIsMenuOpen}) {
  return (
    <div class="header">
      <div className="header_logo">
        <Link to = "/">
            <img
                className="header_logoImg" 
                src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
                alt=""/>
        </Link>
      </div>
      <div className="header_link">
          <Link to= "/">Model S</Link>
          <Link to= "/">Model 3</Link>
          <Link to= "/">Model X</Link>
          <Link to= "/">Model Y</Link>
          <Link to= "/">Solar Roof</Link>
          <Link to= "/">Solar Panel</Link>
      </div>
      <div className="heder_right">
          <Link to= "/" className={isMenuOpen && 'header_link_hidden'}>Shop</Link>
          <Link to= "/login" className={isMenuOpen && 'header_link_hidden'}>Tesla Account</Link>
      </div>
      <div className="header_menu" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  )
}

export default Header
