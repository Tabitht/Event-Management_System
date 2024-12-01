//import React from "react";
import bell from "../assets/bell.svg";
import headerPicture from "../assets/headerPicture.svg";
import arrowDown from "../assets/arrowDown.svg";
import NavBar from "../components/NavBar/NavBar";
import Navigation from "../components/NavBar/Navigation";

const Header = () => {
    return (
        <div className="flex justify-center">
            <div className="items-center w-screen md:h-[104px] bg-[#FFFFFF] border-[1px] px-[1.25rem] xl:px-[3rem] border-[#806B77] flex flex-row justify-between">
                <div className="md:hidden"><NavBar /></div>
                <div className="md:text-[2rem] font-bold text-[#412234] font-pattaya">Tickety</div>
                <div className="hidden md:text-[1rem] md:text-[#806B77] md:font-raleway md:flex md:flex-row md:justify-center md:gap-[1.5rem] xl:gap-[3rem]">
                    <p className="text-[#1B0E16] font-bold">Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <Navigation link="/MyEvents" label="Events" />
                </div>
                <div className="flex flex-row gap-[12px]">
                    <img src={bell} alt="Notification Bell" />
                    <img src={headerPicture} alt="Header Picture" />
                    <img src={arrowDown} alt="Arrow Down" />
                </div>

            </div>
        </div>
    )
};

export default Header;