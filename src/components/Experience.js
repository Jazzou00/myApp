import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';


const Experience = () => {
  return (
    <section id="experience">

        <h2>My Experience</h2>

        <div className='container experience__container'>

             <div className='experience__frontend'>
                <h4>Frontend Development</h4>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>HTML</h5>
                            </div>
                        </article>
                            
                    

                    
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                             <h5>JavaScript</h5>
                           </div> 
                        </article>
                            
                    

                    
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h5>React.js</h5>
                            </div>
                        </article>
                            
                    

                    
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                            <h5>CSS</h5>
                            </div>
                        </article>
                            
                  

                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>Bootstrap</h5>
                            </div>
                        </article>
                            
                    </div>
                    </div>
             </div>

{/*END OF FRONTEND*/}

             <div className='experience__backend'>
                <h4>Backend Development</h4>
                <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>Node.js</h5>
                            </div>
                        </article>
                            
                   

                   
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>Express</h5>
                            </div>
                        </article>
                            
                    
                   
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>MongoDB</h5>
                            </div>
                        </article>
                            
                    

                   
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>PHP</h5>
                            </div>
                        </article>
                            
                    

                    
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/>
                            <div>
                                <h5>MySql</h5>
                            </div>
                        </article>
                            
                    </div>
             </div>

        </div>

    </section>
  )
}

export default Experience