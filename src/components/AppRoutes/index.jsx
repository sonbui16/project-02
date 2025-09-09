import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router";
import { useEffect } from "react";

// import Navigation from "../../layouts/Navigation";
import Home from "../../pages/Home";
import News from "../../pages/News";
import About from "../../pages/About";
import TermsOfUse from "../../pages/TermsOfUse";
import RefundPolicy from "../../pages/RefundPolicy";
import Privacy from "../../pages/Privacy";
import PostDetail from "../../pages/PostDetail";
import ErrorPage from "../../pages/ErrorPage";
import UseState from "../../pages/UseState";
import CleanUp from "../../pages/CleanUp";

import DefaultLayout from "../../layouts/DefaultLayout";
import PageLayout from "../../layouts/PageLayout";
import SidebarLayout from "../../layouts/SidebarLayout";

const titles = {
  "/": "Trang chủ",
  "/about": "About",
  "/news": "Tin tức",
  "/terms-of-use": "Điều khoản sử dụng",
  "/refund-policy": "Chính sách hoàn trả",
  "/privacy": "Chính sách bảo mật",
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout titles={titles} />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="clean-up" element={<CleanUp />} />
        </Route>

        <Route path="/page" element={<PageLayout />}>
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>

        <Route element={<SidebarLayout />}>
          {/* <Route path="/about" element={<About />} /> */}
        </Route>

        <Route path="use-state" element={<UseState />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
