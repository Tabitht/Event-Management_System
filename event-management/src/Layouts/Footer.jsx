//import React from "react";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import email from "../assets/email.svg";

const Footer = () => {
  return (
    <div className="xl:h-[586px] bg-[#131B22]">
      <p className="md:hidden ml-[0.5rem] text-[1.25rem] text-white text-left font-bold">
        Tickety**
      </p>
      <p className="md:hidden ml-[0.5rem] w-[90%] text-white text-[0.75rem] font-thin text-left">
        Tickety is an e booking app that aims to make organizing events easy and
        streamlined for organizers and event attendees.
      </p>
      <div className="md:hidden ml-[0.5rem] flex flex-col gap-[10px] md:gap-[20px]">
        <p className="text-[1.25rem] font-bold mt-[1rem] text-white text-left">
          Follow us on
        </p>
        <div className="flex flex-row gap-2">
          <img src={instagram}></img>
          <img src={facebook}></img>
          <img src={twitter}></img>
          <img src={whatsapp}></img>
          <img src={youtube}></img>
        </div>
      </div>
      <div className="flex flex-row mt-[20px] gap-4 xl:gap-[30px]">
        <div className="flex flex-col text-[#FFFFFF] text-[0.5rem] md:text-[1rem] xl:text-[16px] items-start font-thin font-raleway xl:ml-[50px] xl:gap-[40px]">
          <p className="hidden md:ml-[0.5rem] md:block xl:text-[32px] font-bold">
            Tickety**
          </p>
          <p className="hidden md:ml-[0.5rem] md:block md:w-[90%] xl:w-[325px] text-left">
            Tickety is an e booking app that aims to make organizing events easy
            and streamlined for organizers and event attendees.
          </p>
          <div className="hidden md:ml-[0.5rem] md:flex md:flex-col gap-[10px] md:gap-[20px]">
            <p className="text-[1rem] font-bold md:text-[28px] text-left">
              Follow us on
            </p>
            <div className="flex flex-row xl:gap-[37px]">
              <img src={instagram}></img>
              <img src={facebook}></img>
              <img src={twitter}></img>
              <img src={whatsapp}></img>
              <img src={youtube}></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-[#FFFFFF] text-[0.75rem] md:text-[1rem] text-left font-thin font-raleway xl:ml-[30px] xl:gap-[40px]">
          <p className="xl:text-[32px] font-bold">Home</p>
          <p>Gallery</p>
          <p>Blog post</p>
          <p>About us</p>
          <p>FAQ</p>
        </div>
        <div className="flex flex-col text-[#FFFFFF] text-[0.75rem] md:text-[1rem] text-left font-thin font-raleway xl:ml-[20px] xl:gap-[40px]">
          <p className="xl:text-[32px] font-bold">Services</p>
          <p>Event management</p>
          <p>Event planning</p>
          <p>Analytics</p>
          <p>Feed back and surveys</p>
        </div>
        <div className="flex flex-col text-[#FFFFFF] md:mr-[0.5rem] text-[0.75rem] md:text-[1rem] xl:text-[16px] text-left font-thin font-raleway xl:ml-[20px] xl:gap-[40px]">
          <p className="xl:text-[32px] font-bold">Events</p>
          <p>Corporate</p>
          <p>Entertainment</p>
          <p>Reunions</p>
          <p>Festivals</p>
        </div>
        <div className="hidden xl:flex xl:flex-col text-[#FFFFFF] xl:text-[16px] items-start text-left font-thin font-raleway xl:ml-[20px] xl:gap-[40px]">
          <p className="xl:text-[32px] font-bold">Contact us</p>
          <div className="flex flex-row gap-[10px]">
            <img src={phone}></img>
            <p>+172 895 2342</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <img src={email}></img>
            <p>info@tickety.com</p>
          </div>
          <div className="flex flex-row gap-[10px]">
            <img src={location}></img>
            <p>213 St Louis Avenue, USA</p>
          </div>
        </div>
      </div>
      <p className="xl:hidden ml-[0.5rem] my-[0.5rem] text-[1.25rem] md:text-[1.75rem] text-white text-left font-bold">
        Contact us
      </p>
      <div className="xl:hidden flex flex-row gap-4 text-[#FFFFFF] text-[0.5rem] md:text-[1rem] items-start text-left font-thin font-raleway">
        <div className="flex ml-[0.5rem] flex-row md:gap-[10px]">
          <img src={phone}></img>
          <p>+172 895 2342</p>
        </div>
        <div className="flex flex-row md:gap-[10px]">
          <img src={email}></img>
          <p>info@tickety.com</p>
        </div>
        <div className="flex flex-row md:gap-[10px]">
          <img src={location}></img>
          <p>213 St Louis Avenue, USA</p>
        </div>
      </div>
      <div className="flex ml-[0.5rem] flex-col mt-[40px] items-start xl:ml-[50px] gap-[10px]">
        <p className="text-[#FFFFFF] xl:text-[16px] items-start font-thin font-raleway">
          Subscribe to get latest updates
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-[60%] pl-[0.5rem] xl:w-[369px] h-[56px] rounded-l-[8px]"
          />
          <button
            type="submit"
            className="bg-[#412234] w-[40%] xl:w-[131px] text-white h-[56px] rounded-r-[8px] text-center xl:text-[20px] font-raleway"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="bg-[#ECE9EB] h-[56px] mt-[70px] text-[16px] flex justify-center items-center text-[#2E4052] font-raleway font-thin">
        All right reserved 2024
      </div>
    </div>
  );
};

export default Footer;
