import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList as getProductList } from "@/services/product";
import { selectProductList } from "@/features/product";

export const useFetchProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
    
  }, [dispatch]);
};
//dispatch hkhông bị thay đổi

export const useProductList = () => {
  const products = useSelector(selectProductList);
  return products;
};
