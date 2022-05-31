import React from 'react';
import oeuf from '../oeuf.jpg';
import palm from '../palm.jpg';
import flag from '../flag.gif';
import school from '../school.jpg'


const About = () => {
  return (
   <section id='about'>
     
        <header className='section-header'>
         <h4 className='section-header__title'>A brief history</h4>
        </header>

       <section id='abriefHistory'>

          <div id='one'>
              
                    <img src={oeuf} alt="oeuf"/><div className='content'>
                    - 2000'<span className='minus'>s</span> -
                    <br/>
                    I was born
                  </div>     
              
          </div>


          <div id='two' className='textRight'>
              
                  <img src={palm} alt="palm"/> 
                  <div className='content'>
                    Grew up in Madagascar
                  </div>
          </div>


          <div id='three'>
              <img src={flag} alt="flag"/><div className=' content'>
              - 2018 -
                <br/>
                Moved to France, Nantes
              </div>
          </div>


          <div id='four' className='right textRight'>
              
              <img src={school} alt="school"/>
              <div className='content'>
              - September, 2022 -
                <br/>
                Soon to be a web developer!
              </div>
          </div>
          

       </section>

    
   </section>
  )
}

export default About