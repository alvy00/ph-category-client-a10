import { toast } from "react-toastify";

const NewsletterSection = () => {
    const handleClick = (e) => {
        e.preventDefault();
        e.target.email.value = "";
        toast.success("Newsletter added!");
    };

    return (
        <section className="bg-base-200 py-12 px-6 text-center rounded-2xl max-w-3xl mx-auto shadow-lg my-9">
            <h2 className="text-3xl font-bold mb-3 text-base-content">
                Join Our Newsletter
            </h2>
            <p className="text-base-content/70 mb-6">
                Get the latest updates on new games, features, and exclusive
                offers — straight to your inbox.
            </p>

            <form
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                onSubmit={handleClick}
            >
                <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full sm:flex-1 px-4 py-3 rounded-lg text-base-content bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <button
                    type="submit"
                    className="cursor-pointer bg-primary hover:bg-primary-focus transition-colors px-6 py-3 rounded-lg font-semibold text-base-100"
                >
                    Subscribe
                </button>
            </form>

            <p className="text-base-content/50 text-sm mt-4">
                We respect your privacy. Unsubscribe anytime.
            </p>
        </section>
    );
};

export default NewsletterSection;
