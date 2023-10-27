import React from 'react';
import { Link } from 'react-router-dom';
import { LuWallet2 } from 'react-icons/lu';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const menu = (
        <ul className='flex lg:flex-row flex-col lg:gap-8 gap-3'>
            <Link to='/'><li>Home</li></Link>
            <Link><li>Dashboard</li></Link>
            <Link><li>NFT</li></Link>
            <Link><li>Earn</li></Link>
            <Link><li>Buy</li></Link>
            <Link><li>Referrals</li></Link>
            <Link><li>Ecosystem</li></Link>
            <Link><li>About</li></Link>
        </ul>
    )
    return (
        <div className='w-full z-10'>
            <div className='bg-[#191919] shadow py-3 lg:py-0'>
                <div className='w-[97%] mx-auto'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <div className='flex justify-center items-center'>
                                <div className="drawer lg:hidden block">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer" className="drawer-button">
                                            <GiHamburgerMenu/>
                                        </label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu w-64 min-h-full bg-base-200 text-base-content">
                                            {menu}
                                        </ul>
                                    </div>
                                </div>
                                <img className='lg:w-14 w-8' src="New Logo.png" alt="" />
                                <p className="lg:text-2xl text-sm font-semibold">Romi.Finance</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">{menu}</div>
                        <div className='flex gap-4'>
                            <button className='bg-[#3EB489] hover:bg-[#339672] px-4 py-1 rounded'>Trade</button>
                            <div className='border border-[#3E3E3E] cursor-pointer hover:bg-[#2e2e2e] flex gap-2 items-center px-4 py-1 rounded'>
                                <LuWallet2 />
                                <p className='hidden lg:block'>Connect Wallet</p>
                                <p className='lg:hidden block'>Connect</p>
                            </div>
                            <div className='border border-[#3E3E3E] cursor-pointer hover:bg-[#2e2e2e] flex gap-2 items-center px-2 py-1 rounded'>
                                <img className='border-r border-[#3E3E3E] pr-3 w-8' src="Ethereum.svg" alt="" />
                                <BsThreeDotsVertical />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;