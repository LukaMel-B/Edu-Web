import React from 'react';
import Logo from "../assets/Logo.png";
import Phone from "../assets/phoneicon.png";
import Mail from "../assets/mailicon.png";
import Loc from "../assets/locicon.png";
import {
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto py-14 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
    <div>
    <img src={Logo} alt="Logo" className="mb-4 w-[150px] h-[150px]" />
    <p className='text-blue-800 ml-4'><span>Empowering students with<br/> personalized<br/>education at home</span></p>
    <div className='flex pt-2 ml-3'>
    <FaInstagram className="ml-3" color='black' size={25}/>
    <FaLinkedinIn className="ml-3" color='black' size={25}/>
    </div>
    
    </div>
    <div>
    <a href='#' className='pb-2 text-blue-600'>About Us | </a>
    <a href='#' className='pb-2 text-blue-600'>Demo | </a>
    <a href='#' className='pb-2 text-blue-600'>Tuition Enquiry</a>
           <h2 className="text-blue-700 font-bold text-3xl mt-5">Get in Touch</h2>
           <div className="text-blue-800 mt-3">
             <div className="flex items-center mb-2">
               <div className="w-6 h-6 mr-2 mb-2 mt-3">
                <img src={Phone}/>
               </div>
               <span>+1 (234) 567-890</span>
             </div>
             <div className="flex items-center mb-2">
               <div className="w-6 h-6 mr-2 ">
                <img src={Mail}/>
               </div>
           <span>hello@reallygreatsite.com</span>
             </div>
             <div className="flex items-center">
               <div className="w-6 h-6 mr-2 mb-2">
                 <img src={Loc}/>
               </div>
               <span>123 Education St, Knowledge City, EduState, 12345</span>
             </div>
        </div>
    </div>
   

<div className='flex justify-between md:w-[95%] my-6 '>
<iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094257!2d144.95565131587568!3d-37.81720974276617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577af422e4a6f0e!2s123%20Education%20St%2C%20Knowledge%20City%2C%20EduState%2C%2012345!5e0!3m2!1sen!2sau!4v1604495630478!5m2!1sen!2sau"
            width="100%" 
            height="200" 
            allowFullScreen="" 
            aria-hidden="false" 
            tabIndex="0"
            title="Google Maps"
            className="border-0 w-full h-full"
          />
</div>
</div>
  );
}

export default Footer;
