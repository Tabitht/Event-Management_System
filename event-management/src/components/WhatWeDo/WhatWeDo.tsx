import React from "react";
import whatWeDo from "../../assets/WhatWeDo.png"
import WhatWeDoListBox from "./WhatWeDoListBox";
import note from "../../assets/note.svg"
import audience from "../../assets/audience.svg"
import ticket from "../../assets/ticket.svg"

const WhatWeDo = () => {
    return (
        <>
            <div className="bg-white w-[100%] xl:w-[1440px] xl:p-[1.5rem] text-[1.5rem] text-[#131B22] font-bold font-raleway">
                <p className="text-left mt-[1rem]">What we do</p>
                <p className="mt-[0.5rem] text-left text-[1rem] text-[#586675] font-normal">We help you create a seamless event fo your attendees</p>
                <div className="flex flex-col md:flex-row gap-[1.5rem] my-[1rem]">
                    <img className="hidden md:block md:w-[35%] xl:w-[45%]" src={whatWeDo}></img>
                    <div className="flex flex-col gap-[1.5rem] xl:gap-[2.5rem]">
                        <WhatWeDoListBox icon={note} name="Create your personal event" text="Organize a seamless experience for your customers at your event  like never before." />
                        <WhatWeDoListBox icon={audience} name="Reach more Audience" text="Reach new customers and get more audience to participate at your event." />
                        <WhatWeDoListBox icon={ticket} name="Book a Ticket" text="Get a ticket and RSVP for your favourite event with ease" />
                    </div>
                </div>   
            </div>
        </>
    )
};

export default WhatWeDo;