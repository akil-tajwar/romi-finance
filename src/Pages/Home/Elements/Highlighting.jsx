import React from 'react';

const Highlighting = () => {
    return (
        <div className='border-t border-[#C8C8C8]'>
            <div className='w-[65%] grid grid-cols-3 gap-20 mx-auto py-20'>
                <div>
                    <div className='flex gap-3 pb-3'>
                        <img src="water.svg" alt="" />
                        <h3 className='text-2xl'>Reduce Liquidation Risks</h3>
                    </div>
                    <p className='text-[#C8C8C8] text-lg'>An aggregate of high-quality price feeds determine when liquidations occur. This keeps positions safe from temporary wicks.</p>
                </div>
                <div>
                    <div className='flex gap-3 pb-3'>
                        <img src="money.svg" alt="" />
                        <h3 className='text-2xl'>Save on Costs</h3>
                    </div>
                    <p className='text-[#C8C8C8] text-lg'>Enter and exit positions with minimal spread and zero price impact. Get the optimal price without incurring additional costs.</p>
                </div>
                <div>
                    <div className='flex gap-3 pb-3'>
                        <img src="swap.svg" alt="" />
                        <h3 className='text-2xl'>Simple Swaps</h3>
                    </div>
                    <p className='text-[#C8C8C8] text-lg'>Open positions through a simple swap interface. Conveniently swap from any supported asset into the position of your choice.</p>
                </div>
            </div>
        </div>
    );
};

export default Highlighting;