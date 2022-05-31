import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div className ='footer__socials'>
            <a href='#'><BsFacebook/></a>
            <a href='#'><AiFillInstagram/></a>
            <a href='#'><BsTwitter/></a>
            <a href='#'><BsLinkedin/></a>
            <a href='#'><AiOutlineGithub/></a>
        </div>

        <div className='footer__copyright'>
            <small>&copy; Mialy. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer