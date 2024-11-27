import React from "react";

const NewsLetter = () => {
    return (
        <>
            <div className="w-[100%] md:w-[670px] xl:w-[840px] md:h-[253px] bg-[#BEC4C9] px-[0.5rem] py-[3rem] md:p-[3rem] font-raleway text-[#757575]">
                <div className="flex flex-col gap-4 justify-center items-center text-center">
                    <p className="text-[1rem] md:text-[1.25rem] font-bold text-[#1E1E1E]">Join our community</p>
                    <p>Learn more about organizing and attending successful events.</p>
                    <div className="flex gap-1 md:gap-4">
                        <form>
                        <input 
                            type="email"
                            placeholder="enter your email"
                            className="w-[100%] xl:w-[249px] pl-[0.5rem] md:pl-[1rem] h-[40px] bg-white rounded-[8px]"
                        />
                        </form>
                        <button className="w-[50%] md:w-[100px] h-[40px] rounded-[8px] bg-[#2C2C2C] text-center">Subscribe</button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NewsLetter;