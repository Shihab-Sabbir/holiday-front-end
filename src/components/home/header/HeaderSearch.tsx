import React from 'react'
import {BiChevronsDown} from 'react-icons/bi'

export default function HeaderSearch() {
  return (
    <div className='w-fit h-[64px] mt-[230px] mx-auto text-white text-center flex flex-col items-center'>
      <p className='w-[196px] h-[44px] bg-gradient-to-r from-blue-400 to-blue-700 p-[10px] rounded-3xl font-semibold cursor-pointer'>SEARCH</p>
      <div className='py-[10px] flex items-center gap-[20px]'>
        <BiChevronsDown/>
        <p className='text-[13px] '>Explore More</p>
        <BiChevronsDown/>
      </div>
    </div>
  )
}
