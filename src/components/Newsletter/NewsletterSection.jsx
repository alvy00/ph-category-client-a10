import { toast } from "react-toastify";

const NewsletterSection = () => {
    const handleClick = (e) => {
        e.preventDefault();
        e.target.email.value = "";
        toast.success("Newsletter added!");
    };
    return (
        <section className="bg-gray-900 text-white py-12 px-6 text-center rounded-2xl max-w-3xl mx-auto shadow-lg my-9">
            <h2 className="text-3xl font-bold mb-3">Join Our Newsletter</h2>
            <p className="text-gray-300 mb-6">
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
                    className="w-full sm:flex-1 px-4 py-3 rounded-lg text-white focus:outline bg-gray-800"
                />
                <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-semibold">
                    Subscribe
                </button>
            </form>

            <p className="text-gray-400 text-sm mt-4">
                We respect your privacy. Unsubscribe anytime.
            </p>
        </section>
    );
};

export default NewsletterSection;
