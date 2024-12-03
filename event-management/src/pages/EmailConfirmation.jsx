import arrow from "../assets/arrowFullRight.svg";
import SimpleButton from "../components/Buttons/SimpleButton";
import image from "../assets/YouthConferenceEvent.png";
import ticket from "../assets/smallTicket.svg";
import location from "../assets/lightLocation.svg";
import clock from "../assets/time.svg";
import RsvpButton from "../components/Buttons/RsvpButton";

const EmailConfirmation = () => {
    return (
        <div className="bg-[#ECE9EB] p-[1rem] md:p-[2rem]">
            <div className="text-[#2A3A4B] text-[0.75rem] md:text-[1rem] font-raleway flex flex-col gap-[2rem]">
                <div className="flex gap-[1rem] justify-end items-center">
                    <p className="text-[1.5rem] md:text-[2rem] font-semibold text-[#131B22]">Go Home</p>
                    <img className="w-[15%] md:w-[5%]" src={arrow} />
                </div>
                <div className="flex justify-center"> 
                <div className="bg-[white] w-[100%] md:w-[620px] p-[0.5rem] md:p-[1.5rem]">
                    <div className="flex flex-col gap-[1.5rem] justify-center items-center">
                        <p className="font-pattaya text-[#412234] text-[2rem] md:text-[2.5rem]">Tickety</p>
                        <p className="text-[1.25rem] font-bold md:text-[1.5rem]">Tai Hassan,</p>
                        <p className="text-[1.25rem] font-bold md:text-[1.5rem]">you’ve got tickets!</p>
                        <SimpleButton props="View Event" />
                        <div className="flex flex-col gap-[1rem]">
                            <p className="text-[1.25rem] md:text-[1.5rem] font-bold text-start">Youth Conference</p>
                            <img src={image} />
                            <div className="flex gap-[1rem]">
                                <img src={ticket} />
                                <div className="flex flex-col text-start">
                                    <p className="font-semibold">1 x Ticket</p>
                                    <p className="text-[#586675]">Order: Free</p>
                                </div>
                            </div>
                            <div className="flex gap-[1rem]">
                                <img src={location} />
                                <div className="flex flex-col text-left">
                                    <p className="font-semibold">Location</p>
                                    <p className="text-[#586675]">Online</p>
                                </div>
                            </div>
                            <div className="flex gap-[1rem]">
                                <img src={clock} />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-left">Wednesday, June 12, 2024 at 5:00PM (Nigerian Time)</p>
                                    <p className="text-[#586675] text-left">Add to <span className="text-[#412234]">Google . ical</span></p>
                                </div>
                            </div>
                            <p className="font-semibold">Youth Conference Association</p>
                            <RsvpButton props="Follow" />
                            <p className="text-[#586675]">Questions about this event?</p>
                            <p className="text-[#412234] text-[0.65rem] md:text-[0.9rem]">Contact the organizer</p>
                            <div className="flex flex-col gap-[1rem] text-start">
                                <p className="text-[1.25rem] md:text-[1.5rem] font-bold">Order Summary</p>
                                <p>Order #76577 - June 12 2024</p>
                                <p>Free</p>
                                <div className="flex justify-between">
                                    <p>Tai Hassan</p>
                                    <p>1 x <span className="font-semibold">General Admission</span></p>
                                    <p>0.00</p>
                                </div>
                                <p><span className="text-[#412234] font-semibold">View and manage</span> your order</p>
                                <p>This event is subject to Tickety’s <span className="text-[#412234] font-semibold">Terms of Service</span> and <span className="text-[#412234] font-semibold">Privacy Policy</span></p>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}
export default EmailConfirmation;