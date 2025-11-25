/* eslint-disable no-unused-vars */
import axios from "axios";
import { use, useEffect, useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import UpdateBill from "../components/AllBills/UpdateBill";

const MyBills = () => {
    const { user } = use(AuthContext);
    const bills = useLoaderData();
    const [paidBills, setPaidBills] = useState([]);
    const [paidMoney, setPaidMoney] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    // console.log(bills);

    useEffect(() => {
        document.title = "GoBILLS | My Pay Bills";
    }, []);

    useEffect(() => {
        const getPaidBills = async () => {
            const res = await axios.get(
                `http://localhost:3000/mypaidbills?email=${user.email}`
            );
            setPaidBills(res.data);
        };
        getPaidBills();
    }, []);

    useEffect(() => {
        paidBills.map((bill) => setPaidMoney((prev) => prev + bill.amount));
    }, [paidBills]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/deletebill/${id}`);
        toast.success(`The bill was deleted!`);
    };

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
                                Username
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Email
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Amount
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Address
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Phone
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Date
                            </th>
                            <th className="border border-gray-500 px-4 py-2">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {" "}
                        {bills.map((bill) => (
                            <tr className="text-center">
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.title}
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.username || "--"}
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.email}
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.amount}
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.location || "--"}
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.phone || "--"}
                                </td>
                                <td className="border border-gray-500 px-4 py-2">
                                    {bill.date}
                                </td>
                                <td className="flex gap-3 border border-gray-500 px-4 py-2">
                                    <UpdateBill bill={bill} />
                                    <Button
                                        onClick={() => handleDelete(bill._id)}
                                        className="cursor-pointer border border-red-800 hover:bg-red-600 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        {bills.length < 1 && (
                            <tr className="border border-gray-500 px-4 py-2">
                                <td
                                    colSpan={7}
                                    rowSpan={2}
                                    className="text-center px-4 py-2"
                                >
                                    No Bills Added Yet!
                                </td>
                            </tr>
                        )}
                        <tr className="border border-gray-500 px-4 py-2">
                            <td
                                colSpan={6}
                                className="border border-gray-500 text-center px-4 py-2"
                            >
                                Total Bill Paid
                            </td>
                            <td
                                colSpan={1}
                                className="border border-gray-500 text-center px-4 py-2"
                            >
                                {bills.length}
                            </td>
                        </tr>
                        <tr className="border border-gray-500 px-4 py-2">
                            <td
                                colSpan={6}
                                className="border border-gray-500 text-center px-4 py-2"
                            >
                                Total Amount
                            </td>
                            <td
                                colSpan={1}
                                className="border border-gray-500 text-center px-4 py-2"
                            >
                                {paidMoney}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyBills;
