import React from 'react'

const Section = () => {
    return (
        <div className='flex'>
            <div className="box1 flex flex-col w-[504px] h-[573px] bg-[rgb(135,198,247)] mt-[34px] ml-[34px]
      border-white rounded-[16px] gap-[23px]">
                <h1 className='text-4xl flex justify-start ml-[15px] mt-[17px] items-center'>MY BALANCE</h1>
                <button className='flex justify-around items-center w-[286px] h-[56px] bg-white
 ml-[12px] mt-[16px] border-white rounded-[14px]' >
                    <p>trd6@swissinvest.li</p>
                    <h1 className='text-[20px] leading-[24px]'><b>$94.38</b></h1>
                </button>
                <button
                    className='flex justify-around items-center w-[286px] h-[56px] bg-white
ml-[12px] mt-[16px] border-white rounded-[14px]' >
                    <p>Last Week Earn</p>
                    <h1 className='text-[20px] leading-[24px]'><b>$2.84</b></h1>
                </button>
                <button
                    className='flex justify-around items-center w-[286px] h-[56px] bg-white
ml-[12px] mt-[16px] border-white rounded-[14px]' >
                    <p>This Month Earn</p>
                    <h1 className='text-[20px] leading-[24px]'><b>$-0.49</b></h1>
                </button>
                <button
                    className='flex justify-around items-center w-[456px] h-[56px] bg-white
ml-[12px] mt-[16px] border-white rounded-[14px]' >
                    <p>Password:</p>
                    <h1 className='text-[20px] leading-[24px]'><b>K,1;0*!#xxHK~~16legentail</b></h1>
                </button>
                <button
                    className='flex justify-around items-center w-[399px] h-[56px] bg-white
ml-[12px] mt-[16px] border-white rounded-[14px]' >
                    <p>Binance Account No:</p>
                    <h1 className='text-[20px] leading-[24px]'><b>trd6@swissinvest.li</b></h1>
                </button>
            </div>
            <div className="box2 w-[504px] h-[573px] bg-[rgb(177,221,255)] mt-[34px] ml-[34px] flex flex-col gap-[15px] p-[12px]">
                <h1 className='font-semibold flex justify-center item-center mt-[17px] text-[24px]'>COINS</h1>
                <div className="item w-[486px] h-[120px] bg-[rgb(140,205,255)] rounded-[9px] ">
                    <div className="scale flex justify-around items-center">
                        <div className="logo flex justify-between items-center mt-[19px]" > 
                            <img src="bo2.svg"  className='mr-[18px] flex items-center'   alt="" />
                            <div className="p flex flex-col ml[12px]  ">
                                <h1 className='mb-[6px] font-semibold'>LITECOIN</h1>
                                <p className='font-medium'>$1,93,000</p>
                            </div>
                        </div>
                        <div className="written mt-[23px]">
                            <p className='mb-[6px] font-medium text-green-500'>$+762.67(15%)</p>
                            <p className='font-medium'>0.832 COIN</p>
                        </div>
                    </div>
                </div>
                <div className="item w-[486px] h-[120px]  bg-[rgb(140,205,255)] rounded-[9px] ">
                <div className="scale flex justify-around items-center">
                        <div className="logo flex justify-between items-center mt-[19px]" > 
                            <img src="item2.svg"  className='mr-[18px] flex items-center'   alt="" />
                            <div className="p flex flex-col ml[12px]  ">
                                <h1 className='mb-[6px] font-semibold'>DOGECOIN</h1>
                                <p className='font-medium'>$196,00</p>
                            </div>
                        </div>
                        <div className="written mt-[23px]">
                            <p className='mb-[6px] font-medium text-green-500'>$+762.67(15%)</p>
                            <p className='font-medium'>0.832 COIN</p>
                        </div>
                    </div>
                </div>
                <div className="item w-[486px] h-[120px]  bg-[rgb(140,205,255)] rounded-[9px] ">
                <div className="scale flex justify-around items-center">
                        <div className="logo flex justify-between items-center mt-[19px]"> 
                            <img src="item3.svg"  className='mr-[18px] flex items-center'   alt="" />
                            <div className="p flex flex-col ml[12px]  ">
                                <h1 className='mb-[6px] font-semibold'>LITECOIN</h1>
                                <p className='font-medium'>$1,93,000</p>
                            </div>
                        </div>
                        <div className="written mt-[23px]">
                            <p className='mb-[6px] font-medium text-green-500'>$+762.67(15%)</p>
                            <p className='font-medium'>0.832 COIN</p>
                        </div>
                    </div>
                </div>

                <div className="item w-[486px] h-[120px]  bg-[rgb(140,205,255)] rounded-[9px] ">
                <div className="scale flex justify-around items-center">
                        <div className="logo flex justify-between items-center mt-[19px]" > 
                            <img src="itm5.svg"  className='mr-[18px] flex items-center'   alt="" />
                            <div className="p flex flex-col ml[12px]  ">
                                <h1 className='mb-[6px] font-semibold'>BITCOIN</h1>
                                <p className='font-medium'>$1,93,000</p>
                            </div>
                        </div>
                        <div className="written mt-[23px]">
                            <p className='mb-[6px] font-medium text-green-500'>$+762.67(15%)</p>
                            <p className='font-medium'>0.832 COIN</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section
