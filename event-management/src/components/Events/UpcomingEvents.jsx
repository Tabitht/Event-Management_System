import SimpleButton from "../Buttons/SimpleButton";
import eventPreview from "../../assets/eventPreview.png";
import location from "../../assets/location.svg";

const UpcomingEvents = () => {
    return (
        <div className="flex justify-center">
            <div className="w-[100%] xl:h-[738px] bg-[#C4BAC0]">
                <div className="flex flex-row px-[1rem] md:px-[2rem] h-[128px] md:h-[140px] xl:h-[128px] justify-between items-center bg-white ">
                    <div className="flex flex-col items-left gap-[0.5rem] text-[#383E49] text-[1rem] md:text-[1.5rem] font-raleway font-bold items-start xl:w-[534px] h-[86px]">
                        <p className="font-bold">Upcoming Events</p>
                        <p className="text-left font-light text-[0.75rem] w-[90%] md:text-[1rem]">These are upcoming events you can register and attend, or inspire you with your event.</p>
                    </div>
                    <SimpleButton props="View All"/>

                </div>
                <div className="flex flex-row justify-between items-center md:gap-[4rem] xl:gap-[10rem] p-[2rem] md:p-[4rem]">
                    <div className="text-[0.75rem] md:text-[1rem] text-[#383E49] flex flex-col items-start font-raleway ">
                        <p className="text-start font-bold text-[1rem] md:text-[2rem]">Music Festival</p>
                        <p className="text-start">Good music, great entertainment </p>
                        <div className="block xl:hidden mt-[1rem]">
                            <img className="" src={eventPreview}></img>
                        </div>
                        <div className="flex flex-col items-start gap-[1.5rem]">
                            <button className="w-[100%] md:w-[150px] h-[38px] mt-[4rem] md:mt-[8rem] border-[1px] border-[#A899A2] text-[#2A3A4B]">21st June, 2024</button>
                            <p className="text-[1rem] md:text-[1.5rem] xl:w-[140%] text-left font-bold">Let’s listen to good music and create wonderful experiences.</p>
                            <div className="flex flex-row gap-[0.25rem]">
                                <img src={location} />
                                <p className="text-start">2464 Royal Ln. Mesa, New Jersey 45463</p>
                            </div>
                            <SimpleButton props="RSVP"/>
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <img className="" src={eventPreview}></img>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default UpcomingEvents;