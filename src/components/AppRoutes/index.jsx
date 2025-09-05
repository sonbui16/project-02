import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router";

import Navigation from "../../layouts/Navigation";
import Home from "../../pages/Home";
import News from "../../pages/News";
import About from "../../pages/About";

function AppRoutes() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default AppRoutes;
