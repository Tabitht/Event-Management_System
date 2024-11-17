import React from "react";

const RsvpButton = ({props}) => {
    return (
        <>
            <div className="">
                <button className="w-[8rem] h-[38px] border-[1px] border-[#412234] rounded-[0.25rem] text-[1rem] font-semibold text-center font-raleway text-[#2A3A4B]">{props}</button>
            </div>
        </>
    )
};

export default RsvpButton;