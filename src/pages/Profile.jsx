/* eslint-disable react-hooks/set-state-in-effect */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
    const { user, updateUser, setLoading } = useContext(AuthContext);
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        document.title = "GoBILLS | Profile";
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
        }
    }, [user]);

    if (!user) return <p className="text-center mt-10">Loading...</p>;

    const handleUpdate = () => {
        updateUser(displayName, photoURL)
            .then(() => {
                toast.success("Profile Updated!");
                setLoading(false);
            })
            .catch((err) => console.error(err));
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-base-900 text-gray-100 px-4 pt-16">
            <div className="bg-base-200/40 backdrop-blur-md shadow-lg rounded-2xl p-8 w-full max-w-lg text-center border border-base-300/40">
                <img
                    src={photoURL || "/default-avatar.png"}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-5 border-2 border-base-300 shadow-sm"
                />

                {/* Editable Fields */}
                <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full mb-3 px-4 py-2 rounded-lg bg-base-300 text-gray-100 border border-base-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="Photo URL"
                    className="w-full mb-3 px-4 py-2 rounded-lg bg-base-300 text-gray-100 border border-base-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <p className="text-gray-300 mb-1">{user.email}</p>

                <button
                    onClick={handleUpdate}
                    className="btn btn-neutral mt-5 w-full"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;
