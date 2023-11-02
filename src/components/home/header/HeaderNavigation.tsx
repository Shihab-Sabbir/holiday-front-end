"use client";

import React, { useState } from "react";
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
import { useAppDispatch } from "@/redux/hooks";
import { updateSearchData } from "@/redux/features/Search/SearchSlice";

const navigationData = [
  {
    title: "Flights",
    iconUnselected: planeUnSelected,
    iconSelected: planeSelected,
    value: "flight",
  },
  {
    title: "Hotels",
    iconUnselected: hotelUnSelected,
    iconSelected: hotelSelected,
    value: "hotel",
  },
  {
    title: "Homestays & Villas",
    iconUnselected: homestaysUnSelected,
    iconSelected: homestaysSelected,
    value: "homestay",
  },
  {
    title: "Holiday Packages",
    iconUnselected: holidayPackagesUnSelected,
    iconSelected: holidayPackagesSelected,
    value: "holiday",
  },
  {
    title: "Trains",
    iconUnselected: trainsUnSelected,
    iconSelected: trainsSelected,
    value: "train",
  },
  {
    title: "Buses",
    iconUnselected: busesUnSelected,
    iconSelected: busesSelected,
    value: "bus",
  },
  {
    title: "Cabs",
    iconUnselected: cabsUnSelected,
    iconSelected: cabsSelected,
    value: "cab",
  },
];

export default function HeaderNavigation() {
  const [selected, setSelect] = useState("flight");
  const dispatch = useAppDispatch();

  return (
    <div className="lg:w-[923.7px] h-[100px] bg-white rounded-[8px] shadow-lg mx-auto -mt-[360px] py-2 px-[30px]">
      <div className="flex justify-between">
        {navigationData?.map((item) => (
          <div
            key={item.value}
            onClick={() => {
              setSelect(item.value);
              dispatch(updateSearchData({ service: item.value }))
            }}
            className={`w-[72px] h-[93px] pb-3 text-center flex flex-col items-center justify-start cursor-pointer ${
              selected === item.value
                ? " border-b-4 border-primary"
                : " border-none"
            }`}
          >
            <div className="w-[50px] h-[45px]">
              <Image
                className="!h-[42px] !w-[50px]"
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
                  ? "text-[14px] font-semibold text-primary"
                  : "text-[14px]"
              }
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
