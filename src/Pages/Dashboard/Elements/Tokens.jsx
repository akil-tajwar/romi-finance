import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

const Tokens = () => {
    const data1 = [
        { name: 'Group A', value: 50 },
        { name: 'Group B', value: 450 }
    ];
    const data2 = [
        { name: 'Group A', value: 250 },
        { name: 'Group B', value: 250 }
    ];
    const COLORS = ['#5C0AF5', '#0598FA'];
    return (
        <div className='w-[65%] mx-auto pt-10 pb-16'>
            <div className='flex gap-2 pb-3'>
                <h2 className='text-4xl font-semibold'>Tokens</h2>
                <img src="icon.svg" alt="" />
            </div>
            <p className='text-[#B8B8B8]'>Platform and $ZLP index tokens.</p>
            <div className='grid grid-cols-2 gap-4 mt-8'>
                <div className='bg-[#151515] border grid grid-cols-3 gap-4 border-[#3E3E3E] rounded'>
                    <div className='col-span-2'>
                        <div className='flex gap-2 items-center border-b border-[#3E3E3E] pl-3 py-3'>
                            <img className='w-10' src="zomi.png" alt="" />
                            <div>
                                <h4 className='text-lg'>$ZOMI</h4>
                                <p className='text-[#C8C8C8] text-xs'>$ZOMI</p>
                            </div>
                            <details className="dropdown">
                                <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                                <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </div>
                        <div className='p-3'>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Price</p>
                                <p>$0.00</p>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Supply</p>
                                <p>10,000 $ZOMI</p>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Total Staked</p>
                                <p>$0</p>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Market Cap</p>
                                <p>$10</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data1}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    innerRadius={70} outerRadius={77}
                                    fill="black"
                                    dataKey="value"
                                    stroke="none"
                                    startAngle={-270}
                                    endAngle={90} // Rotate the PieChart by -90 degrees
                                >
                                    {data1.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    <Label
                                        value="Distribution"
                                        position="center"
                                        fill="white" // Set the text color
                                        fontSize={17} // Set the font size
                                    />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className='bg-[#151515] grid grid-cols-3 gap-4 border border-[#3E3E3E] rounded'>
                    <div className='col-span-2'>
                        <div className='flex gap-2 items-center border-b border-[#3E3E3E] pl-3 py-3'>
                            <img className='w-10' src="zlp.png" alt="" />
                            <div>
                                <h4 className='text-lg'>$ZLP</h4>
                                <p className='text-[#C8C8C8] text-xs'>$ZLP</p>
                            </div>
                            <details className="dropdown">
                                <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                                <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                            </details>
                        </div>
                        <div className='p-3'>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Price</p>
                                <p>$1.138</p>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Supply</p>
                                <p>29 $ZLP</p>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Total Staked</p>
                                <p>$34</p>
                            </div>
                            <div className='flex justify-between pb-2'>
                                <p className='text-[#B8B8B8]'>Market Cap</p>
                                <p>$34</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='text-[#B8B8B8]'>Stablecoin Percentage</p>
                                <p>49.50%</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data2}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    innerRadius={70} outerRadius={77}
                                    fill="black"
                                    dataKey="value"
                                    stroke="none"
                                    startAngle={-270}
                                    endAngle={90}
                                >
                                    {data2.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                    <Label
                                        value="$ZLP Pool"
                                        position="center"
                                        fill="white" // Set the text color
                                        fontSize={17} // Set the font size
                                    />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className='bg-[#151515] border border-[#3E3E3E] rounded mt-4 hidden lg:block'>
                <div className='border-b border-[#3E3E3E] pl-3 py-3 flex gap-2'>
                    <p>$ZLP Index Composition</p>
                    <img src="icon.svg" alt="" />
                </div>
                <div className='p-3'>
                    <table className="w-full text-left">
                        {/* head */}
                        <thead>
                            <tr>
                                <td className='text-[#B8B8B8]'>TOKEN</td>
                                <td className='text-[#B8B8B8]'>PRICE</td>
                                <td className='text-[#B8B8B8]'>POOL</td>
                                <td className='text-[#B8B8B8]'>WEIGHT</td>
                                <td className='text-right text-[#B8B8B8]'>UTILIZATION</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td>
                                    <div className='flex gap-2 items-center py-2'>
                                        <img className='w-10' src="Ethereum.svg" alt="" />
                                        <div>
                                            <h4 className='text-lg'>Ethereum</h4>
                                            <p className='text-[#C8C8C8] text-xs'>ETH</p>
                                        </div>
                                        <details className="dropdown">
                                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                                <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                                    <a className='flex gap-2'>
                                                        <img src="coingecko.svg" alt="" />
                                                        <p>Open in Coingecko</p>
                                                    </a>
                                                </li>
                                                <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                                    <a className='flex gap-2'>
                                                        <img className='w-4' src="icon.svg" alt="" />
                                                        <p>Open in Explorer</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </details>
                                    </div>
                                </td>
                                <td>$1,778.71</td>
                                <td>$19</td>
                                <td>50.49% / 25.00%</td>
                                <td className='text-right'>0.00%</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td>
                                    <div className='flex gap-2 items-center py-2'>
                                        <img className='w-10' src="bitcoin.svg" alt="" />
                                        <div>
                                            <h4 className='text-lg'>Wrapped Bitcoin</h4>
                                            <p className='text-[#C8C8C8] text-xs'>WBTC</p>
                                        </div>
                                        <details className="dropdown">
                                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                                        </details>
                                    </div>
                                </td>
                                <td>$34,132.52</td>
                                <td>$0</td>
                                <td>0.00% / 25.00%</td>
                                <td className='text-right'>0.00%</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td>
                                    <div className='flex gap-2 items-center py-2'>
                                        <img className='w-10' src="apecoin.svg" alt="" />
                                        <div>
                                            <h4 className='text-lg'>ApeCoin</h4>
                                            <p className='text-[#C8C8C8] text-xs'>APE</p>
                                        </div>
                                        <details className="dropdown">
                                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                                        </details>
                                    </div>
                                </td>
                                <td>$1.37</td>
                                <td>$0</td>
                                <td>0.00% / 25.00%</td>
                                <td className='text-right'>0.00%</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='flex gap-2 items-center py-2'>
                                        <img className='w-10' src="usd.svg" alt="" />
                                        <div>
                                            <h4 className='text-lg'>USD Coin</h4>
                                            <p className='text-[#C8C8C8] text-xs'>USDC</p>
                                        </div>
                                        <details className="dropdown">
                                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                                        </details>
                                    </div>
                                </td>
                                <td>$1.00</td>
                                <td>$14</td>
                                <td>49.50% / 25.00%</td>
                                <td className='text-right'>0.00%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mt-4 lg:hidden'>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <div className='flex gap-2 items-center border-b border-[#3E3E3E] pl-3 py-3'>
                        <img className='w-10' src="Ethereum.svg" alt="" />
                        <h4 className='text-lg'>ETH</h4>
                        <details className="dropdown">
                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                        </details>
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>PRICE</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>POOL</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>WEIGHT</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Utilization</p>
                            <p>0.00%</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <div className='flex gap-2 items-center border-b border-[#3E3E3E] pl-3 py-3'>
                        <img className='w-10' src="bitcoin.svg" alt="" />
                        <h4 className='text-lg'>WBTC</h4>
                        <details className="dropdown">
                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                        </details>
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>PRICE</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>POOL</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>WEIGHT</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Utilization</p>
                            <p>0.00%</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <div className='flex gap-2 items-center border-b border-[#3E3E3E] pl-3 py-3'>
                        <img className='w-10' src="apecoin.svg" alt="" />
                        <h4 className='text-lg'>APE</h4>
                        <details className="dropdown">
                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                        </details>
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>PRICE</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>POOL</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>WEIGHT</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Utilization</p>
                            <p>0.00%</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#151515] border border-[#3E3E3E] rounded'>
                    <div className='flex gap-2 items-center border-b border-[#3E3E3E] pl-3 py-3'>
                        <img className='w-10' src="usd.svg" alt="" />
                        <h4 className='text-lg'>USDC</h4>
                        <details className="dropdown">
                            <summary className="m-1 cursor-pointer text-[#99999B] hover:text-white"></summary>
                            <ul className="dropdown-content z-[1] bg-[#191919] border border-[#3E3E3E] rounded w-52">
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img src="coingecko.svg" alt="" />
                                            <p>Open in Coingecko</p>
                                        </a>
                                    </li>
                                    <li className='hover:bg-[#2e2e2e] p-2 cursor-pointer'>
                                        <a className='flex gap-2'>
                                            <img className='w-4' src="icon.svg" alt="" />
                                            <p>Open in Explorer</p>
                                        </a>
                                    </li>
                                </ul>
                        </details>
                    </div>
                    <div className='p-3'>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>PRICE</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>POOL</p>
                            <p>$34</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>WEIGHT</p>
                            <p>$0</p>
                        </div>
                        <div className='flex justify-between pb-2'>
                            <p className='text-[#B8B8B8]'>Utilization</p>
                            <p>0.00%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokens;