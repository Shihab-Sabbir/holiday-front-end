import React from "react";
import { BsChevronDown } from "react-icons/bs";
import AutoCompleteHotel from "./AutoCompleteHotel";
import GetDate from "./GetDate";
import CustomPopOver from "@/components/shared/popOver/CustomPopOver";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateSearchData } from "@/redux/services/Search/SearchSlice";

export default function HotelTravelForm() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const { searchData } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div className="grid place-content-center h-full">
      <div className="w-full h-[112px] rounded-[8px] border ">
        <div className="flex items-center gap-[15px] ">
          <div className="py-[10px] px-[19px] max-w-[260px]">
            <p className="text-[14px]">City, Property Name Or Location</p>
            <AutoCompleteHotel location="from" service="hotel" />
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" pb-[10px] px-[19px] max-w-[260px] !h-[112px]">
            <GetDate dateType="start" label="Check In" />
          </div>

          <div className="h-[112px] border-r"> </div>
          <div className=" pb-[10px] px-[19px] max-w-[260px] !h-[112px]">
            <GetDate dateType="return" label="Check Out" />
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" py-[10px] px-[19px] max-w-[260px]">
          <CustomPopOver
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                content=<div>
                <p className="pb-2">Guest Number</p>
                  <input
                    type="number"
                    className="text-[30px] font-bold max-w-[250px] pr-1 border h-[50px] px-2"
                    value={searchData.persons}
                    onChange={(e) => {
                      let inputValue = Number(e.target.value);
                      let dispatchValue = inputValue % 10;

                      if (dispatchValue === 0) {
                        dispatchValue = 1;
                      } else if (dispatchValue > 9) {
                        dispatchValue = 9;
                      }

                      dispatch(updateSearchData({ persons: dispatchValue }));
                    }}
                  />
                    <p className="py-2">Select Travel Class</p>
                </div>
                buttonContent=<div className="w-[260px]">
                  <p className="text-[14px] flex items-center gap-3">
                    <p>Room & Guest</p>
                    <BsChevronDown className="text-primary" />
                  </p>
                  <p className="text-[20px] font-bold leading-[65px]">
              1 <span className="font-normal text-[20px]">Room</span> 22{" "}
              <span className="font-normal text-[20px]">Persons</span>
            </p>
                </div>
              />
          </div>
          <div className="h-[112px] border-r"> </div>
          <div className=" py-[10px] px-[19px] max-w-[260px]">
            <div className="text-[14px] flex items-center gap-3">
              <p>Price Range</p>
              <BsChevronDown className="text-primary" />
            </div>
            <p className="text-[14px] font-semibold leading-[65px]">
              $100-$200 Per Night
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
