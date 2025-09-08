import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";

function PageLayout() {
  return (
    <div className="">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default PageLayout;
