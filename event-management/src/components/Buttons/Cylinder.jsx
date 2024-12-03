
// eslint-disable-next-line react/prop-types
const Cylinder = ({ props, bgColour="bg-white", textColour, width }) => {
    return (
        <>
            <button className={`${width} h-[37px] ${bgColour} rounded-[100px] border-[1px] border-[#586675] text-[0.5rem] md:text-[0.75rem] text-center font-raleway ${textColour}`}>{props}</button>
        </>
    )
};

export default Cylinder;