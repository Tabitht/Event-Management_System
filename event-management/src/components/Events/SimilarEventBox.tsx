import React from "react";
import location from "../../assets/locationIcon.svg"
import RsvpButton from "../Buttons/RsvpButton";
import avatars from "../../assets/avatars.svg";

const SimilarEventBox = ({Head, Text, Location, Rsvp}) => {
    return (
        <div className="">
            <div className="xl:w-[750px] md:h-[233px] md:border-[1px] items-center rounded-b-[10px] md:rounded-[10px] border-[#A899A2]">
                <div className="flex flex-col gap-[1rem] md:flex-row justify-between text-[#2A3A4B] p-[1rem] text-[0.88rem] font-raleway font-normal">
                    <div className="flex flex-col items-start gap-[1rem]">
                        <p className="font-semibold text-[1rem] md:text-[1.25rem]">{Head}</p>
                        <p className="w-[100%] md:w-[19rem] text-[#586675] text-left">{Text}</p>
                        <div className="flex flex-row">
                            <img src={location} alt="location" />
                            <p className="text-[#2E4052] text-start">{Location}</p>
                        </div>
                        <RsvpButton props={Rsvp} />
                    </div>
                    <div className="flex md:flex-col md:justify-center gap-[1rem]">
                        <p className="text-left">Speakers</p>
                        <img src={avatars}></img>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default SimilarEventBox;