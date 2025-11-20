import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { use, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router";

const PayBill = ({ bill }) => {
    const { user } = use(AuthContext);
    const { _id, amount } = bill;

    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const today = new Date().toISOString().split("T")[0];

    const handleSubmit = (e) => {
        e.preventDefault();

        const location = e.target.address.value;
        const username = e.target.username.value;
        const phone = e.target.phone.value;
        toast.success("Bill Payment successfully!");

        //console.log(user.email, _id, amount, location, username, phone, today);
        setIsOpen(false);
        navigate("/");
    };

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className="border border-gray-500 hover:bg-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
                Pay Bill
            </div>

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
                            className="w-full max-w-md rounded-xl bg-black/80 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle
                                as="h3"
                                className="text-base/7 font-medium text-white"
                            ></DialogTitle>
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset rounded-box p-4">
                                    <input
                                        name="email"
                                        type="email"
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
                                        value={user.email}
                                        readOnly
                                    />
                                    <input
                                        name="bill_id"
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
                                        value={_id}
                                        readOnly
                                    />
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
                                        readOnly
                                    />
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
                                        placeholder="Username"
                                        required
                                    />
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
                                        placeholder="Address"
                                        required
                                    />
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
                                        placeholder="Phone number"
                                        required
                                    />

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
                                        readOnly
                                    />

                                    <Button
                                        type="submit"
                                        className="mt-5 text-center justify-center inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                                    >
                                        Pay
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

export default PayBill;
