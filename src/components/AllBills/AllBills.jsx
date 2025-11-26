/* eslint-disable react-hooks/set-state-in-effect */
import { useLoaderData } from "react-router";
import BillCard from "../RecentBills/BillCard";
import FilterDropdown from "./FilterDropdown";
import { useEffect, useState } from "react";
import AddBill from "./AddBill";
import Loading from "../../components/Loading";

const AllBills = () => {
    const billsData = useLoaderData();
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [bills, setBills] = useState(billsData);
    const [filteredBills, setFilteredBills] = useState(bills);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const filtered = bills.filter((bill) =>
                bill.title.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredBills(filtered);
            setLoading(false);
        }, 300);
    }, [bills, search]);

    return (
        <div className="flex flex-col gap-5 p-5 min-w-11/12">
            <div className="flex justify-between ">
                <span className="font-bold text-4xl">All Bills</span>
                <div className="flex gap-2 justify-between items-center">
                    <label className="input">
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
                            required
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                    <AddBill setBills={setBills} />
                    <FilterDropdown
                        bills={bills}
                        setFilteredBills={setFilteredBills}
                        setLoading={setLoading}
                    />
                </div>
            </div>

            <div className="w-full min-h-full">
                {loading ? (
                    <div className="flex justify-center items-center w-full h-[300px]">
                        <Loading />
                    </div>
                ) : (
                    <div className="grid grid-cols-3 gap-5 pl-5 w-full">
                        {filteredBills.map((bill) => (
                            <BillCard bill={bill} key={bill._id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllBills;
