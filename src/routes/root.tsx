import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import {Outlet} from "react-router-dom";

function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Root;