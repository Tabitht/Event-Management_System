// import React from "react";

// eslint-disable-next-line react/prop-types
const SimpleButton = ({ props }) => {
    return (
        <>
            <button className="w-[100%] md:w-[256px] h-[56px] bg-[rgb(65,34,52)] rounded-[4px] md:rounded-[8px] text-[0.75rem] md:text-[1.25rem] text-center font-raleway text-white">{props}</button>
        </>
    )
};

export default SimpleButton;