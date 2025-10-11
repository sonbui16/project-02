import { useLoading } from "@/features/loading/hooks";



function Loading() {
    const loading = useLoading();
  return <div>{loading ? "Loading..." : "Content Loaded"}</div>;
}
export default Loading;
