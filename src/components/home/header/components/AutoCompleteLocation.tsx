import React, { useState, ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateSearchData } from "@/redux/services/Search/SearchSlice";
import getAirports from "../utils/getAirports";
import CustomPopOver from "@/components/shared/popOver/CustomPopOver";

interface AirportData {
  iso_country: string;
  iso_region: string;
  local_code: string;
  municipality: string;
  name: string;
}

interface ILocation {
  location: "from" | "to";
}

const AutoCompleteLocation = ({ location }: ILocation) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<AirportData[]>([]);
  const [allAirports, setAllAirports] = useState<AirportData[]>([]);
  const { searchData } = useAppSelector((state) => state.search);

  const fetchAirports = async () => {
    try {
      const airportData: AirportData[] = await getAirports();
      setAllAirports(airportData);
      setSuggestions(airportData.slice(0, 5)); // Initially load the first 10 data as options
    } catch (error) {
      console.error("Error fetching airport data:", error);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);

    // Filter and set suggestions based on multiple fields
    const filteredAirports = allAirports.filter(
      (airport) =>
        airport?.iso_country?.toLowerCase().includes(input.toLowerCase()) ||
        airport?.iso_region?.toLowerCase().includes(input.toLowerCase()) ||
        airport?.local_code?.toLowerCase().includes(input.toLowerCase()) ||
        airport?.municipality?.toLowerCase().includes(input.toLowerCase()) ||
        airport?.name?.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filteredAirports.slice(0, 5)); // Show the most matching 10 data
  };

  const handleSuggestionSelected = (selectedAirport: AirportData) => {
    dispatch(updateSearchData({ [location]: selectedAirport }));
    setAnchorEl(null)
  };

  const renderSuggestion = (suggestion: AirportData) => (
    <div
      key={suggestion.name}
      className="py-1 px-2 cursor-pointer hover:bg-blue-50 w-[250px]"
      onClick={() => handleSuggestionSelected(suggestion)}
    >
      <p className="font-semibold">{suggestion.name},</p>
      <p>
        <span>{suggestion.municipality}, </span>
        <span className="text-primary">{suggestion.iso_country}</span>
      </p>
    </div>
  );

  return (
    <div>
      <CustomPopOver
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        content=<div>
          <input
            type="text"
            placeholder="Search for a location"
            value={inputValue}
            onChange={handleInputChange}
            className="border px-2 h-[50px] w-[250px] mb-3"
          />
          <div className="border w-[250px]">
            {suggestions.map((suggestion) => renderSuggestion(suggestion))}
          </div>
        </div>
        buttonContent=<div className="w-[260px]">
          <p className="text-[30px] font-bold">
            {searchData[location]?.municipality}
          </p>
          <p className="text-[14px]">
            {searchData.from?.iso_country},{" "}
            {searchData[location]!?.name!?.length > 25
              ? searchData[location]?.name.slice(0, 25) + "..."
              : searchData[location]?.name}
          </p>
        </div>
      />
    </div>
  );
};

export default AutoCompleteLocation;
