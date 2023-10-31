  import React from "react";
  import { BsChevronDown } from "react-icons/bs";
  
  export default function HotelTravelForm() {
    return (
       <div className="grid place-content-center h-full">
         <div className="w-full h-[112px] rounded-[8px] border ">
        <div className="flex items-center gap-[15px] ">
          <div className=" py-[10px] px-[19px] w-[320px]">
            <p className="text-[14px]">City, Property Name Or Location</p>
            <p className="text-[30px] font-bold">Goa</p>
            <p className="text-[14px]">India</p>
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" py-[10px] px-[19px] max-w-[260px]">
            <div className="text-[14px] flex items-center gap-3">
              <p>Check In</p>
              <BsChevronDown className="text-primary" />
            </div>
            <p className="text-[30px] font-bold">
              25 <span className="font-normal text-[20px]">Oct,23</span>
            </p>
            <p className="text-[14px]">Sunday</p>
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" py-[10px] px-[19px] max-w-[260px]">
            <div className="text-[14px] flex items-center gap-3">
              <p>Check Out</p>
              <BsChevronDown className="text-primary" />
            </div>
            <p className="text-[30px] font-bold">
              25 <span className="font-normal text-[20px]">Oct,23</span>
            </p>
            <p className="text-[14px]">Sunday</p>
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" py-[10px] px-[19px] max-w-[260px]">
            <div className="text-[14px] flex items-center gap-3">
              <p>Room & Guest</p>
              <BsChevronDown className="text-primary" />
            </div>
            <p className="text-[20px] font-bold leading-[65px]">
              1 <span className="font-normal text-[20px]">Room</span>
            {" "}22 <span className="font-normal text-[20px]">Persons</span>
            </p>
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" py-[10px] px-[19px] max-w-[260px]">
            <div className="text-[14px] flex items-center gap-3">
              <p>Price Range</p>
              <BsChevronDown className="text-primary" />
            </div>
            <p className="text-[14px] font-semibold leading-[65px]">$100-$200 Per Night</p>
          </div>
        </div>
      </div>
       </div>
    );
  }
  