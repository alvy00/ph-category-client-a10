import { useRouteLoaderData } from "react-router";
import BillCard from "../RecentBills/BillCard";
import FilterDropdown from "./FilterDropdown";
import { useState } from "react";
import AddBill from "./AddBill";

const AllBills = () => {
    const bills = useRouteLoaderData("Root");
    const [filteredBills, setFilteredBills] = useState(bills);

    return (
        <div className="flex flex-col gap-5 p-5">
            <div className="flex justify-between">
                <span className="font-bold text-4xl">All Bills</span>
                <div className="flex gap-2 justify-between items-center">
                    {/* <button className="btn btn-outline btn-success">
                        Add Bill
                    </button> */}
                    <AddBill />
                    <FilterDropdown
                        bills={bills}
                        setFilteredBills={setFilteredBills}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pl-5">
                {filteredBills.map((bill) => (
                    <BillCard bill={bill} />
                ))}
            </div>
        </div>
    );
};

export default AllBills;
