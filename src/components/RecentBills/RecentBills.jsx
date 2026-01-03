import BillCard from "./BillCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CardSkeleton from "../AllBills/CardSkeleton";

const RecentBills = () => {
    const [bills, setBills] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getRecentBills = async () => {
            try {
                const res = await axios.get(
                    "https://ph-category-server-a10.onrender.com/recentbills"
                );
                setBills(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getRecentBills();
    }, []);

    return (
        <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-5 md:p-8 lg:p-10">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Recent Bills
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {isLoading
                    ? Array.from({ length: 8 }).map((_, idx) => (
                          <CardSkeleton key={idx} />
                      ))
                    : bills
                          .slice(0, 8)
                          .map((bill) => (
                              <BillCard key={bill._id} bill={bill} />
                          ))}
            </div>
        </div>
    );
};

export default RecentBills;
