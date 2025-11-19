/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { use, useState } from "react";
import { toast } from "react-toastify";
import profileIcon from "../../assets/profile.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, loading, logOut } = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logOut();
        navigate("/");
        toast.success("Logged out!");
    };

    return (
        <div className="z-100 fixed top-0 left-0 w-full h-16 navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    {!user ? (
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                {" "}
                                <Link to="/">Home</Link>{" "}
                            </li>

                            <li>
                                <Link to="/bills">Bills</Link>
                            </li>
                            <li>
                                {" "}
                                <Link to="/login">Login</Link>{" "}
                            </li>

                            <li>
                                <Link to="/register">Register</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                {" "}
                                <Link to="/">Home</Link>{" "}
                            </li>
                            <li>
                                {" "}
                                <Link to="/"></Link>{" "}
                            </li>

                            <li>
                                <Link to="/mybills">My Pay Bills</Link>
                            </li>

                            <li>
                                <button
                                    className="bg-red-800"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
                <span className="ml-5 p-4 text-xl hover:bg-base-300 rounded-xl">
                    <Link to="/">
                        {" "}
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                            }}
                            className="font-bold italic text-2xl"
                        >
                            Go<span className="text-cyan-500">BILLS</span>
                        </motion.div>{" "}
                    </Link>{" "}
                </span>
            </div>

            <div className="navbar-end hidden lg:flex">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <span className="loading loading-spinner text-warning"></span>
                    </div>
                ) : !user ? (
                    <ul className="menu menu-horizontal px-3 text-lg gap-5">
                        <li className=" rounded-sm">
                            {" "}
                            <Link to="/">Home</Link>{" "}
                        </li>

                        <li className=" rounded-sm">
                            <Link to="/bills">Bills</Link>
                        </li>

                        <li className="bg-gray-800 rounded-sm">
                            {" "}
                            <Link to="/login">Login</Link>{" "}
                        </li>
                        <li className="border border-cyan-600 rounded-sm hover:bg-cyan-500 transition duration-300 ease-in-out">
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                ) : (
                    <ul className="menu menu-horizontal px-3 text-lg gap-5 items-center">
                        <li className=" rounded-sm">
                            {" "}
                            <Link to="/">Home</Link>{" "}
                        </li>

                        <li className=" rounded-sm">
                            <Link to="/bills">Bills</Link>
                        </li>
                        <li className=" rounded-sm">
                            <Link to="/mybills">My Pay Bills</Link>
                        </li>
                        <li className=" rounded-sm">
                            {" "}
                            <Link to="/profile">
                                {" "}
                                <img
                                    className="h-10 w-10"
                                    src={profileIcon}
                                    alt="profile icon"
                                />{" "}
                            </Link>{" "}
                        </li>
                        <li className="border border-red-600 rounded-sm hover:bg-red-500 transition duration-300 ease-in-out">
                            <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Navbar;
