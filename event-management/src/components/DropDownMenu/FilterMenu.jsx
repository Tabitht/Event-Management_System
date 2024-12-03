import angle from "../../assets/arrowDown.svg";

const FilterMenu = () => {
    return (
        <>
            <div className="w-[117px] bg-white p-[1rem] h-[48px] rounded-[8px] border-[1px] border-[#C4BAC0] font-raleway text-[0.65rem] md:text-[0.9rem] text-center text-[#737F8B] flex items-center">
                <div className="flex gap-[0.5rem]">
                    <p>Filter By</p>
                    <img src={angle} />
                </div>
            </div>
        </>
    )
};

export default FilterMenu;