import React from "react";
import location from "../../assets/locationIcon.svg"
import RsvpButton from "../Buttons/RsvpButton";
import avatars from "../../assets/avatars.svg";

const SimilarEventBox = ({Head, Text, Location, Rsvp}) => {
    return (
        <div className="">
            <div className="xl:w-[750px] md:h-[233px] border-[1px] items-center rounded-[10px] border-[#A899A2]">
                <div className="flex flex-row justify-between text-[#2A3A4B] p-[1rem] text-[0.88rem] font-raleway font-normal">
                    <div className="flex flex-col items-start gap-[1rem]">
                        <p className="font-semibold text-[1.25rem]">{Head}</p>
                        <p className="w-[19rem] text-[#586675] text-left">{Text}</p>
                        <div className="flex flex-row">
                            <img src={location} alt="location" />
                            <p className="text-[#2E4052]">{Location}</p>
                        </div>
                        <RsvpButton props={Rsvp} />
                    </div>
                    <div className="flex flex-col justify-center gap-[1rem]">
                        <p className="text-left">Speakers</p>
                        <img src={avatars}></img>
                    </div>

                </div>

            </div>
        </div>
    )
};

export default SimilarEventBox;