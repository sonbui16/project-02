import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const titles = {
  "/": "Trang chủ",
  "/about": "About",
  "/news": "Tin tức",
};

function DefaultLayout({titles} ) {
  let location = useLocation();
  console.log("location1", titles ,location);

  useEffect(() => {
    document.title = titles[location.pathname]  ?? "Hello World";
  }, [location]);
  return (
    <div className="">
      <Header />
      {/* <main className="">
        <Outlet />
      </main> */}
      <Footer />
    </div>
  );
}
export default DefaultLayout;
