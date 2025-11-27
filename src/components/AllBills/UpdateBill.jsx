/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const UpdateBill = ({ bill }) => {
    const { _id } = bill;

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(bill.title);
    const [location, setLocation] = useState(bill.location);
    const [amount, setAmount] = useState(bill.amount);
    const [username, setUsername] = useState(bill.username);
    const [phone, setPhone] = useState(bill.phone);
    //console.log(now, currentDate);
    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedDate = e.target.date.value;
        toast.success("Bill Updated successfully!");

        console.log(amount, location, username, phone, updatedDate);
        const bill = { title, amount, location, username, phone, updatedDate };
        await axios.patch(
            `https://ph-category-server-a10.onrender.com/updatebill/${_id}`,
            bill
        );
        // console.log(res.data);
        setIsOpen(false);
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer border border-blue-800 hover:bg-blue-600 px-3 py-1.5 rounded-lg font-semibold transition-colors"
            >
                Update
            </Button>

            <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={() => setIsOpen(false)}
            >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-black/20 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle
                                as="h3"
                                className="text-base/7 font-medium text-white"
                            ></DialogTitle>
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset rounded-box p-4">
                                    <label>Title</label>
                                    <input
                                        name="title"
                                        type="text"
                                        className="
                                            w-full 
                                            mt-1 
                                            bg-white/10 
                                            text-white 
                                            p-3 
                                            rounded-lg 
                                            border border-white/20 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-gray-500
                                            placeholder:text-gray-300
                                        "
                                        value={bill.title}
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        required
                                    />
                                    <label>Username</label>
                                    <input
                                        name="username"
                                        type="text"
                                        className="
                                            w-full 
                                            mt-1 
                                            bg-white/10 
                                            text-white 
                                            p-3 
                                            rounded-lg 
                                            border border-white/20 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-gray-500
                                            placeholder:text-gray-300
                                        "
                                        value={bill.username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        required
                                    />
                                    <label>Amount</label>
                                    <input
                                        name="amount"
                                        type="number"
                                        className="
                                            w-full 
                                            mt-1 
                                            bg-white/10 
                                            text-white 
                                            p-3 
                                            rounded-lg 
                                            border border-white/20 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-gray-500
                                            placeholder:text-gray-300
                                        "
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value)
                                        }
                                        required
                                    />
                                    <label>Address</label>
                                    <input
                                        name="address"
                                        type="text"
                                        className="
                                            w-full 
                                            mt-1 
                                            bg-white/10 
                                            text-white 
                                            p-3 
                                            rounded-lg 
                                            border border-white/20 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-gray-500
                                            placeholder:text-gray-300
                                        "
                                        value={bill.address}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                        required
                                    />
                                    <label>Phone</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        className="
                                            w-full 
                                            mt-1 
                                            bg-white/10 
                                            text-white 
                                            p-3 
                                            rounded-lg 
                                            border border-white/20 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-gray-500
                                            placeholder:text-gray-300
                                        "
                                        value={bill.phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        required
                                    />
                                    <label>Date</label>
                                    <input
                                        name="date"
                                        type="date"
                                        className="
                                            w-full 
                                            mt-1 
                                            bg-white/10 
                                            text-white 
                                            p-3 
                                            rounded-lg 
                                            border border-white/20 
                                            focus:outline-none 
                                            focus:ring-2 
                                            focus:ring-gray-500
                                            placeholder:text-gray-300
                                        "
                                        value={today}
                                    />

                                    <Button
                                        type="submit"
                                        className="mt-5 text-center justify-center inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer 
"
                                    >
                                        Save
                                    </Button>
                                </fieldset>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default UpdateBill;
