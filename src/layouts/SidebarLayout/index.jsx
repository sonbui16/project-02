import { Outlet } from "react-router";

import Header from '../components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Navigation from '../components/Navigation';




function SidebarLayout() {
    return (
        <div className="">
            <Header />
            {/* <Navigation></Navigation> */}
            <div className="container">
                <Sidebar />
                <div className="content">
                    <Outlet />
                </div>
                <Sidebar />
            </div>
            <Footer />
        </div>

    )
}
export default SidebarLayout