import BillCard from "./BillCard";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

const RecentBills = () => {
    const [bills, setBills] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const getRecentBills = async () => {
            try {
                const res = await axios.get(
                    "https://ph-category-server-a10.vercel.app/recentbills"
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

    if (isLoading) return <Loading />;

    return (
        <div className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-5 md:p-8 lg:p-10">
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Recent Bills
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {bills.slice(0, 6).map((bill) => (
                    <BillCard key={bill._id} bill={bill} />
                ))}
            </div>
        </div>
    );
};

export default RecentBills;
