import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
        
        <div className='socialMedia'>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
        </div>
        <p className='copy'> &copy; 2024 <span>burger04.com</span> </p>
        </div>
  )
}

export default Footer