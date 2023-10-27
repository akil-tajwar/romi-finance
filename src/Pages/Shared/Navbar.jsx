import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

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
        <div className='fixed w-full z-10'>
            <div className='backdrop-blur-sm shadow lg:w-3/4 mx-auto rounded-lg'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        {/* <div className="dropdown lg:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] py-3 px-5 shadow menu menu-sm dropdown-content text-black bg-base-100 rounded-box w-52">
                                {menu}
                            </ul>
                        </div> */}
                        <div className="drawer lg:hidden block">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="btn drawer-button">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu w-52 min-h-full bg-base-200 text-base-content">
                                    {menu}
                                </ul>
                            </div>
                        </div>
                        <p className="text-2xl font-semibold">Romi.Finance</p>
                    </div>
                    <div className="hidden lg:block">{menu}</div>
                    <div>button</div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;