'use client'

import React, { useEffect } from "react";
import FlightTravelForm from "./components/FlightTravelForm";
import HotelTravelForm from "./components/HotelTravelForm";
import HolidayTravelForm from "./components/HolidayTravelForm";
import { useAppSelector } from "@/redux/hooks";
import TransportationTravelForm from "./components/TransportationTravelForm";

export default function HeaderTravelInfo() {
  const {service} = useAppSelector((state) => state.search);
  const [renderedComponent, setRenderedComponent] = React.useState<JSX.Element | null>(null);

  useEffect(() => { 
    switch (service) {
      case "flight":
        setRenderedComponent(<FlightTravelForm />);
        break;
      case "hotel":
        setRenderedComponent(<HotelTravelForm />);
        break;
      case "homestay":
        setRenderedComponent(<HotelTravelForm />);
        break;
      case "holiday":
        setRenderedComponent(<HolidayTravelForm />);
        break;
      case "bus":
        setRenderedComponent(<TransportationTravelForm />);
        break;
      case "train":
        setRenderedComponent(<TransportationTravelForm />);
        break;
      case "cab":
        setRenderedComponent(<TransportationTravelForm />);
        break;
      default:
        setRenderedComponent(<FlightTravelForm />);
        break;
    }
  }, [service]);

  return (
    <div className="w-full h-[310px] bg-white rounded-[8px] pt-[60px] px-[20px]">
      {renderedComponent}
    </div>
  );
}
