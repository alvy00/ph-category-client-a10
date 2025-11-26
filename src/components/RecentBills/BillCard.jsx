/* eslint-disable no-unused-vars */
import { Card } from "flowbite-react";
import { motion } from "motion/react";
import electricity from "../../assets/elec.png";
import gas from "../../assets/gas.png";
import internet from "../../assets/int.png";
import water from "../../assets/water.png";
import { Link, useNavigate } from "react-router";

const images = {
    electricity: electricity,
    gas: gas,
    internet: internet,
    water: water,
};

const BillCard = ({ bill }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <motion.div whileHover={{ scale: 1.05 }}>
            <Card
                className="max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md"
                imgAlt="alt picture of categories"
                imgSrc={images[bill.category?.toLowerCase()]}
            >
                <a href="#">
                    <h5 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {bill.title || "--"}
                    </h5>
                </a>
                <div className="flex flex-wrap gap-1 mt-2">
                    <span className="rounded bg-cyan-100 px-2 py-0.5 text-xs sm:text-sm font-semibold text-cyan-800 dark:bg-base-100 dark:text-cyan-800 uppercase">
                        {bill.category || "--"}
                    </span>
                    <span className="rounded bg-base-100 px-2 py-0.5 text-xs sm:text-sm font-semibold text-cyan-800 dark:bg-base-100 dark:text-cyan-800">
                        {bill.date || "--"}
                    </span>
                    <span className="rounded bg-base-100 px-2 py-0.5 text-xs sm:text-sm font-semibold text-cyan-800 dark:bg-base-100 dark:text-cyan-800 uppercase">
                        {bill.location || "--"}
                    </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3">
                    <span className="text-gray-600 dark:text-gray-500 text-lg sm:text-xl font-medium">
                        <span className="text-2xl">৳</span>
                        {bill.amount || "--"}
                    </span>
                    <Link
                        to={`/billdetails/${bill._id}`}
                        className="mt-2 sm:mt-0"
                    >
                        <button
                            onClick={handleClick}
                            className="btn btn-outline btn-info text-sm sm:text-base"
                        >
                            See Details
                        </button>
                    </Link>
                </div>
            </Card>
        </motion.div>
    );
};

export default BillCard;
