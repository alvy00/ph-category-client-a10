import { useEffect, useState } from "react";

const FilterDropdown = ({ bills, setFilteredBills }) => {
    const [filter, setFilter] = useState("All");

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        setFilteredBills(
            bills.filter((bill) => {
                if (filter.toLowerCase() === "all") return true;

                return bill.category.toLowerCase() === filter.toLowerCase();
            })
        );
        //console.log(filter);
    }, [bills, filter, setFilteredBills]);
    return (
        <>
            <select
                className="bg-base-200 w-full h-full rounded-md text-center"
                value={filter}
                onChange={handleFilterChange}
            >
                <option value="All">All Bills</option>
                <option value="Electricity">Electricity Bills</option>
                <option value="Gas">Gas Bills</option>
                <option value="Internet">Internet Bills</option>
                <option value="Water">Water Bills</option>
            </select>
        </>
    );
};

export default FilterDropdown;
