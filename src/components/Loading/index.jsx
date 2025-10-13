import { useLoading } from "@/features/loading/hooks";

function Loading() {
  const loading = useLoading();
  if (!loading) return null;
  return <div>Loading...</div>;
}
export default Loading;
