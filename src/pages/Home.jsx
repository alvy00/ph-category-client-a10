import { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import MainContent from "../components/MainContent/MainContent";
import NewsletterSection from "../components/Newsletter/NewsletterSection";
import WhyChooseUs from "../components/WhyUs/WhyChooseUs";
import Testimonials from "../components/Testimonials/Testimonials";
import Stats from "../components/Stats/Stats";
import Features from "../components/Features/Features";

const Home = () => {
    useEffect(() => {
        document.title = "GoBILLS | Home";
    }, []);
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Banner />
                <MainContent />
                <WhyChooseUs />
                <Features />
                <Stats />
                <Testimonials />
                <NewsletterSection />
            </div>
        </>
    );
};

export default Home;
