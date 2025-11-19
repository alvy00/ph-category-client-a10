import React, { useEffect } from "react";
import AllBills from "../components/AllBills/AllBills";

const Bills = () => {
    useEffect(() => {
        document.title = "GoBILLS | Bills";
    }, []);
    return (
        <>
            <AllBills />
        </>
    );
};

export default Bills;
