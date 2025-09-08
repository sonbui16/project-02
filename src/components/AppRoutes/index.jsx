import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";

// import Navigation from "../../layouts/Navigation";
import Home from "../../pages/Home";
import News from "../../pages/News";
import About from "../../pages/About";
import TermsOfUse from "../../pages/TermsOfUse";
import RefundPolicy from "../../pages/RefundPolicy";
import Privacy from "../../pages/Privacy";


import DefaultLayout from "../../layouts/DefaultLayout";
import SidebarLayout from "../../layouts/SidebarLayout";


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about-us" element={<About />} />

        </Route>

        <Route element={<SidebarLayout />}>
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
export default AppRoutes;
