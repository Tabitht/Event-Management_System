import React from "react";
const EventPopUpButton = ({props}) => {
    return (
        <>
            <div className="">
                <button className="w-[8rem] xl:w-[14.37rem] h-[1.5rem] md:h-[3rem] bg-[#ECE9EB] rounded-[5px] text-[0.5rem] md:text-[1rem] text-center font-raleway text-[#586675]">{props}</button>
            </div>
        </>
    )
};

export default EventPopUpButton;