import React from "react";
import image from "../../assets/createEditManageEvent.jpg"

const PlanYourNextEvent = () => {
    return (
        <>
            <div className="relative w-[100%] md:h-[460px] px-[1rem] xl:px-[10rem] py-[3rem]"
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
                    <button className="w-[70%] md:w-[241px] rounded-[8px] h-[56px] border-[1px] bg-white border-[#806B77] text-[0.75rem] text-[#412234] md:text-[1.25rem] text-center font-semibold">Plan your next Event</button>
                 </div>
            </div>
        </>
    )
};

export default PlanYourNextEvent;