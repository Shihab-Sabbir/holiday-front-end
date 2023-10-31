import React from "react";
import OfferTab from "./OfferTab";

export default function Offer() {
  return (
    <div className="w-full h-[521.4px] bg-white rounded-[8px] px-[40px] pb-[40px] pt-[25px] mt-[20px] shadow-lg">
      <div className="flex items-start">
        {/* <p className="text-[32px] font-bold">Offers</p> */}
        <div className="lg:w-[1160px]">
        <OfferTab />
        </div>
        {/* <p className="text-[16px] font-bold text-primary">VIEW ALL</p> */}
      </div>
    </div>
  );
}
