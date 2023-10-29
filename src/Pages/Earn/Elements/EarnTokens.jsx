import React from 'react';

const EarnTokens = () => {
    return (
        <div className='w-[65%] mx-auto mt-20 mb-10'>
            <h2 className='text-4xl font-semibold'>Earn</h2>
            <p className='mt-4 text-[#B8B8B8]'>Stake $ZOMI and $ZLP to earn rewards.</p>
            <div className='grid grid-cols-2 gap-4 mt-5'>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>$ZOMI</p>
                    <div className=''>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Price</p>
                                <p>$0.00</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Wallet</p>
                                <p>... $ZOMI ($...)</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Staked</p>
                                <p>... $ZOMI ($...)</p>
                            </div>
                        </div>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>APR</p>
                                <p>...%</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Rewards</p>
                                <p>$...</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Multiplier Points APR</p>
                                <p>100.00%</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Boost Percentage</p>
                                <p>...%</p>
                            </div>
                        </div>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Total Staked</p>
                                <p>0 $ZOMI ($...)</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Total Supply</p>
                                <p>10,000 $ZOMI ($10)</p>
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-[#3EB489] hover:bg-[#339672] my-3 mx-3 px-4 py-2 rounded'>Buy $ZOMI</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded relative'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>Total Rewards</p>
                    <div className='p-4'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>ETH (WETH)</p>
                            <p>... ($...)</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>$ZOMI</p>
                            <p>... ($...)</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Escrowed $ZOMI</p>
                            <p>... ($...)</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Multiplier Points</p>
                            <p>...</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Staked Multiplier Points</p>
                            <p>...</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-[#B8B8B8]'>Total</p>
                            <p>$...</p>
                        </div>
                    </div>
                    <div className='border-t border-[#3E3E3E] absolute bottom-0 w-full'>
                        <button className='bg-[#3EB489] hover:bg-[#339672] my-3 mx-3 px-4 py-2 rounded'>Connect Wallet</button>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>$ZOMI(Ethereum)</p>
                    <div className=''>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Price</p>
                                <p>$...</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Wallet</p>
                                <p>... $ZLP ($...)</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Staked</p>
                                <p>... $ZLP ($...)</p>
                            </div>
                        </div>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>APR</p>
                                <p>...%</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Rewards</p>
                                <p>$...</p>
                            </div>
                        </div>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Total Staked</p>
                                <p>... $ZLP ($...)</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Total Supply</p>
                                <p>10,000 $ZOMI ($10)</p>
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-[#3EB489] hover:bg-[#339672] my-3 mx-3 px-4 py-2 rounded'>Buy $ZOMI</button>
                            <button className='bg-[#3EB489] hover:bg-[#339672] my-3 px-4 py-2 rounded'>Sell $ZOMI</button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <p className='border-b border-[#3E3E3E] pl-3 py-3'>Escrowed $ZOMI</p>
                    <div className=''>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Price</p>
                                <p>$0.00</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Wallet</p>
                                <p>... es$ZOMI ($...)</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Staked</p>
                                <p>... es$ZOMI ($...)</p>
                            </div>
                        </div>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>APR</p>
                                <p>...%</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Multiplier Points APR</p>
                                <p>100.00%</p>
                            </div>
                        </div>
                        <div className='border-b border-[#3E3E3E] pt-3'>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Total Staked</p>
                                <p>... esZOMI ($...)</p>
                            </div>
                            <div className='flex justify-between pb-3 px-3'>
                                <p className='text-[#B8B8B8]'>Total Supply</p>
                                <p>10,1,023,379 esZOMI ($1,057)</p>
                            </div>
                        </div>
                        <div className=''>
                            <button className='bg-[#3EB489] hover:bg-[#339672] my-3 mx-3 px-4 py-2 rounded'>Connect Wallet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarnTokens;