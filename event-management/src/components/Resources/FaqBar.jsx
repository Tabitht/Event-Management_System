import React from "react";
import arrowDown from "../../assets/angleDown.svg"

const FaqBar = () => {
    return (
        <>
            <div className="w-[100%] xl:w-[1100px] h-[88px] bg-white rounded-[15px] px-[0.5rem] text-[0.75rem] text-left md:text-[1.25rem] font-raleway font-semibold flex justify-between items-center ">
                <p>What are some important factors to consider during an event?</p>
                <img className="w-[12%] md:w-[8%] xl:w-auto" src={arrowDown}></img>
            </div>
        </>
    )
};

export default FaqBar;