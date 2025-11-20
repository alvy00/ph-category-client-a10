import { use, useEffect } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Profile = () => {
    const { user } = use(AuthContext);
    //console.log(user);
    useEffect(() => {
        document.title = "GoBILLS | Profile";
    }, []);
    if (!user) return;

    return (
        <div className="flex flex-col items-center justify-center h-[80vh] bg-base-900 text-gray-100 px-4">
            <div className="bg-base-200/40 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-md text-center border border-base-300/40">
                <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-2 border-base-300 shadow-sm"
                />

                <h2 className="text-2xl font-semibold mb-2">
                    {user.displayName}
                </h2>
                <p className="text-gray-300 mb-1">{user.email}</p>
                <Link>
                    {" "}
                    <button className="btn btn-neutral mt-5">
                        Update Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
