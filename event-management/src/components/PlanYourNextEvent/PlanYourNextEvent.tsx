import React from "react";
import image from "../../assets/createEditManageEvent.jpg"
import NavButton from "../Buttons/NavButton";

const PlanYourNextEvent = () => {
    return (
        <>
            <div className="relative w-full md:h-[460px] px-[1rem] xl:px-[10rem] py-[3rem]"
                style={{
                    background: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                 }}
            >
            <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative flex flex-col justify-center items-center gap-[1.5rem] text-white font-raleway">
                    <p className="font-bold text-[1.5rem] md:text-[2.5rem]">Create, view and manage your event on our trusted platform for your attendees</p>
                    <p className="text-[#ECE9EB] text-[1rem] md:text-[1.5rem] px-[2rem] xl:px-[6rem]">Easily create and manage all your events and deliver a memorable experience for all your audience</p>
                    <NavButton Link="/Login" />
                 </div>
            </div>
        </>
    )
};

export default PlanYourNextEvent;