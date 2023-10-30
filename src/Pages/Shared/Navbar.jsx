import React from 'react';
import { Link } from 'react-router-dom';
import { LuWallet2 } from 'react-icons/lu';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import ActiveLink from './ActiveLink';

const Navbar = () => {
    const menu = (
        // I have ONLY WORKED ON HOME, DASHBOARD AND EARN PAGE. SO THE OTHER PAGES WON'T WORK.
        <ul className='flex lg:flex-row text-[#99999B] flex-col gap-8'>
            <ActiveLink to='/'><li>Home</li></ActiveLink>
            <ActiveLink to='/dashboard'><li>Dashboard</li></ActiveLink>
            <ActiveLink to='/nft'><li>NFT</li></ActiveLink>
            <ActiveLink to='/earn'><li>Earn</li></ActiveLink>
            <ActiveLink to='/buy'><li>Buy</li></ActiveLink>
            <ActiveLink to='/referrals'><li>Referrals</li></ActiveLink>
            <ActiveLink to='/ecosystem'><li>Ecosystem</li></ActiveLink>
            <ActiveLink to='/about'><li>About</li></ActiveLink>
            <ActiveLink to='/setting'><li className='lg:hidden block'>Setting</li></ActiveLink>
        </ul>
    )
    return (
        <div className='w-full'>
            <div className='bg-[#191919] shadow py-3 lg:py-0'>
                <div className='lg:w-[96%] w-11/12 mx-auto'>
                    <div className='flex gap-6 justify-between items-center overflow-x-hidden'>
                        <div className='flex items-center'>
                            <div className='flex justify-center items-center'>
                                <div className="drawer lg:hidden block">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        <label htmlFor="my-drawer" className="drawer-button">
                                            <GiHamburgerMenu />
                                        </label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                        <ul className="menu w-64 min-h-full backdrop-blur-lg shadow">
                                            <div className='flex items-center pb-8'>
                                                <img className='lg:w-14 w-8' src="New Logo.png" alt="" />
                                                <p className="lg:text-2xl text-sm font-semibold">Romi.Finance</p>
                                            </div>
                                            <div className='pl-2'>
                                                {menu}
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <img className='lg:w-14 w-8' src="New Logo.png" alt="" />
                                <p className="lg:text-2xl text-sm font-semibold">Romi.Finance</p>
                            </div>
                        </div>
                        <div className="hidden lg:block">{menu}</div>
                        <div className='flex gap-4'>
                            <button className='bg-[#3EB489] hover:bg-[#339672] px-4 py-1 rounded break-all'>Trade</button>
                            <div className='border border-[#3E3E3E] cursor-pointer hover:bg-[#2e2e2e] flex gap-2 items-center px-4 py-1 rounded'>
                                <LuWallet2 />
                                <p className='hidden lg:block'>Connect Wallet</p>
                                <p className='lg:hidden block break-all'>Connect</p>
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