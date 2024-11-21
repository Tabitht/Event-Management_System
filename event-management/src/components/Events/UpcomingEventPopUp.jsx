import cancel from "../../assets/cancel.svg"
import EventPopUpButton from "../Buttons/EventPopUpButton";
const UpcomingEventPopUp = () => {
    return (
        <div className="flex justify-center md:mt-[4rem] xl:mt-[5.5rem]">
            <div className="xl:w-[260px] h-[200px] md:h-[398px] rounded-[5px] items-center bg-white p-[0.6rem]">
                 <div className="flex flex-col gap-[0.5rem] md:gap-[1rem] text-[0.5rem] md:text-[1rem] text-[#131B22] font-raleway ">
                    <div className="flex justify-end"><img className="w-[10%] h-[30%]" src={cancel}/></div>
                    <p className="font-bold">My Upcoming Events</p>
                    <div className="flex justify-center ">
                        <div className="flex flex-row gap-[1.5rem]">
                            <div className="flex flex-col">
                                <p className="font-bold">10</p>
                                <p>Days</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">09</p>
                                <p>Hrs</p>
                            </div>
                            <div className="flex flex-col">
                                <p className="font-bold">54</p>
                                <p>Min</p>
                            </div>
                        </div>
                    </div>
                    <EventPopUpButton props="Youth Conference" />
                    <EventPopUpButton props="Ikeja. Lagos" />
                    <EventPopUpButton props="Education" />
                    <button className="md:w-[230px] md:h-[48px] rounded-[8px] bg-[#2E4052] text-center font-bold text-[#ECE9EB]">
                        Manage your Event
                    </button>
                 </div>
            </div>
        </div>
    )
};

export default UpcomingEventPopUp;