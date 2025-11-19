import Tab from "./Tab";

const Category = () => {
    return (
        <>
            <div className="flex flex-col gap-5 p-5">
                <span className="font-bold text-4xl">Category</span>
                <div className="flex flex-col gap-3 pl-5">
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
