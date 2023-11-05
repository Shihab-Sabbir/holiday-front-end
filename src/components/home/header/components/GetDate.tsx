import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  IPayload,
  updateSearchData,
} from "@/redux/services/Search/SearchSlice";
import React, { useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function GetDate({
  dateType,
  label,
}: {
  dateType: "start" | "return";
  label: string;
}) {
  let dateFull: keyof IPayload = "startDateFull";
  let date: keyof IPayload = "startDate";
  let year: keyof IPayload = "startYear";
  let day: keyof IPayload = "startDay";
  let month: keyof IPayload = "startMonth";

  if (dateType === "return") {
    dateFull = "returnDateFull";
    date = "returnDate";
    year = "returnYear";
    day = "returnDay";
    month = "returnMonth";
  } else {
    dateFull = "startDateFull";
    date = "startDate";
    year = "startYear";
    day = "startDay";
    month = "startMonth";
  }

  const { searchData } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const dateInput = useRef<HTMLInputElement>(null);

  const handleDateInput = () => {
    if (dateInput.current) {
      dateInput.current.showPicker();
    }
  };

  return (
    <div className="h-full py-[10px] min-w-full ">
      <p className="text-[14px] flex items-center gap-3">
        <label
          onClick={() => handleDateInput()}
          htmlFor="date-input"
          style={{ cursor: "pointer" }}
        >
          <div className="text-[14px] flex items-center gap-3">
            <p>{label}</p>
            <BsChevronDown className="text-primary" />
          </div>
          <p className="text-[30px] font-bold">
            {searchData[date]}{" "}
            <span className="font-normal text-[20px]">
              {searchData.startMonth}, {searchData[year]}
            </span>
          </p>
          <p className="text-[14px]">{searchData[day]}</p>
        </label>
      </p>
      <input
        type="date"
        id="date-input"
        value={searchData[dateFull]}
        ref={dateInput}
        className="h-0 w-0"
        onChange={(e) => {
          const date = e.target.value;
          dispatch(
            updateSearchData(
              dateType === "return"
                ? { returnDateFull: new Date(date).getTime() }
                : { startDateFull: new Date(date).getTime() }
            )
          );
        }}
        min={new Date().toISOString().split("T")[0]}
      />
    </div>
  );
}
