//import React from "react";
import ArrowLeft from "../assets/ArrowLeft.svg";
import Header from "../Layouts/Header";
import search from "../assets/searchIcon.svg";
import image1 from "../assets/YouthConferenceEvent.png";
import SimpleButton from "../components/Buttons/SimpleButton";
//import Navigation from "../components/NavBar/Navigation";
const MyEvents = () => {
    return (
        <div className="bg-[#C4BAC0] w-full m-auto">
            <Header />
            <div className="bg-[#C4BAC0] p-[1rem] md:p-[3rem] text-[0.75rem] text-[#131B22] md:text-[1rem] font-raleway">
                <div className="flex flex-col gap-[2rem]">
                    <div className="flex flex-col items-start gap-[1rem]">
                        <div className="flex gap-[1rem]">
                            <img className="w-[20%] md:w-auto" src={ArrowLeft} />
                            <p className="font-semibold text-[1.5rem] md:text-[2rem]">My Events</p>
                        </div>
                        <form>
                            <div className="relative flex gap-[1rem]">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-[0.75rem]" >
                                    <img src={search} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="search..."
                                    className="w-[100%] md:w-[437px] xl:w-[537px] h-[48px] pl-[3rem] rounded-[4px] bg-white flex justify-center"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col gap-[1rem] text-start">
                        <p className="text-[1.5rem] md:text-[2rem] font-bold">Upcoming Events</p>
                        <div className="flex flex-row gap-[1rem]">
                            <div className="flex flex-col gap-[0.5rem]">
                                <img src={image1}></img>
                                <p className="text-[1rem] md:text-[1.5rem] font-bold">Youth Conference</p>
                                <p className="text-[#586675]">Emerging technologies and students at the forefront of driving innovations. Youths as leaders need to immense themselves in creating conducive environments for driving the force of change they want to see. </p>
                                <div className="flex md:flex-row-reverse"><SimpleButton props="View Details" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[1rem] text-start">
                        <p className="text-[1.5rem] md:text-[2rem] font-bold">Past Events</p>
                        <div className="flex flex-col gap-[0.5rem]">
                            <img src={image1}></img>
                            <p className="text-[1rem] md:text-[1.5rem] font-bold">Youth Conference</p>
                            <p className="text-[#586675]">Emerging technologies and students at the forefront of driving innovations. Youths as leaders need to immense themselves in creating conducive environments for driving the force of change they want to see. </p>
                            <div className="flex md:flex-row-reverse"><SimpleButton props="View Details" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEvents;