import React from 'react'
import Image from 'next/image'
import logo from "@/assets/logo.png";

export default function Logo({color = 'white'}) {
  return (
    <div className={`px-[10px] cursor-pointer flex items-center text-3xl font-bold`}
    style={{color:color}}
    >
      <p>H</p>
      <Image src={logo} alt='logo' className="w-[40px] ml-[-8px]"/>
      <p className="ml-[-3px]">liday</p>
      </div>
  )
}
