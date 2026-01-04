/* eslint-disable no-unused-vars */
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const AddBill = ({ setBills }) => {
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState("");

    if (!user) {
        return (
            <div className="alert alert-warning w-fit">
                Please login to add a bill
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const bill = {
            title: form.title.value,
            description: form.description.value,
            category,
            email: user.email,
            location: form.location.value,
            image: form.photourl.value,
            date: form.date.value,
            amount: Number(form.amount.value),
        };

        try {
            const res = await axios.post(
                "https://ph-category-server-a10.onrender.com/addbill",
                bill
            );

            bill._id = res.data._id;
            setBills((prev) => [...prev, bill]);

            toast.success("New bill added successfully!");
            form.reset();
            setCategory("");
        } catch (err) {
            toast.error("Failed to add bill");
        }
    };

    return (
        <div className="card w-full max-w-xl mx-auto bg-base-300 shadow-xl md:mt-20">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Add New Bill</h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                        name="title"
                        type="text"
                        placeholder="Bill title"
                        className="input input-bordered w-full"
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Bill description"
                        className="textarea textarea-bordered w-full"
                        rows="3"
                        required
                    />

                    <select
                        className="select select-bordered w-full uppercase"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Choose Category</option>
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="water">Water</option>
                        <option value="internet">Internet</option>
                    </select>

                    <input
                        name="location"
                        type="text"
                        placeholder="Location"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        name="amount"
                        type="number"
                        placeholder="Amount"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        name="photourl"
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered w-full"
                        required
                    />

                    <input
                        name="date"
                        type="date"
                        className="input input-bordered w-full"
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-success w-full mt-4"
                    >
                        Add Bill
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBill;
