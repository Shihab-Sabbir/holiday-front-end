"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import planeUnSelected from "@/assets/icons/flight_unselected.png";
import planeSelected from "@/assets/icons/flight_selected.png";
import hotelUnSelected from "@/assets/icons/hotel_unselected.png";
import hotelSelected from "@/assets/icons/hotel_selected.png";
import homestaysUnSelected from "@/assets/icons/villas_unselected.png";
import homestaysSelected from "@/assets/icons/villas_selected.png";
import holidayPackagesUnSelected from "@/assets/icons/holiday_packages_unselected.png";
import holidayPackagesSelected from "@/assets/icons/holiday_packages_selected.png";
import trainsUnSelected from "@/assets/icons/train_unselected.png";
import trainsSelected from "@/assets/icons/train_selected.png";
import busesUnSelected from "@/assets/icons/bus_unselected.png";
import busesSelected from "@/assets/icons/bus_selected.png";
import cabsUnSelected from "@/assets/icons/cab_unselected.png";
import cabsSelected from "@/assets/icons/cab_selected.png";
import Logo from "../shared/Logo";
import AuthButton from "../shared/AuthButton";
import NavCurrecyMenu from "./NavbarComponents/NavCurrecyMenu";

const navigationData = [
  {
    title: "Flights",
    iconUnselected: planeUnSelected,
    iconSelected: planeSelected,
    value: 1,
  },
  {
    title: "Hotels",
    iconUnselected: hotelUnSelected,
    iconSelected: hotelSelected,
    value: 7,
  },
  {
    title: "Homestays & Villas",
    iconUnselected: homestaysUnSelected,
    iconSelected: homestaysSelected,
    value: 2,
  },
  {
    title: "Holiday Packages",
    iconUnselected: holidayPackagesUnSelected,
    iconSelected: holidayPackagesSelected,
    value: 3,
  },
  {
    title: "Trains",
    iconUnselected: trainsUnSelected,
    iconSelected: trainsSelected,
    value: 4,
  },
  {
    title: "Buses",
    iconUnselected: busesUnSelected,
    iconSelected: busesSelected,
    value: 5,
  },
  {
    title: "Cabs",
    iconUnselected: cabsUnSelected,
    iconSelected: cabsSelected,
    value: 6,
  },
];

export default function DropNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [selected, setSelect] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`h-[100px]  duration-300 w-full shadow-lg bg-white  ${
        showNavbar ? "fixed top-0" : "hidden"
      }`}
    >
      <div className="flex justify-between w-[1200px] mx-auto items-center px-2">
        <Logo color={"var(--color-primary)"} />
        {navigationData?.map((item) => (
          <div
            key={item.value}
            className={`w-[52px] h-[93px] text-center flex flex-col items-center justify-start cursor-pointer py-[9px]`}
            onClick={() => setSelect(item.value)}
          >
            <div className="w-[42px] h-[42px]">
              <Image
                className="!h-[42px] !w-[42px]"
                src={
                  selected === item.value
                    ? item.iconSelected
                    : item.iconUnselected
                }
                alt={item.title}
              />
            </div>
            <p
              className={
                selected === item.value
                  ? "text-[12px] font-semibold text-primary"
                  : "text-[12px]"
              }
            >
              {item.title}
            </p>
          </div>
        ))}
        <div className="space-y-1">
          <AuthButton />
          <div className="bg-primary rounded-[4px] w-fit">
            <NavCurrecyMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
