import { FaBolt, FaLayerGroup, FaShieldAlt, FaBell } from "react-icons/fa";

const features = [
    {
        icon: <FaBolt className="text-3xl text-primary" />,
        title: "Fast Payments",
        description:
            "Pay electricity, gas, water, and internet bills instantly and securely.",
    },
    {
        icon: <FaLayerGroup className="text-3xl text-primary" />,
        title: "All-in-One Dashboard",
        description:
            "Manage all your bills and transactions from a single, user-friendly dashboard.",
    },
    {
        icon: <FaShieldAlt className="text-3xl text-primary" />,
        title: "Secure & Reliable",
        description:
            "Your payments and data are protected with top-level security protocols.",
    },
    {
        icon: <FaBell className="text-3xl text-primary" />,
        title: "Reminders & Alerts",
        description:
            "Never miss a due date with automatic notifications and reminders.",
    },
];

const Features = () => {
    return (
        <section className="bg-base-100 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mb-4">
                    Platform Features
                </h2>
                <p className="text-base-content/70 mb-12 max-w-2xl mx-auto">
                    GoBills offers powerful tools to simplify managing and
                    paying your bills efficiently.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="bg-base-200 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base-content/70 text-center">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
