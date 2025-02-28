//import React from "react";
import bell from "../assets/bell.svg";
import headerPicture from "../assets/headerPicture.svg";
import arrowDown from "../assets/arrowDown.svg";
import NavBar from "../components/Navigation/NavBar";
import Navigation from "../components/Navigation/Navigation";
import EventsMenu from "../components/DropDownMenu/EventsMenu";

const Header = () => {
  return (
    <div className="max-w-1440px px-[2.5rem] bg-white">
      <div className="flex justify-between items-center md:h-[104px]">
        <div className="md:hidden">
          <NavBar />
        </div>
        <p className="md:text-[2rem] font-bold font-pattaya text-[#412234]">
          Tickety
        </p>
        <div className="hidden md:text-[1rem] md:text-[#806B77] md:font-raleway md:flex md:flex-row md:justify-center md:gap-[1.5rem] xl:gap-[5rem]">
          <Navigation link="/Home" label="Home" />
          <p>About Us</p>
          <p>Services</p>
          <p>Blog</p>
          <EventsMenu link="/MyEvents" label="Events" />
        </div>
        <div className="flex flex-row gap-[12px]">
          <img src={bell} alt="Notification Bell" />
          <img src={headerPicture} alt="Header Picture" />
          <img src={arrowDown} alt="Arrow Down" />
        </div>
      </div>
    </div>
  );
};

export default Header;
