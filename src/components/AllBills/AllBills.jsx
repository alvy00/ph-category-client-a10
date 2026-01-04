/* eslint-disable react-hooks/set-state-in-effect */
import { useLoaderData } from "react-router";
import BillCard from "../RecentBills/BillCard";
import FilterDropdown from "./FilterDropdown";
import { useEffect, useState } from "react";
import CardSkeleton from "./CardSkeleton";

const ITEMS_PER_PAGE = 12;

const AllBills = () => {
    const billsData = useLoaderData();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [bills] = useState(billsData);
    const [filteredBills, setFilteredBills] = useState(bills || []);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const filtered = bills.filter((bill) =>
                bill.title.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredBills(filtered);
            setCurrentPage(1); // reset page on search/filter
            setLoading(false);
        }, 300);
    }, [bills, search]);

    // Pagination calculations
    const totalPages = Math.ceil(filteredBills.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedBills = filteredBills.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <div className="flex flex-col gap-5 p-5 w-full">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <span className="font-bold text-2xl md:text-4xl">
                    All Bills
                </span>

                <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                    <label className="input w-full sm:w-auto">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                    <FilterDropdown
                        bills={bills}
                        setFilteredBills={setFilteredBills}
                        setLoading={setLoading}
                    />
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                {loading
                    ? Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
                          <CardSkeleton key={idx} />
                      ))
                    : paginatedBills.map((bill) => (
                          <BillCard bill={bill} key={bill._id} />
                      ))}
            </div>

            {/* Pagination */}
            {!loading && totalPages > 1 && (
                <div className="flex justify-center mt-6">
                    <div className="join">
                        <button
                            className="join-item btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                        >
                            «
                        </button>

                        {Array.from({ length: totalPages }).map((_, idx) => (
                            <button
                                key={idx}
                                className={`join-item btn ${
                                    currentPage === idx + 1 ? "btn-active" : ""
                                }`}
                                onClick={() => setCurrentPage(idx + 1)}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            className="join-item btn"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                        >
                            »
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllBills;
