import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCouter } from "@/features/counter";
export const useCounter = () => {
  const counter = useSelector(selectCouter);
  return counter;
};
