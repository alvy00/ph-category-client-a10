import { useRouteLoaderData } from "react-router";
import BillCard from "./BillCard";

import Loading from "../../components/Loading";

const RecentBills = () => {
    const bills = useRouteLoaderData("Root");
    const isLoading = navigation.state === "loading";
    if (isLoading) return <Loading />;
    return (
        <div className="flex flex-col gap-5 p-5">
            <span className="font-bold text-4xl">Recent Bills</span>
            <div className="grid grid-cols-3 gap-5 pl-5">
                {bills.slice(0, 6).map((bill) => (
                    <BillCard bill={bill} />
                ))}
            </div>
        </div>
    );
};

export default RecentBills;
