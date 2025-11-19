import { Carousel } from "flowbite-react";

const Banner = () => {
    return (
        <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
            <Carousel
                leftControl=" "
                rightControl=" "
                className="h-full w-full"
            >
                <img
                    className="w-full h-full object-cover"
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="Slide 1"
                />
                <img
                    className="w-full h-full object-cover"
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="Slide 2"
                />
                <img
                    className="w-full h-full object-cover"
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="Slide 3"
                />
                <img
                    className="w-full h-full object-cover"
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="Slide 4"
                />
                <img
                    className="w-full h-full object-cover"
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="Slide 5"
                />
            </Carousel>
        </div>
    );
};

export default Banner;
