/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../utils/appStore";
import { useEffect } from "react";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiCount } from "../utils/dataSlice";

const getCountData=async(dispatch: Dispatch<UnknownAction>)=>{
  try {
    await axios.get("https://dataneuronapi.onrender.com/api/v1/rating/count").then((res: any) => dispatch(getApiCount(res.data)));
  } catch (error) {
   console.log("Error while fetching",error) 
  }
}

const useCount=()=>{
    const dispatch=useDispatch();
    const countData=useSelector((state:RootState)=>state.rating.getCount)
    useEffect(()=>{
      !countData && getCountData(dispatch)
    },[])
}
export default useCount;