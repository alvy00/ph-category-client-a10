/* eslint-disable no-unused-vars */
import {
    Link,
    useLoaderData,
    useNavigate,
    useNavigation,
    useParams,
    useRouteLoaderData,
} from "react-router";
import fallbackimg from "../assets/imageNotFound.png";
import PayBill from "../components/AllBills/PayBill";
import Loading from "../components/Loading";

const BillDetail = () => {
    // const { id } = useParams();
    // const bills = useRouteLoaderData("Root");
    // const bill = bills.find((bill) => bill._id === id);
    const navigation = useNavigation();
    const bill = useLoaderData();
    // console.log(bill._id);
    const isLoading = navigation.state === "loading";
    const { title, description, category, location, amount, date, image } =
        bill;
    //const navigate = useNavigate();
    if (isLoading) return <Loading />;
    return (
        <section className="h-[80vh] text-white px-6 flex flex-col items-center my-2">
            <div className="max-w-5xl w-full bg-gray-900 p-6 md:p-10 rounded-2xl shadow-lg">
                {/* Cover Image */}
                <img
                    src={fallbackimg || image}
                    alt={title}
                    className="w-full h-80 object-cover rounded-xl mb-6"
                />

                {/* Title + Category */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <span className="bg-blue-600 px-4 py-1 rounded-full text-sm mt-2 sm:mt-0">
                        {category}
                    </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                    {description}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-gray-300">
                    <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="font-semibold">{location}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Amount</p>
                        <p className="font-semibold">{amount}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Date</p>
                        <p className="font-semibold">{date}</p>
                    </div>
                </div>

                {/* Pay bill Button */}
                <div className="flex flex-wrap gap-4 justify-center">
                    <PayBill bill={bill} date={date} />
                </div>
            </div>
        </section>
    );
};

export default BillDetail;
