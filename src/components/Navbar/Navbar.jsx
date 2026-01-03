/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { use, useState } from "react";
import { toast } from "react-toastify";
import profileIcon from "../../assets/profile.png";
import { AuthContext } from "../../provider/AuthProvider";
import DarkModeToggle from "./components/DarkToggle";

const Navbar = () => {
    const { user, loading, logOut } = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logOut();
        navigate("/");
        toast.success("Logged out!");
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-base-100 shadow-md">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-12">
                {/* Navbar Start */}
                <div className="flex items-center gap-4">
                    {/* Mobile dropdown */}
                    <div className="lg:hidden">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost p-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-compact dropdown-content bg-base-100 rounded-box mt-2 w-48 p-2 shadow-lg space-y-1"
                            >
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/bills">Bills</Link>
                                </li>
                                {user && (
                                    <li>
                                        <Link to={`/mybills/${user.email}`}>
                                            My Pay Bills
                                        </Link>
                                    </li>
                                )}
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                {user ? (
                                    <>
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li>
                                            <button
                                                className="w-full text-left text-red-600 hover:bg-red-100 rounded-md px-2 py-1"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button>
                                        </li>
                                        <li>
                                            <DarkModeToggle />
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/login">Login</Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/register"
                                                className="text-cyan-600 hover:bg-cyan-100 rounded-md px-2 py-1"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                        <li>
                                            <DarkModeToggle />
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Brand */}
                    <span className="ml-2 text-xl sm:text-2xl font-bold hover:bg-base-300 rounded-xl p-2">
                        <Link to="/">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="italic"
                            >
                                Go<span className="text-cyan-500">BILLS</span>
                            </motion.div>
                        </Link>
                    </span>
                </div>

                {/* Navbar End (Desktop Menu) */}
                <div className="hidden lg:flex items-center gap-4">
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <span className="loading loading-spinner text-warning"></span>
                        </div>
                    ) : !user ? (
                        <ul className="menu menu-horizontal px-3 text-base gap-4 items-center">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/bills">Bills</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link
                                    className="btn border border-base-300 rounded-md px-6 py-1 hover:bg-base-300 transition"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="btn border border-cyan-600 rounded-md px-6 py-1 hover:bg-cyan-500 transition"
                                    to="/register"
                                >
                                    Register
                                </Link>
                            </li>
                            <li className="items-center">
                                <DarkModeToggle />
                            </li>
                        </ul>
                    ) : (
                        <ul className="menu menu-horizontal px-3 text-base gap-4 items-center">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/bills">Bills</Link>
                            </li>
                            <li>
                                <Link to={`/mybills/${user.email}`}>
                                    My Pay Bills
                                </Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={profileIcon}
                                        alt="profile icon"
                                    />
                                </Link>
                            </li>
                            <li className="border border-red-600 rounded-md px-2 py-1 hover:bg-red-500 transition">
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                            <li>
                                <DarkModeToggle />
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
