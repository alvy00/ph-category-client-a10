import Tab from "./Tab";

const Category = () => {
    return (
        <>
            <div
                className="
                    flex flex-col gap-5 
                    p-4 sm:p-5 md:p-8 lg:p-10
                "
            >
                <span
                    className="
                        font-bold 
                        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                    "
                >
                    Category
                </span>

                <div
                    className="
                        flex flex-col 
                        gap-2 sm:gap-3 
                        pl-3 sm:pl-5 md:pl-8
                    "
                >
                    <Tab name={"Electricity"} />
                    <Tab name={"Gas"} />
                    <Tab name={"Water"} />
                    <Tab name={"Internet"} />
                </div>
            </div>
        </>
    );
};

export default Category;
