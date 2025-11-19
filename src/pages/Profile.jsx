import React, { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        document.title = "GoBILLS | Profile";
    }, []);
    return <div>Profile</div>;
};

export default Profile;
