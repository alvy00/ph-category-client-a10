import React from "react";
import Banner from "../components/Banner/Banner";
import MainContent from "../components/MainContent/MainContent";
import NewsletterSection from "../components/Newsletter/NewsletterSection";
import WhyChooseUs from "../components/WhyUs/WhyChooseUs";

const Home = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col">
                <Banner />
                <MainContent />
                <WhyChooseUs />
                <NewsletterSection />
            </div>
        </>
    );
};

export default Home;
