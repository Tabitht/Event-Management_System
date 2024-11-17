import React from "react";

const SimpleButton = ({props}) => {
    return (
        <>
            <div className="">
                <button className="xl:w-[256px] h-[56px] bg-[#412234] rounded-[8px] text-[1.25rem] text-center font-raleway text-white">{props}</button>
            </div>
        </>
    )
};

export default SimpleButton;