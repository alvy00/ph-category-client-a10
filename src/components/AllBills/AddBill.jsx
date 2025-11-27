/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import axios from "axios";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";

const AddBill = ({ setBills }) => {
    const { user } = use(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const title = e.target.title.value;
        const des = e.target.description.value;
        const location = e.target.location.value;
        const amount = e.target.amount.value;
        const img = e.target.photourl.value;
        const date = e.target.date.value;
        toast.success("New bill added successfully!");
        const bill = {
            title: title,
            category: category,
            email: user.email,
            location: location,
            description: des,
            image: img,
            date: date,
            amount: Number(amount),
        };

        const res = await axios.post(
            "https://ph-category-server-a10.up.railway.app/addbill",
            bill
        );
        //console.log(title, des, location, category, amount, img, date);
        //console.log(res.data);
        bill._id = res.data._id;
        setBills((prev) => [...prev, bill]);
        //console.log(bill._id, res.data._id);
        setIsOpen(false);
    };

    const handleCatChange = (e) => {
        e.preventDefault();
        setCategory(e.target.value);
    };
    return (
        <>
            <Button
                disabled={!user}
                onClick={() => setIsOpen(true)}
                className="btn btn-outline btn-success data-disabled:opacity-50 data-disabled:cursor-not-allowed
        data-disabled:bg-gray-500"
            >
                Add Bill
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
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle
                                as="h3"
                                className="text-base/7 font-medium text-white"
                            >
                                Add New Bill
                            </DialogTitle>
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset rounded-box p-4">
                                    <labe className="font-semibold text-[13px]">
                                        Title
                                    </labe>
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
                                        placeholder="Bill title"
                                        required
                                    />
                                    <labe className="font-semibold text-[13px]">
                                        Description
                                    </labe>
                                    <textarea
                                        name="description"
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
                                        placeholder="Bill description"
                                        required
                                        rows="3"
                                    />
                                    <labe className="font-semibold text-[13px]">
                                        Category
                                    </labe>
                                    {/* <input
                                        name="category"
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
                                        placeholder="Bill category"
                                    /> */}
                                    <select
                                        className="w-full h-10 rounded-md bg-base-200 uppercase"
                                        name="category"
                                        value={category}
                                        onChange={handleCatChange}
                                        required
                                    >
                                        <option value="">
                                            Choose a Category
                                        </option>
                                        <option value="electricity">
                                            Electricity
                                        </option>
                                        <option value="gas">Gas</option>
                                        <option value="water">Water</option>
                                        <option value="internet">
                                            Internet
                                        </option>
                                    </select>

                                    <labe className="font-semibold text-[13px]">
                                        Location
                                    </labe>
                                    <input
                                        name="location"
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
                                        placeholder="Location"
                                        required
                                    />
                                    <labe className="font-semibold text-[13px]">
                                        Amount
                                    </labe>
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
                                        placeholder="Amount"
                                        required
                                    />
                                    <labe className="font-semibold text-[13px]">
                                        PhotoURL
                                    </labe>
                                    <input
                                        name="photourl"
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
                                        placeholder="URL"
                                        required
                                    />
                                    <labe className="font-semibold text-[13px]">
                                        Date
                                    </labe>
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
                                        required
                                    />

                                    <Button
                                        type="submit"
                                        className="mt-5 text-center justify-center inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                                    >
                                        ADD
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

export default AddBill;
