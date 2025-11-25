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
                    <div key={index} className="relative w-full h-full ">
                        <img
                            className="w-full h-[50vh] object-cover"
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                        />
                        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 md:p-12 lg:p-24">
                            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                                <Typewriter
                                    options={{
                                        strings: slide.title,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h2>
                            <p className="text-white text-sm md:text-lg mb-6">
                                {slide.subtitle}
                            </p>
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md transition">
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
