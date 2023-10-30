import React from 'react';

const Tokens = () => {
    return (
        <div className='lg:w-[65%] w-11/12 mx-auto pb-20'>
            <h2 className='text-4xl lg:w-1/4 w-3/4 font-semibold mb-6'>Two tokens create our ecosystem</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
                <div className='border border-[#3E3E3E] bg-[#151515] cursor-pointer shadow p-5 rounded-lg'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10' src="zomi.png" alt="" />
                        <h4 className='text-[#C8C8C8] text-2xl'>$ZOMI</h4>
                    </div>
                    <p className='py-5 text-lg'>$ZOMI is the utility and governance token. Accrues 30% of the platform's generated fees.</p>
                    <p className='pb-5'>Ethereum APR: 0.00%</p>
                    <div className='flex gap-5'>
                        <button className='bg-[#3EB489] hover:bg-[#339672] px-4 py-1 rounded'>Buy</button>
                        <button className='border border-[#3E3E3E] hover:bg-[#2e2e2e] px-4 py-1 rounded'>Read more</button>
                    </div>
                </div>
                <div className='border border-[#3E3E3E] bg-[#151515] cursor-pointer shadow p-5 rounded-lg'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-10' src="zlp.png" alt="" />
                        <h4 className='text-[#C8C8C8] text-2xl'>$ZLP</h4>
                    </div>
                    <p className='py-5 text-lg'>$ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.</p>
                    <p className='pb-5'>Ethereum APR: 1,642,243,146.59%</p>
                    <div className='flex gap-5'>
                        <button className='bg-[#3EB489] hover:bg-[#339672] px-4 py-1s rounded'>Buy</button>
                        <button className='border border-[#3E3E3E] hover:bg-[#2e2e2e] px-4 py-1 rounded'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokens;