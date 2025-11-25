import React, { useEffect } from "react";
import { useLoaderData } from "react-router";

const MyBills = () => {
    const bills = useLoaderData();
    // console.log(bills);

    useEffect(() => {
        document.title = "GoBILLS | My Pay Bills";
    }, []);

    return (
        <>
            <div className="min-w-5/12 flex justify-center items-center p-5">
                <table className="min-w-full border">
                    <thead>
                        <tr className="bg-base-200">
                            <th className="border border-gray-500 px-4 py-2">
                                Title
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Amount
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {" "}
                        {bills.length > 0 ? (
                            bills.map((bill) => (
                                <tr className="text-center">
                                    <td className="border border-gray-500 px-4 py-2">
                                        {bill.title}
                                    </td>
                                    <td className="border border-gray-500 px-4 py-2">
                                        {bill.amount}
                                    </td>
                                    <td className="border border-gray-500 px-4 py-2">
                                        {bill.date}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="border border-gray-500 px-4 py-2">
                                <td
                                    colSpan={3}
                                    className="text-center px-4 py-2"
                                >
                                    No Bills Added Yet!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyBills;
