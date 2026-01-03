const services = [
    {
        title: "Bill Payments",
        description:
            "Pay electricity, water, gas, internet, and other utility bills securely from one platform.",
        icon: "💳",
    },
    {
        title: "Add & Manage Bills",
        description:
            "Add new bills, edit existing ones, and manage all your payments from a single dashboard.",
        icon: "🧾",
    },
    {
        title: "Bill Reminders",
        description:
            "Receive timely reminders before due dates to avoid late fees and missed payments.",
        icon: "⏰",
    },
    {
        title: "Payment History",
        description:
            "View detailed payment history with clear records and downloadable receipts.",
        icon: "📊",
    },
    {
        title: "Secure Transactions",
        description:
            "All transactions are protected using industry-standard security and encryption.",
        icon: "🔐",
    },
    {
        title: "Multiple Payment Options",
        description:
            "Pay using wallets, cards, or bank transfers for maximum convenience.",
        icon: "🏦",
    },
];

const Services = () => {
    return (
        <section className="py-16 px-4 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-base-content">
                    Our Services
                </h2>
                <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                    GoBills simplifies bill management by giving you a secure,
                    fast, and organized way to handle all your payments in one
                    place.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="card bg-base-100 shadow-md hover:shadow-xl transition"
                    >
                        <div className="card-body">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="card-title text-base-content">
                                {service.title}
                            </h3>
                            <p className="text-base-content/70">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
