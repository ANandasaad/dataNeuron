/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface Rating {
  id: string;
  review: string;
  rating: string;
}

const initialState: {
  getRating: null;
  getCount:null;
  addRating: Rating[];
  updateRating: Rating[];
} = {
  getRating: null,
  addRating: [],
  updateRating: [],
  getCount:null
};

export const ratingData = createSlice({
  name: "rating",
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<any>) => {
      state.getRating = action.payload;
    },
    addData: (state, action: PayloadAction<Rating>) => {
      state.addRating.push(action.payload);
    },
    getApiCount:(state, action: PayloadAction<any>)=>{
      state.getCount=action.payload

    }
  },
});

export const { addData, fetchData,getApiCount } = ratingData.actions;
export default ratingData.reducer;
