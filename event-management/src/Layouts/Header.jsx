//import React from "react";
import bell from "../assets/bell.svg";
import headerPicture from "../assets/headerPicture.svg";
import arrowDown from "../assets/arrowDown.svg";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[90%] items-center xl:w-[1440px] xl:h-[104px] bg-[#FFFFFF] border-[1px] border-[#806B77] flex flex-row xl:gap-[150px]">
                <div className="text-[32px] font-bold text-[#412234] font-pattaya xl:ml-[80px]">Tickety</div>
                <div className="text-[16px] text-[#806B77] font-raleway flex flex-row justify-center xl:gap-[48px]">
                    <p className="text-[#1B0E16] font-bold">Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Events</p>
                </div>
                <div className="flex flex-row xl:ml-[100px] gap-[12px]">
                    <img src={bell} alt="Notification Bell" />
                    <img src={headerPicture} alt="Header Picture" />
                    <img src={arrowDown} alt="Arrow Down" />
                </div>

            </div>
        </div>
    )
};

export default Header