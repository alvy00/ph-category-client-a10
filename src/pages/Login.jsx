import React, { use, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { user, setUser, signIn, googleSignIn, setLoading } =
        use(AuthContext);
    const [email, setEmail] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    //console.log(location);

    useEffect(() => {
        document.title = "GoBILLS | Login";
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signIn(email, password).then((userCred) => {
                const user = userCred.user;
                setLoading(false);
                setUser(user);
            });

            navigate(`${location.state ? location.state : "/"}`);
            toast.success(`User logged in!`);
            //console.log(user);
        } catch (error) {
            toast.error(error.code);
        }
    };

    const handleGoogleLogin = async (e) => {
        e.preventDefault();
        await googleSignIn().then(() => {
            navigate("/");
            toast.success(`User logged in!`);
        });
    };

    const handleForgotPass = (e) => {
        e.preventDefault();
        //console.log(email);
        navigate(`/auth/reset/${email}`);
    };

    if (user) {
        return <Navigate to="/"></Navigate>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-lg">Login</legend>

                <label className="label">Email</label>
                <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                />

                <label className="label">Password</label>
                <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                />
                <span
                    className="cursor-pointer w-[45%]"
                    onClick={handleForgotPass}
                >
                    Forgot your password?
                </span>

                <button className="btn btn-neutral mt-4">Login</button>
                <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black border-[#e5e5e5] mt-2"
                >
                    <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path
                                fill="#34a853"
                                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                            ></path>
                            <path
                                fill="#4285f4"
                                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                            ></path>
                            <path
                                fill="#fbbc02"
                                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                            ></path>
                            <path
                                fill="#ea4335"
                                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                            ></path>
                        </g>
                    </svg>
                    Login with Google
                </button>
                <span className="text-md mt-1">
                    Don't have an account?{" "}
                    <span
                        className="font-bold cursor-pointer text-blue-800"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </span>
                </span>
            </fieldset>
        </form>
    );
};

export default Login;
