import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-[80vh] flex justify-center items-center">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default RootLayout;
