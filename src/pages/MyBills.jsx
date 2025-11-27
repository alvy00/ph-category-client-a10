/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { use, useEffect, useState } from "react";
import { Button } from "@headlessui/react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import UpdateBill from "../components/AllBills/UpdateBill";
import DeleteBill from "../components/AllBills/DeleteBill";

const MyBills = () => {
    const { user } = use(AuthContext);
    const bills = useLoaderData();
    const [paidBills, setPaidBills] = useState([]);
    const [paidMoney, setPaidMoney] = useState(0);

    useEffect(() => {
        document.title = "GoBILLS | My Pay Bills";
    }, []);

    useEffect(() => {
        const getPaidBills = async () => {
            if (!user?.email) return;
            const res = await axios.get(
                `https://ph-category-server-a10.up.railway.app/mypaidbills?email=${user.email}`
            );
            setPaidBills(res.data);
        };
        getPaidBills();
    }, [user]);

    useEffect(() => {
        const total = paidBills.reduce(
            (acc, bill) => acc + Number(bill.amount),
            0
        );
        setPaidMoney(total);
    }, [paidBills]);

    const downdloadPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, { html: "#my-bills" });
        doc.save("bill_report.pdf");
    };

    return (
        <div className="flex flex-col gap-5 w-full p-5">
            <div className="overflow-x-auto w-full">
                <table
                    id="my-bills"
                    className="min-w-full border text-sm sm:text-base"
                >
                    <thead>
                        <tr className="bg-base-200 text-xs sm:text-sm md:text-base">
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Title
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Username
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Email
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Amount
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Address
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Phone
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Date
                            </th>
                            <th className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr key={bill._id} className="text-center">
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.title}
                                </td>
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.username || "--"}
                                </td>
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.email}
                                </td>
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.amount}
                                </td>
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.location || "--"}
                                </td>
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.phone || "--"}
                                </td>
                                <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2">
                                    {bill.date}
                                </td>
                                <td className="flex gap-2 justify-center border border-gray-500 px-2 sm:px-4 py-1 sm:py-2 flex-wrap">
                                    <UpdateBill bill={bill} />
                                    <DeleteBill id={bill._id} />
                                </td>
                            </tr>
                        ))}
                        {bills.length < 1 && (
                            <tr>
                                <td
                                    colSpan={8}
                                    className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2 text-center"
                                >
                                    No Bills Added Yet!
                                </td>
                            </tr>
                        )}
                        <tr>
                            <td
                                colSpan={7}
                                className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2 text-center font-semibold"
                            >
                                Total Bill Paid
                            </td>
                            <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2 text-center">
                                {paidBills.length}
                            </td>
                        </tr>
                        <tr>
                            <td
                                colSpan={7}
                                className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2 text-center font-semibold"
                            >
                                Total Amount
                            </td>
                            <td className="border border-gray-500 px-2 sm:px-4 py-1 sm:py-2 text-center">
                                {paidMoney}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <Button
                    onClick={downdloadPDF}
                    className="btn btn-outline btn-primary"
                >
                    Download Report
                </Button>
            </div>
        </div>
    );
};

export default MyBills;
