import React from "react";
import party from "../../assets/partyCard.svg"
import concert from "../../assets/concertCard.png"
import conference from "../../assets/conferenceCard.svg"
import techEvent from "../../assets/event_card.jpg"
import others from "../../assets/othersCard.svg"

const EventType = () => {
    return (
        <>
            <div className="bg-white w-[100%] xl:w-[1440px] xl:px-[1.5rem]">
                <p className="text-[1.5rem] font-raleway font-bold text-[#131B22] text-left">What type of event are you organizing</p>
                <p className="text-[1rem] font-raleway text-[#586675] text-left mt-[0.5rem]">Select the type of event you want to create from these categories</p>
                <div className="hidden md:flex flex-col md:flex-row gap-[0.5rem] mt-[1rem] justify-center">
                    <img className="md:w-[20%] xl:w-[12%]" src={party}></img>
                    <img className="md:w-20%] xl:w-[12%]" src={conference}></img>
                    <img className="md:w-[20%] xl:w-[12%]" src={concert}></img>
                    <img className="md:w-[20%] xl:w-[12%]" src={techEvent}></img>
                    <img className="md:w-[20%] xl:w-[12%]" src={others}></img>
                </div>
                <div className="md:hidden flex flex-col mt-[1rem] gap-[1rem]">
                    <div className="flex justify-between">
                        <img className="w-[40%]" src={party}></img>
                        <img className="w-[40%]" src={conference}></img>
                    </div>
                    <div className="flex justify-between">
                        <img className="w-[40%]" src={concert}></img>
                        <img className="w-[40%]" src={techEvent}></img>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-[40%]" src={others}></img>
                    </div>

                </div>
            </div>
        </>
    )
};

export default EventType;