/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import axios from "axios";
import { fetchData } from "../utils/dataSlice";

const getRatingData = async (dispatch: Dispatch<UnknownAction>) => {
  try {
    await axios
      .get("https://dataneuronapi.onrender.com/api/v1/rating/get-all")
      .then((res: any) => dispatch(fetchData(res.data)));
  } catch (error) {
    console.log("Error fetching now playing movies:", error);
  }
};

const useRating = () => {
  const dispatch = useDispatch();

  const ratingsData = useSelector((state: RootState) => state.rating.getRating);
  useEffect(() => {
    !ratingsData && getRatingData(dispatch);
  }, []);
};
export default useRating;
