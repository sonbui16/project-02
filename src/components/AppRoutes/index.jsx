import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";

// import Navigation from "../../layouts/Navigation";
import Home from "../../pages/Home";
import News from "../../pages/News";
import About from "../../pages/About";
import DefaultLayout from '../../layouts/DefaultLayout';
import SidebarLayout from '../../layouts/SidebarLayout';



function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
        </Route>

        <Route element={<SidebarLayout />}>
          <Route path="/about" element={<About />} />
        </Route>


      </Routes>
    </Router>
  );
}
export default AppRoutes;
