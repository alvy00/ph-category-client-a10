/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState } from "react";

const FilterDropdown = ({ bills, setFilteredBills, setLoading }) => {
    const [category, setCategory] = useState("All");
    const [location, setLocation] = useState("All");
    const [sortOrder, setSortOrder] = useState("none");

    const locations = useMemo(() => {
        const unique = new Set(bills.map((bill) => bill.location));
        return ["All", ...Array.from(unique)];
    }, [bills]);

    useEffect(() => {
        setLoading(true);

        let filtered = bills.filter((bill) => {
            const categoryMatch =
                category === "All" ||
                bill.category.toLowerCase() === category.toLowerCase();

            const locationMatch =
                location === "All" ||
                bill.location.toLowerCase() === location.toLowerCase();

            return categoryMatch && locationMatch;
        });

        if (sortOrder === "lowToHigh") {
            filtered = [...filtered].sort((a, b) => a.amount - b.amount);
        } else if (sortOrder === "highToLow") {
            filtered = [...filtered].sort((a, b) => b.amount - a.amount);
        }

        setFilteredBills(filtered);

        setTimeout(() => setLoading(false), 300);
    }, [bills, category, location, sortOrder, setFilteredBills, setLoading]);

    return (
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            {/* Category Filter */}
            <select
                className="select select-bordered bg-base-200"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Electricity">Electricity</option>
                <option value="Gas">Gas</option>
                <option value="Internet">Internet</option>
                <option value="Water">Water</option>
            </select>

            {/* Location Filter */}
            <select
                className="select select-bordered bg-base-200"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            >
                {locations.map((loc, idx) => (
                    <option key={idx} value={loc}>
                        {loc}
                    </option>
                ))}
            </select>

            {/*  Sort by Price */}
            <select
                className="select select-bordered bg-base-200"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="none">Sort by Price</option>
                <option value="lowToHigh">Low → High</option>
                <option value="highToLow">High → Low</option>
            </select>
        </div>
    );
};

export default FilterDropdown;
