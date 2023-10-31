import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

interface IPayload {
  service: string;
  from: {
    name: string;
    iso_country: string;
    municipality: string;
  };
  to: {
    name: string;
    iso_country: string;
    municipality: string;
  };
  isRoundTrip: boolean;
  startDateFull: number;
  startDate: number;
  startYear: number;
  startDay: string;
  returnDateFull: number;
  returnMonth: string;
  startMonth: string;
  returnDate: number;
  returnYear: number;
  returnDay: string;
  persons: number;
  room: number;
  minPrice: number;
  maxPrice: number;
  time: number;
}

interface SearchState {
  service: string;
  searchData: Partial<IPayload>;
}

const initialState: SearchState = {
  service: "flight",
  searchData: {
    from: {
      name: "Hazrat Shahjalal International Airport",
      iso_country: "BD",
      municipality: "Dhaka",
    },
    to: {
      name: "Cox's Bazar Airport",
      iso_country: "BD",
      municipality: "Cox's Bazar",
    },
    startDateFull: Date.now(),
    isRoundTrip: true,
    startDate: new Date().getDate(),
    startYear: new Date().getFullYear() % 100,
    startDay: dayNames[new Date().getDay()],
    startMonth: new Date().toLocaleString("default", { month: "short" }),
    returnDateFull: Date.now() + 24 * 60 * 60 * 1000,
    returnDate: new Date().getDate(),
    returnYear: (new Date().getFullYear() + 1) % 100,
    returnDay: dayNames[new Date().getDay()],
    returnMonth: new Date().toLocaleString("default", { month: "short" }),
    persons: 1,
    room: 1,
    minPrice: 100,
    maxPrice: 200,
    time: 8,
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchData: (state, action: PayloadAction<Partial<IPayload>>) => {
      const { service, startDateFull, returnDateFull, ...rest } =
        action.payload;

      if (service !== undefined) {
        state.service = service;
      }

      if (service !== initialState.service) {
        state.searchData = { ...initialState.searchData };
      }

      if (startDateFull !== undefined) {
        const startDate = new Date(startDateFull);
        state.searchData.startDateFull = startDateFull;
        state.searchData.startDate = startDate.getDate();
        state.searchData.startYear = startDate.getFullYear() % 100;
        state.searchData.startMonth = startDate.toLocaleString("default", {
          month: "short",
        });
        state.searchData.startDay = dayNames[startDate.getDay()];

        const currentReturnDate = new Date(
          state.searchData.returnDateFull as number
        );
        if (startDateFull >= currentReturnDate.getTime()) {
          state.searchData.returnDateFull = startDateFull + 24 * 60 * 60 * 1000;
          const newReturnDate = new Date(state.searchData.returnDateFull);
          state.searchData.returnDate = newReturnDate.getDate();
          state.searchData.returnYear = newReturnDate.getFullYear() % 100;
          state.searchData.returnMonth = newReturnDate.toLocaleString(
            "default",
            { month: "short" }
          );
          state.searchData.returnDay = dayNames[newReturnDate.getDay()];
        }
      }

      if (returnDateFull !== undefined) {
        const returnDate = new Date(returnDateFull);
        state.searchData.returnDateFull = returnDateFull;
        state.searchData.returnDate = returnDate.getDate();
        state.searchData.returnYear = returnDate.getFullYear() % 100;
        state.searchData.returnMonth = returnDate.toLocaleString("default", {
          month: "short",
        });
        state.searchData.returnDay = dayNames[returnDate.getDay()];
      }

      if (Object.keys(rest).length > 0) {
        for (const key in rest) {
          if (key in state.searchData) {
            const fieldName = key as keyof SearchState["searchData"];
            const value = rest[fieldName] as string | number;
            state.searchData[fieldName] =
              value as SearchState["searchData"][typeof fieldName];
          }
        }
      }
    },
  },
});

export const { updateSearchData } = searchSlice.actions;
export default searchSlice.reducer;
