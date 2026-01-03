const testimonials = [
    {
        name: "Rahim Ahmed",
        role: "Small Business Owner",
        feedback:
            "GoBills has completely simplified how I manage utility payments. I no longer worry about missing due dates.",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Nusrat Jahan",
        role: "University Student",
        feedback:
            "Adding and paying bills is super easy. The reminders feature is a lifesaver for someone as busy as me.",
        avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
        name: "Tanvir Hasan",
        role: "Software Engineer",
        feedback:
            "Clean UI, smooth experience, and secure payments. GoBills is exactly what I needed.",
        avatar: "https://i.pravatar.cc/100?img=56",
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-base-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">What Our Users Say</h2>
                    <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                        Trusted by users who rely on GoBills to manage and pay
                        their bills efficiently every day.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="card bg-base-200 border border-base-300 shadow-md"
                        >
                            <div className="card-body">
                                <p className="text-base-content/80">
                                    “{t.feedback}”
                                </p>

                                <div className="flex items-center gap-4 mt-6">
                                    <div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary/20 ring-offset-base-200 ring-offset-2">
                                            <img src={t.avatar} alt={t.name} />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            {t.name}
                                        </h4>
                                        <p className="text-sm text-base-content/60">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
