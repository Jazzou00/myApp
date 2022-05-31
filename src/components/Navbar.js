import React from 'react'
import logo from '../logo.png'
//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; //faBars is the icon's name



const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light">

<div className = "container">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#abriefHistory">About me</a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li> */}

          <li className="nav-item">
            <a className="nav-link" href="#experience">Experience</a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li> */}
          
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>

    

        </ul>
      </div>
</div>

</nav>
  )
}

export default Navbar 