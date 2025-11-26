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
        <section className="bg-gray-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 rounded-3xl max-w-5xl mx-auto shadow-xl my-8 sm:my-10 md:my-12">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-center">
                Why Choose Us
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 text-center max-w-xl sm:max-w-2xl mx-auto">
                We make paying bills easier, faster, and more convenient for
                everyone. Experience a smarter way to manage all your household
                expenses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-xl shadow hover:shadow-cyan-500/50 transition-shadow duration-300"
                    >
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
