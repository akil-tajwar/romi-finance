import React from 'react';

const Banner = () => {
    return (
        <div className='w-[65%] mx-auto py-20'>
            <div className='pb-20'>
                <h1 className='text-6xl w-[50%] pb-5 font-semibold'>Decentralized Perpetual Exchange</h1>
                <p className='text-[#C8C8C8] w-[30%] text-xl'>Trade BTC, ETH, AVAX and other top cryptocurrencies with up to 30x leverage directly from your wallet</p>
                <button className='bg-[#3EB489] hover:bg-[#339672] mt-5 px-4 py-2 rounded'>Launch Exchange</button>
            </div>
            <div className='grid grid-cols-3 gap-8'>
                <div className='border border-[#3E3E3E] cursor-pointer shadow flex gap-8 items-center px-4 p-8 rounded'>
                    <img src="trading volume.svg" alt="" />
                    <div>
                        <p className='text-[#C8C8C8]'>Total Trading Volume</p>
                        <p className='text-3xl'>$0</p>
                    </div>
                </div>
                <div className='border border-[#3E3E3E] cursor-pointer shadow flex gap-8 items-center px-4 p-8 rounded'>
                    <img src="interest.svg" alt="" />
                    <div>
                        <p className='text-[#C8C8C8]'>Open Interest</p>
                        <p className='text-3xl'>$0</p>
                    </div>
                </div>
                <div className='border border-[#3E3E3E] cursor-pointer shadow flex gap-8 items-center px-4 p-8 rounded'>
                    <img src="total users.svg" alt="" />
                    <div>
                        <p className='text-[#C8C8C8]'>Total Users</p>
                        <p className='text-3xl'>0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;