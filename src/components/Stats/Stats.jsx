import {
    FaUsers,
    FaRegClock,
    FaDollarSign,
    FaCheckCircle,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaUsers className="text-3xl text-primary" />,
        value: "5,000+",
        label: "Active Users",
    },
    {
        icon: <FaDollarSign className="text-3xl text-primary" />,
        value: "120,000+",
        label: "Bills Paid",
    },
    {
        icon: <FaCheckCircle className="text-3xl text-primary" />,
        value: "99.9%",
        label: "Success Rate",
    },
    {
        icon: <FaRegClock className="text-3xl text-primary" />,
        value: "24/7",
        label: "Support",
    },
];

const Stats = () => {
    return (
        <section className="bg-base-100 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-base-content">
                    Our Platform At a Glance
                </h2>
                <p className="text-base-content/70 mb-12 max-w-2xl mx-auto">
                    GoBills makes managing your bills simple, secure, and
                    efficient. Here’s what our platform achieves for users every
                    day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="bg-base-200 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition"
                        >
                            <div className="mb-4">{stat.icon}</div>
                            <h3 className="text-2xl sm:text-3xl font-bold">
                                {stat.value}
                            </h3>
                            <p className="text-base-content/70 mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
