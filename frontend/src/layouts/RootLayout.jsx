import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function RootLayout() {
    return ( 
        <div className="root-page min-h-dvh bg-gray-900">
            <Navbar />
            <Outlet />
        </div>
     );
}

export default RootLayout;