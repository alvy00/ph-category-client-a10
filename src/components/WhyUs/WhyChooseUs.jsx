import React from "react";

const WhyChooseUs = () => {
    const features = [
        {
            title: "Fast & Reliable",
            description:
                "Pay your bills quickly and securely with our streamlined platform.",
        },
        {
            title: "All-in-One Platform",
            description:
                "Manage electricity, gas, water, and internet bills in one place.",
        },
        {
            title: "Secure Payments",
            description:
                "Your data and transactions are protected with top-notch security.",
        },
        {
            title: "24/7 Support",
            description:
                "Our support team is always ready to assist you whenever needed.",
        },
    ];

    return (
        <section className="bg-base-100 py-12 px-4">
            <div className="bg-base-200 border border-base-300 rounded-3xl max-w-5xl mx-auto shadow-lg p-6 sm:p-8 md:p-10">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
                    Why Choose Us
                </h2>
                <p className="text-base-content/70 text-sm sm:text-base md:text-lg mt-4 mb-10 text-center max-w-2xl mx-auto">
                    We make paying bills easier, faster, and more convenient for
                    everyone. Experience a smarter way to manage all your
                    household expenses.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-base-100 border border-base-300 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base-content/70 text-sm sm:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
