import { useNavigate } from "react-router";
import errorImg from "../assets/error-404.png";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-10 justify-center items-center h-full w-full my-30">
            <img src={errorImg} alt="404 error image" />
            <div className="flex flex-col justify-center items-center gap-3">
                <span className="text-4xl font-bold">
                    Oops, page not found!
                </span>
                <span className="text-md text-gray-500">
                    The page you are looking for is not available.
                </span>
            </div>
            <button
                onClick={() => navigate("/")}
                className="text-lg text-white bg-cyan-500 hover:bg-cyan-800 px-2.5 py-1 rounded-lg cursor-pointer"
            >
                Go Back
            </button>
        </div>
    );
};

export default NotFound;
