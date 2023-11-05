import React, { useState, ChangeEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateSearchData } from "@/redux/services/Search/SearchSlice";
import getLocations from "../utils/getLocations";
import CustomPopOver from "@/components/shared/popOver/CustomPopOver";

interface ILocationData {
  iso_country: string;
  geonameid: string;
  municipality: string;
  name: string;
}

interface IProps {
  location: "from" | "to";
  service: string;
}

const AutoCompleteLocation = ({ location, service }: IProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<ILocationData[]>([]);
  const [allLocations, setAllLocations] = useState<ILocationData[]>([]);

  const { searchData } = useAppSelector((state) => state.search);
  console.log({allLocations})

  const fetchLocations = async () => {
    try {
      const LocationData: ILocationData[] = await getLocations();
      setAllLocations(LocationData);
      setSuggestions(LocationData.slice(0, 5)); 
    } catch (error) {
      console.error("Error fetching Location data:", error);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  const dispatch = useAppDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setInputValue(input);

    const filteredLocations = allLocations.filter(
      (Location) =>
        Location?.iso_country?.toLowerCase().includes(input.toLowerCase()) ||
        Location?.geonameid?.toLowerCase().includes(input.toLowerCase()) ||
        Location?.municipality?.toLowerCase().includes(input.toLowerCase()) ||
        Location?.name?.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filteredLocations.slice(0, 5)); 
  };

  const handleSuggestionSelected = (selectedLocation: ILocationData) => {
    dispatch(updateSearchData({ [location]: selectedLocation }));
    setAnchorEl(null)
  };

  const renderSuggestion = (suggestion: ILocationData) => (
    <div
      key={suggestion.name}
      className="py-1 px-2 cursor-pointer hover:bg-blue-50 w-[250px]"
      onClick={() => handleSuggestionSelected(suggestion)}
    >
       <p className="font-semibold">{suggestion.municipality},</p>
      <p>
        <span>{suggestion.name}, </span>
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
            {searchData[location]!?.iso_country!?.length > 25
              ? searchData[location]?.iso_country.slice(0, 25) + "..."
              : searchData[location]?.iso_country}
          </p>
        </div>
      />
    </div>
  );
};

export default AutoCompleteLocation;
