/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";
import axios from "axios";

const DeleteBill = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDelete = async () => {
        setIsOpen(false);
        await axios.delete(
            `https://ph-category-server-a10.vercel.app/deletebill/${id}`
        );
        toast.success(`The bill was deleted!`);
    };

    return (
        <>
            <Button
                onClick={() => setIsOpen(true)}
                className="cursor-pointer border border-red-800 hover:bg-red-600 px-3 py-1.5 rounded-lg font-semibold transition-colors"
            >
                Delete
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
                            className="items-center w-full max-w-md rounded-xl p-6 bg-white/5 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle
                                as="h3"
                                className="text-base/7 font-medium text-white"
                            ></DialogTitle>
                            <div className="flex flex-col items-center justify-center gap-6 p-6  rounded-2xl max-w-sm mx-auto text-center">
                                <h2 className="text-xl font-semibold text-white">
                                    Delete this bill?
                                </h2>

                                <p className="text-gray-500 text-sm">
                                    This action cannot be undone.
                                </p>

                                <div className="flex gap-3 mt-2">
                                    <Button
                                        onClick={handleDelete}
                                        className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-800 cursor-pointer text-white shadow-sm transition-all"
                                    >
                                        Yes, delete
                                    </Button>

                                    <Button
                                        onClick={() => setIsOpen(false)}
                                        className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-500 cursor-pointer text-gray-800 shadow-sm transition-all"
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default DeleteBill;
