import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-x-5'>
      <div className="left mt-[23px] ml-[42px]">
        <img src="icon.svg" alt="" />
      </div>
      <div className="right w-[356px] h-[48px] bg-slate-100 border-gray-50 border-1  rounded-[36px] mt-[23px] justify-between items-center flex p-[22px]">
        <p>Search</p>
        <img src="Vector.svg" alt="" />
      </div>
    </div>
  )
}

export default Header
