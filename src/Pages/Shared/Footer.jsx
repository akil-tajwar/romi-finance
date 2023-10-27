import React from 'react';
import { FaTwitter, FaMediumM, FaGithub, FaTelegram } from 'react-icons/fa';
import { BiLogoDiscord } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className='bg-[#151515] border-t border-[#3E3E3E] py-5'>
            <div className='text-center flex justify-center items-center'>
                <img className='lg:w-14 w-8' src="New Logo.png" alt="" />
                <p className="lg:text-2xl text-sm font-semibold">Romi.Finance</p>
            </div>
            <div className='flex justify-center items-center gap-16 text-3xl text-[#787982] py-5'>
                <FaTwitter className='hover:text-white'/>
                <FaMediumM className='hover:text-white'/>
                <FaGithub className='hover:text-white'/>
                <FaTelegram className='hover:text-white'/>
                <BiLogoDiscord className='hover:text-white'/>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <p>Terms and Conditions</p>
                <p>Referral Terms</p>
                <p>Media Kit</p>
            </div>
        </div>
    );
};

export default Footer;