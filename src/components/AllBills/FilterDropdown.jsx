/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";

const FilterDropdown = ({ bills, setFilteredBills, setLoading }) => {
    const [filter, setFilter] = useState("All");

    // WE GET THE FILTERED BILLS FROM THE BACKEND USING THIS
    const getFilteredBills = async () => {
        await axios.get("http://localhost:3000/getfiltered");
    };
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        setLoading(true);
        setFilteredBills(
            bills.filter((bill) => {
                if (filter.toLowerCase() === "all") return true;

                return bill.category.toLowerCase() === filter.toLowerCase();
            })
        );

        setTimeout(() => {
            setLoading(false);
        }, 300);
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
