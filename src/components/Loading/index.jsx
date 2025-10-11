import { useLoading } from "@/features/loading/hooks";



function Loading() {
    const loading = useLoading();
    console.log("sonbh421" , loading );
    
  return <div>{loading ? "Loading..." : "Content Loaded"}</div>;
}
export default Loading;
