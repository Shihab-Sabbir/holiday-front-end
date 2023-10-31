import {
    FormControlLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import React from "react";
  import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
  import { BsChevronDown } from "react-icons/bs";
  
  export default function TransportationTravelForm() {
    return (
      <div>
        <div>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              defaultChecked
              value="One Way"
              control={<Radio defaultChecked size="small" />}
              label="One Way"
            />
            <FormControlLabel
              value="Round Trip"
              control={<Radio size="small" />}
              label="Round Trip"
            />
          </RadioGroup>
          <div className="w-full h-[112px] rounded-[8px] border ">
            <div className="flex items-center gap-[15px] ">
              <div className=" py-[10px] px-[19px] w-[200px]">
                <p className="text-[14px]">From</p>
                <p className="text-[30px] font-bold">Delhi</p>
                <p className="text-[14px]">India</p>
              </div>
              <div className="h-[112px] border-r relative">
                <div className="absolute top-[40%] right-[-12px] text-2xl z-10 bg-white text-primary cursor-pointer">
                  <MdOutlineSwapHorizontalCircle />
                </div>
              </div>
              <div className=" py-[10px] px-[19px] w-[200px]">
                <p className="text-[14px]">To</p>
                <p className="text-[30px] font-bold">Mumbai</p>
                <p className="text-[14px]">India</p>
              </div>
              <div className="h-[112px] border-r"> </div>
              <div className=" py-[10px] px-[19px] max-w-[260px]">
                <div className="text-[14px] flex items-center gap-3">
                  <p>Departure</p>
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
                  <p>Return</p>
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
                  <p>Traverller & Class</p>
                  <BsChevronDown className="text-primary" />
                </div>
                <p className="text-[30px] font-bold">
                  1 <span className="font-normal text-[20px]">Traveller</span>
                </p>
                <p className="text-[14px]">Economy</p>
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
  