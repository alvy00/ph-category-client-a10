import React, { use } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const DashboardLayout = () => {
    const { user } = use(AuthContext);
    return (
        <div className="drawer lg:drawer-open">
            {/* Drawer Toggle */}
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* ================= CONTENT ================= */}
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <nav className="navbar bg-base-300 px-4">
                    <label
                        htmlFor="my-drawer-4"
                        className="btn btn-square btn-ghost"
                    >
                        {/* Sidebar Toggle Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>

                    <span className="text-lg font-semibold ml-2">
                        Dashboard
                    </span>
                </nav>

                {/* Page Content */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

            {/* ================= SIDEBAR ================= */}
            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                <aside
                    className="bg-base-200 min-h-full
                    is-drawer-close:w-16
                    is-drawer-open:w-64
                    transition-all duration-300
                "
                >
                    {/* Brand */}
                    <div
                        className="p-4 font-bold text-lg border-b border-base-300
                        is-drawer-close:hidden"
                    >
                        Go<span className="text-cyan-500">BILLS</span>
                    </div>

                    <ul className="menu w-full p-2">
                        {/* Home */}
                        <li>
                            <Link
                                to="/"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg
                                    hover:bg-base-300
                                    is-drawer-close:tooltip
                                    is-drawer-close:tooltip-right"
                                data-tip="Home"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 10l9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" />
                                </svg>
                                <span className="is-drawer-close:hidden">
                                    Home
                                </span>
                            </Link>
                        </li>

                        {/* Dashboard */}
                        <li>
                            <Link
                                to="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg
                                    hover:bg-base-300
                                    is-drawer-close:tooltip
                                    is-drawer-close:tooltip-right"
                                data-tip="Dashboard"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <rect
                                        x="3"
                                        y="3"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                    <rect
                                        x="14"
                                        y="3"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                    <rect
                                        x="3"
                                        y="14"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                    <rect
                                        x="14"
                                        y="14"
                                        width="7"
                                        height="7"
                                        rx="1"
                                    />
                                </svg>
                                <span className="is-drawer-close:hidden">
                                    Dashboard
                                </span>
                            </Link>
                        </li>

                        {/* My Bills */}
                        <li>
                            <Link
                                to={`/dashboard/mybills/${user.email}`}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg
                    hover:bg-base-300
                    is-drawer-close:tooltip
                    is-drawer-close:tooltip-right"
                                data-tip="My Bills"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 17v-2h6v2m-6-4v-2h6v2m-6-4V7h6v2m-7 10H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-7z"
                                    />
                                </svg>

                                <span className="is-drawer-close:hidden">
                                    My Bills
                                </span>
                            </Link>
                        </li>

                        {/* Add Bill */}
                        <li>
                            <Link
                                to="/dashboard/addbill"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg
                                            hover:bg-base-300
                                            is-drawer-close:tooltip
                                            is-drawer-close:tooltip-right"
                                data-tip="Add Bill"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 5v14M5 12h14"
                                    />
                                </svg>

                                <span className="is-drawer-close:hidden">
                                    Add Bill
                                </span>
                            </Link>
                        </li>

                        {/* Profile */}
                        <li>
                            <Link
                                to="/dashboard/profile"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg
                                    hover:bg-base-300
                                    is-drawer-close:tooltip
                                    is-drawer-close:tooltip-right"
                                data-tip="Profile"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5z" />
                                    <path d="M20 21a8 8 0 0 0-16 0" />
                                </svg>
                                <span className="is-drawer-close:hidden">
                                    Profile
                                </span>
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
