import {FiMail} from 'react-icons/fi';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vp2zowq', 'template_we35jsb', form.current, 'fIldplk6a23GclmM_')

      e.target.reset();
    }; 


  return (
    <section id='contact'>
        <h2>Contact</h2>


        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <FiMail className='contact__option-icon'/>
                    
                        <h5>Email</h5>
                        <h6>mialy.nir@gmail.com</h6>
                        <a href='mailto:mialy.nir@gmail.com'>Send a message</a>
                    
                </article>

                <article className='contact__option'>
                    <BsInstagram className='contact__option-icon'/>
                    
                        <h5>Instagram</h5>
                        <h6>mialy</h6>
                        <a href=''>Send a message</a>
                    
                </article>

                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    
                        <h5>WhatsApp</h5>
                        <h6>06 65 28 46 93</h6>
                        <a href='https://wa.me/33665284693' target="_blank">Send a message</a>
                    
                </article>
            </div>

            {/* END OF CONTACT OPTIONS */}

            

            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required/>

                <input type="email" name='email' placeholder='Your email' required/>

                <textarea name='message' id='' cols="30" rows="7" placeholder="Your Message" required></textarea>

                <button type='submit' className='btn '> Send</button>

            </form>
        </div>
    </section>
  )
}

export default Contact