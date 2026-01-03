import Category from "../Category/Category";
import RecentBills from "../RecentBills/RecentBills";

const MainContent = () => {
    return (
        <>
            <div className="w-full flex">
                {/* <div className="flex-1">
                    <Category />
                </div> */}

                <div className="flex-4">
                    <RecentBills />
                </div>
            </div>
        </>
    );
};

export default MainContent;
