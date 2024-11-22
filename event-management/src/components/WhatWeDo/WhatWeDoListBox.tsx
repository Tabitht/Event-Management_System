import React from "react";

const WhatWeDoListBox = ({icon, name, text}) => {
    return (
        <>
            <div className="flex gap-[1.5rem] xl:gap-[3rem] w-[100%] md:h-[130px] xl:w-[506px] h-[150px] xl:h-[142px] rounded-[8px] border-[1px] border-[#BDD9BF] bg-white items-center">
                <img className="ml-[1rem]" src={icon}></img>
                <div className="flex flex-col font-raleway text-[#212D3A] text-[1rem] md:text-[1.5rem] font-semibold">
                    <p className="text-left">{name}</p>
                    <p className="text-left md:text-[1.25rem] text-[#586675] font-normal">{text}</p>
                </div>
            </div>
        </>
    )
};

export default WhatWeDoListBox;