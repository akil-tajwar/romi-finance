import React from 'react';

const Vest = () => {
    return (
        <div className='lg:w-[65%] w-11/12 mx-auto mt-10 mb-20'>
            <h2 className='text-4xl font-semibold'>Earn</h2>
            <p className='mt-4 text-[#B8B8B8]'>Stake $ZOMI and $ZLP to earn rewards.</p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mt-5'>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>Total Rewards</p>
                    <div className='p-4'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Staked Tokens</p>
                            <p>...</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Reserved for Vesting</p>
                            <p>0.00 / ...</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Vesting Status</p>
                            <p>0.0000 / 0.0000</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Claimable</p>
                            <p>0.0000 $ZOMI</p>
                        </div>
                    </div>
                    <div className='border-t border-[#3E3E3E]'>
                        <button className='bg-[#3EB489] hover:bg-[#339672] my-3 mx-3 px-4 py-2 rounded'>Connect Wallet</button>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>$ZLP Vault</p>
                    <div className='p-4'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Staked Tokens</p>
                            <p>... $ZLP</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Reserved for Vesting</p>
                            <p>0.00 / ...</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Vesting Status</p>
                            <p>0.0000 / 0.0000</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Claimable</p>
                            <p>0.0000 $ZOMI</p>
                        </div>
                    </div>
                    <div className='border-t border-[#3E3E3E]'>
                        <button className='bg-[#3EB489] hover:bg-[#339672] my-3 mx-3 px-4 py-2 rounded'>Connect Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vest;