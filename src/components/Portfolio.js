import React from 'react';
import portfolio1 from '../portfolio1.png';
import portfolio2 from '../portfolio2.jpg';
import portfolio3 from '../portfolio3.jpg';




const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h2>My Portfolio</h2>


        <div className='container portfolio__container'>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={portfolio1} alt="portfolio1"/> 
                </div>
                    <h6>This is a portfolio item title</h6>

                    <a href='' className='btn'>See More<span className='btn__portfolio'></span></a> 
            </article>


            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={portfolio2} alt="portfolio1"/> 
                </div>
                    <h6>This is a portfolio item title</h6>

                    <a href='' className='btn'>See More<span className='btn__portfolio'></span></a> 

            </article>



            <article className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={portfolio3} alt="portfolio1"/> 
                </div>
                    <h6>This is a portfolio item title</h6>

                    <a href='' className='btn'>See More<span className='btn__portfolio'></span></a> 


            </article>
        </div>
    </section>


  )

}

export default Portfolio