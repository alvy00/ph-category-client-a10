import React, { useEffect } from "react";

const MyBills = () => {
    useEffect(() => {
        document.title = "GoBILLS | My Pay Bills";
    }, []);
    return <div>MyBills</div>;
};

export default MyBills;
