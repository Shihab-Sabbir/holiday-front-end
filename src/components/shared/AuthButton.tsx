'use client'
import React from 'react'
import { SiAuthy } from "react-icons/si";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AuthModal from '../Auth/AuthModal';
import { useAppSelector } from '@/redux/hooks';
import { selectAuth } from '@/redux/features/auth/authSlice';
import { useSession } from 'next-auth/react';

export default function AuthButton() {
  const [open, setOpen] = React.useState(false);
  const { user, accessToken } = useAppSelector(selectAuth);
  return (
    <div className="lg:w-[230px] h-[42px]">
        <div className="cursor-pointer w-full bg-gradient-to-r from-blue-400 to-blue-700 h-[100%] text-white px-4 py-2 rounded-md flex items-center gap-3 justify-between"
        onClick={()=>setOpen(true)}
        >
         <div className="flex items-center gap-3">
         <SiAuthy className="text-lg" />
          <p className="text-[10px]">Login or Create Account</p>
         </div>
          <MdOutlineKeyboardArrowDown className="text-lg" />
        </div>
        <AuthModal open={open} setOpen={setOpen}/>
      </div>
  )
}
