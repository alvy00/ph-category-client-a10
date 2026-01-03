/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import electricity from "../../assets/elec.png";
import gas from "../../assets/gas.png";
import internet from "../../assets/int.png";
import water from "../../assets/water.png";
import { Link } from "react-router";

const images = {
    electricity,
    gas,
    internet,
    water,
};

const BillCard = ({ bill }) => {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div whileHover={{ scale: 1.05 }} className="h-full">
            <div className="card h-full bg-base-200 border border-base-300 shadow-md hover:shadow-xl hover:ring-2 hover:ring-primary/20 transition max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md">
                {/* Image */}
                <figure className="h-40 overflow-hidden">
                    <img
                        src={images[bill.category?.toLowerCase()]}
                        alt="Bill category"
                        className="h-full w-full object-cover"
                    />
                </figure>

                {/* Body */}
                <div className="card-body p-6 flex flex-col">
                    {/* Title (clamped) */}
                    <h5 className="text-lg sm:text-xl md:text-2xl font-semibold line-clamp-2">
                        {bill.title || "--"}
                    </h5>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="badge badge-info badge-outline uppercase">
                            {bill.category || "--"}
                        </span>
                        <span className="badge badge-outline">
                            {bill.date || "--"}
                        </span>
                        <span className="badge badge-outline uppercase">
                            {bill.location || "--"}
                        </span>
                    </div>

                    {/* Spacer pushes bottom content down */}
                    <div className="grow" />

                    {/* Amount + Action */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
                        <span className="text-lg sm:text-xl font-semibold">
                            <span className="text-2xl mr-1">৳</span>
                            {bill.amount || "--"}
                        </span>

                        <Link
                            to={`/billdetails/${bill._id}`}
                            className="mt-3 sm:mt-0"
                        >
                            <button
                                onClick={handleClick}
                                className="btn btn-outline btn-info btn-sm sm:btn-md"
                            >
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BillCard;
