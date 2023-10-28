import React from 'react';

const Stats = () => {
    return (
        <div className='w-[65%] mx-auto py-20'>
            <div className='flex gap-2 pb-3'>
                <h2 className='text-4xl font-semibold'>Stats</h2>
                <img src="icon.svg" alt="" />
            </div>
            <p>Ethereum Total Stats start from 06 Jan 2022.</p>
            <p>For detailed stats:</p>
            <div className='grid grid-cols-2 gap-5 mt-8'>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>Overview</p>
                    <div className='p-3'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>AUM</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>$ZLP Pool</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>24h Volume</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Long Positions</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#B8B8B8]'>Short Positions</p>
                            <p>$0</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-4 py-4'>Total Stats</p>
                    <div className='p-4'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Total Fees</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Total Volume</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#B8B8B8]'>Floor Price Fund</p>
                            <p>$628,571</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;