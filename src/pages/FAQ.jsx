import { useState } from "react";

const faqs = [
    {
        q: "What types of bills can I pay?",
        a: "You can pay Electricity, Gas, Water, and Internet bills directly from our platform.",
    },
    {
        q: "How do I add a new bill?",
        a: "Go to the 'Add Bill' page, fill in the required fields such as title, category, amount, and date, then submit.",
    },
    {
        q: "Can I view all my past bills?",
        a: "Yes, all bills are listed under the 'All Bills' section with filters to help you organize them easily.",
    },
    {
        q: "Is my personal information secure?",
        a: "Absolutely. All bill data and user information are stored securely using end-to-end protection methods.",
    },
    {
        q: "Why is my bill category filter not showing some bills?",
        a: "Make sure the bill category matches exactly with the filter (Electricity, Gas, Water, Internet).",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-center mb-10">
                Frequently Asked Questions
            </h1>

            <div className="space-y-4">
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className="border border-base-300 rounded-lg p-4 bg-base-100"
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center text-left"
                        >
                            <span className="text-lg font-semibold">
                                {item.q}
                            </span>
                            <span className="text-xl">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === index && (
                            <p className="mt-3 text-base text-gray-600">
                                {item.a}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
