import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React from 'react';
import Fire from '../Fire.mp4';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>

            <h1>Web development</h1>

            <Typed className='typed-text' strings={[ "Front-end: React.js, Javascript, CSS, Bootstrap, HTML", "Back-end: Node.js, Express, MongoDB, PHP, MySql"]}
            typeSpeed={50}
            backSpeed={15}
            loop
            />

            <a href="#contact" className="btn-main-offer ">Contact me</a>

        </div>
        
        <video loop autoPlay muted>
            <source src={Fire} type="video/mp4"/>
        </video>
    </div>
  )
}

export default Header