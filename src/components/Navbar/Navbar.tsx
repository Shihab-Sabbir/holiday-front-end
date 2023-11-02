"use client";
import React from "react";
import superOfferIcon from "@/assets/icons/super_offer.png";
import myBizIcon from "@/assets/icons/my_bizz.png";
import myTripIcon from "@/assets/icons/my_trip.png";
import Image from "next/image";
import NavCurrecyMenu from "./NavbarComponents/NavCurrecyMenu";
import Logo from "../shared/Logo";
import AuthButton from "../shared/AuthButton";
import { useAppSelector } from "@/redux/hooks";
import { selectAuth } from "@/redux/features/auth/authSlice";
import ProfileDropDown from "./NavbarComponents/ProfileDropDown";

export default function Navbar() {
  const {accessToken} = useAppSelector(selectAuth);
  const navigationData = [
    {
      title: "Super Offers",
      sub_title: "Explore great deals & offers",
      icon: superOfferIcon,
      link: "",
    },
    {
      title: "Introducing myBiz",
      sub_title: "Business Travel Solution",
      icon: myBizIcon,
      link: "",
    },
    {
      title: "My Trips",
      sub_title: "Manage your bookings",
      icon: myTripIcon,
      link: "",
    },
  ];
  return (
    <div className="w-full h-[47px] mb-[90px] text-white flex items-center justify-between">
      <Logo />
      {navigationData?.map((item, idx) => (
        <div key={idx} className="flex items-center gap-[10px] cursor-pointer">
          <Image src={item.icon} alt={item.title} />
          <div>
            <p className="text-[12px] font-semibold">{item.title}</p>
            <p className="text-[10px]">{item.sub_title}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center">
        {
          accessToken &&
          <ProfileDropDown />
        }
        {
          !accessToken &&
          <AuthButton />
        }
        <div className="lg:w-[126px] h-[42px] grid place-content-center bg-white/10">
          <NavCurrecyMenu />
        </div>
      </div>
    </div>
  );
}
