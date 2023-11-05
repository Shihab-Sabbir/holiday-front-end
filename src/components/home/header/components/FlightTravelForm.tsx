import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateSearchData } from "@/redux/services/Search/SearchSlice";
import AutoCompleteLocation from "./AutoCompleteLocation";
import CustomPopOver from "@/components/shared/popOver/CustomPopOver";
import GetDate from "./GetDate";

export default function FlightTravelForm() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const { searchData } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();


  return (
    <div>
      <div>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="trip_option"
          value={searchData.isRoundTrip}
          onChange={(e) => {
            dispatch(
              updateSearchData({ isRoundTrip: e.target.value === "true" })
            );
          }}
        >
          <FormControlLabel
            value="false"
            control={<Radio size="small" />}
            label="One Way"
          />
          <FormControlLabel
            value="true"
            control={<Radio size="small" />}
            label="Round Trip"
          />
        </RadioGroup>

        <div className="w-full h-[112px] rounded-[8px] border ">
          <div className="flex items-center gap-[15px] !h-full">
            <div className="py-[10px] px-[19px] max-w-[260px]">
              <p className="text-[14px]">From</p>
              <AutoCompleteLocation location="from" />
            </div>
            <div className="h-[112px] border-r relative">
              <div className="absolute top-[40%] right-[-12px] text-2xl z-10 bg-white text-primary cursor-pointer">
                <MdOutlineSwapHorizontalCircle />
              </div>
            </div>
            <div className="py-[10px] px-[19px] max-w-[260px] max-h-full">
              <p className="text-[14px]">To</p>
              <AutoCompleteLocation location="to" />
            </div>
            <div className="h-[112px] border-r"> </div>
            <div className="h-full pb-[10px] px-[19px] w-fit">
            <GetDate dateType="start" label="Departure" />
            </div>
            <div className="h-[112px] border-r"> </div>
            <div className="h-full pb-[10px] px-[19px] w-fit">
            <GetDate dateType="return" label="Return" />
            </div>
            <div className="h-[112px] border-r"> </div>
            <div className="py-[10px] px-[19px] max-w-[260px]">
              <CustomPopOver
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                content=<div>
                <p className="pb-2">Add Passenger Number</p>
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
                    <p>Traverller & Class</p>
                    <BsChevronDown className="text-primary" />
                  </p>
                  <p className="text-[30px] font-bold flex items-center">
                    {searchData.persons + ' '}
                    <span className="font-normal text-[20px]"> Traveller</span>
                  </p>
                  <p className="text-[14px]">Economy</p>
                </div>
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-[70px] text-[12px]">
          <p className="w-[50px] font-semibold">Passenger Category</p>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              defaultChecked
              value="Regular Passerger"
              sx={{
                backgroundColor: "#EAF5FF",
                padding: "5px",
                width: "120px",
                ".MuiFormControlLabel-label": { fontSize: "12px" },
              }}
              control={<Radio defaultChecked size="small" />}
              label="Regular Passerger"
            />
            <FormControlLabel
              value="VIP Passenger"
              sx={{
                backgroundColor: "#eaf5ff",
                padding: "5px",
                width: "120px",
                ".MuiFormControlLabel-label": { fontSize: "12px" },
              }}
              control={<Radio size="small" />}
              label="VIP Passenger"
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
