import React from "react";
import SimpleButton from "../Buttons/SimpleButton";
import eventPreview from "../../assets/eventPreview.png";
import location from "../../assets/location.svg";

const UpcomingEvents = ({props}) => {
    return (
        <div className="flex justify-center">
            <div className="xl:w-[1440px] h-[738px] bg-[#C4BAC0]">
                <div className="flex flex-row px-[2rem] h-[128px] justify-between items-center bg-white ">
                    <div className="flex flex-col items-left gap-[0.5rem] text-[#383E49] text-[1.5rem] font-raleway font-bold items-start xl:w-[534px] h-[86px]">
                        <p>Upcoming Events</p>
                        <p className="font-thin text-left text-[1rem]">These are upcoming events you can register and attend, or inspire you with your event.</p>
                    </div>
                    <SimpleButton props="View All"/>

                </div>
                <div className="flex flex-row mt-[2.5rem] justify-between items-center gap-[7rem] px-[4rem]">
                    <div className="text-[1rem] text-[#383E49] flex flex-col items-start font-thin font-raleway ">
                        <p className="font-bold text-[2rem]">Music Festival</p>
                        <p>Good music, great entertainment </p>
                        <div className="flex flex-col items-start gap-[1.5rem]">
                            <button className="w-[150px] h-[38px] mt-[8rem] border-[1px] border-[#A899A2] text-[#2A3A4B]">21st June, 2024</button>
                            <p className="text-[1.5rem] w-[140%] text-left font-bold">Let’s listen to good music and create wonderful experiences.</p>
                            <div className="flex flex-row gap-[0.25rem]">
                                <img src={location} />
                                <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
                            </div>
                            <SimpleButton props="RSVP"/>
                        </div>
                    </div>
                    <div className="items-center">
                        <img className="" src={eventPreview}></img>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default UpcomingEvents;