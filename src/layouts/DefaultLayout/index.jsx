import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "./components/Footer";
import Navigation from "../components/Navigation";

function DefaultLayout() {
  return (
    <div className="">
      <Header />
      {/* <Navigation /> */}
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default DefaultLayout;
