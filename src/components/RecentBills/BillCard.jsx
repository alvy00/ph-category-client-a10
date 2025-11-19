import { Card } from "flowbite-react";
import electricity from "../../assets/elec.png";
import gas from "../../assets/gas.png";
import internet from "../../assets/int.png";
import water from "../../assets/water.png";

const images = {
    electricity: electricity,
    gas: gas,
    internet: internet,
    water: water,
};

const BillCard = ({ bill }) => {
    return (
        <Card
            className="max-w-sm"
            imgAlt="alt picture of categories"
            imgSrc={images[bill.category?.toLowerCase()]}
        >
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {bill.title || "--"}
                </h5>
            </a>
            <div className="">
                <span className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-base-100 dark:text-cyan-800 uppercase">
                    {bill.category || "--"}
                </span>
                <span className="mr-2 rounded bg-base-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-base-100 dark:text-cyan-800">
                    {bill.date || "--"}
                </span>
                <span className="mr-2 rounded bg-base-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-base-100 dark:text-cyan-800 uppercase">
                    {bill.location || "--"}
                </span>
            </div>
            <div className="flex items-center justify-between">
                <span className=" dark:text-gray-500 text-gray-600">
                    <span className="text-2xl">৳</span>
                    {bill.amount || "--"}
                </span>
                <button className="btn btn-outline btn-info">
                    See Details
                </button>
            </div>
        </Card>
    );
};

export default BillCard;
