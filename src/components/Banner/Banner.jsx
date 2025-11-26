import Slider from "react-slick";
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typewriter from "typewriter-effect";

const Banner = () => {
    const slides = [
        {
            img: banner1,
            title: "Pay Bills in Seconds, Anywhere",
            subtitle:
                "Manage all your utilities from your phone or computer — lightning-fast and hassle-free.",
        },
        {
            img: banner2,
            title: "All Your Bills, One Secure Place",
            subtitle:
                "Keep track of electricity, water, internet, and more, safely in a single app.",
        },
        {
            img: banner3,
            title: "Never Miss a Payment Again",
            subtitle:
                "Get reminders and instant notifications so you’re always on time.",
        },
        {
            img: banner4,
            title: "Simple. Fast. Stress-Free.",
            subtitle:
                "Say goodbye to queues and long waiting times — paying bills has never been easier.",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    return (
        <div className="w-full relative overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full">
                        <img
                            className="
                                w-full 
                                h-[35vh] 
                                sm:h-[45vh] 
                                md:h-[55vh] 
                                lg:h-[65vh] 
                                xl:h-[75vh]
                                object-cover
                            "
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                        />

                        <div
                            className="
                                absolute inset-0 bg-black/40 
                                flex flex-col justify-center

                                px-4 py-6 
                                sm:px-6 sm:py-10
                                md:px-10 md:py-14
                                lg:px-20 lg:py-16
                            "
                        >
                            <h2
                                className="
                                    text-white font-bold mb-3 
                                    text-xl 
                                    sm:text-3xl 
                                    md:text-4xl 
                                    lg:text-5xl
                                "
                            >
                                <Typewriter
                                    options={{
                                        strings: slide.title,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h2>

                            <p
                                className="
                                    text-white 
                                    text-xs 
                                    sm:text-sm 
                                    md:text-base 
                                    lg:text-lg 
                                    mb-4
                                "
                            >
                                {slide.subtitle}
                            </p>

                            <button
                                className="
                                    bg-cyan-500 hover:bg-cyan-600 
                                    text-white 
                                    px-4 py-2 
                                    sm:px-5 sm:py-2 
                                    rounded-md 
                                    text-sm 
                                    sm:text-base
                                    transition

                                    w-2/12
                                "
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
