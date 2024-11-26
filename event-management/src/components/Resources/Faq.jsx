import React from "react";
import faq from "../../assets/FAQ.png"
import FaqBar from "./FaqBar";

const Faq = () => {
    return (
        <>
            <div className="relative w-[100%] md:h-[712px] p-[0.75rem] bg-[#2E4052CC]"
                style={{
                    background: `url(${faq})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                 }}
            >
            <div className="absolute inset-0 bg-[#2E4052CC]"></div> 
                <div className="relative flex flex-col gap-[1.5rem] items-center">
                    <p className="font-raleway text-[1.5rem] md:text-[2.5rem] text-white font-bold">Frequently asked Questions and Answers</p>
                    <FaqBar />
                    <FaqBar />
                    <FaqBar />
                    <FaqBar />
                    <FaqBar />
                </div>
            </div>
        </>
    )
};

export default Faq;