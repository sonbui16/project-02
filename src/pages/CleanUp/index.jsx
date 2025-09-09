import { useState, useEffect } from "react";

function CleanUp() {
  const [couter, setCouter] = useState(0);

  useEffect(() => {
    console.log("bày ra ");
    //Clean up
    // - Được gọi trong 2 trường hợp
    // 1. Khi component re-render, nếu có bất kỳ desp thay đổi. Được gọi trước khi gọi callback được gọi lại
    // 2. Ngay trước khi component unmount
    return () =>{
      console.log("dọn dẹp");
      
    } //Hàm clean up 
    
  }, [couter]);

  return <button onClick={() => setCouter(couter + 1)}>Couter is {couter}</button>;
}

export default CleanUp;
