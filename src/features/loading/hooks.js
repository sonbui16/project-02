import { useSelector } from "react-redux";
import { loadingSelector } from "@/features/loading";
export const useLoading = () => {
  const loading = useSelector(loadingSelector);
  console.log("loading", loading);
  
  return loading;
};
