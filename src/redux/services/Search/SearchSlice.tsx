import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  service: string;
  searchData: {
    from: string;
    to: string;
    startDate: number; // Change the type to number (timestamp)
    startDay: number;
    returnDate: number; // Change the type to number (timestamp)
    returnDay: number;
    persons: number;
    room: number;
    minPrice: number;
    maxPrice: number;
    time: number;
  };
}

const initialState: SearchState = {
  service: "flight",
  searchData: {
    from: "Dhaka",
    to: "Cox's Bazar",
    startDate: Date.now(),
    startDay: new Date().getDay(),
    returnDate: Date.now() + 24 * 60 * 60 * 1000,
    returnDay: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getDay(),
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
    updateSearchData: (state, action: PayloadAction<Partial<SearchState>>) => {
      const { service, searchData } = action.payload;

      if (service !== undefined) {
        state.service = service;
      }

      if (searchData !== undefined) {
        state.searchData = {
          ...state.searchData,
          ...searchData,
        };

        if (searchData.startDate !== undefined) {
          state.searchData.startDate = new Date(searchData.startDate).getTime();
        }

        if (searchData.returnDate !== undefined) {
          state.searchData.returnDate = new Date(searchData.returnDate).getTime();
        }
      }
    },
  },
});

export const { updateSearchData } = searchSlice.actions;
export default searchSlice.reducer;
