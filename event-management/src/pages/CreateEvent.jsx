import ArrowLeft from "../assets/ArrowLeft.svg";
import InputField from "../components/Authentications/InputField";
import SimpleButton from "../components/Buttons/SimpleButton";
import Header from "../Layouts/Header";
import image from "../assets/signUpBackground.jpg";
import UploadImage from "../components/Inputs/UploadImage";
import InputBar from "../components/Inputs/InputBar";
import angleDown from "../assets/angleFullDown.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";
import LocationBar from "../components/Inputs/LocationBar";
import angle from "../assets/arrowDown.svg";

const MyEvents = () => {
    return (
        <div className="bg-[#C4BAC0] w-full m-auto">
            <Header />
            <div className="bg-[#C4BAC0] p-[1rem] md:p-[3rem] text-[0.75rem] text-[#131B22] md:text-[1rem] font-raleway">
                <div className="flex flex-col gap-[2rem]">
                    <div className="flex flex-col gap-[1rem] md:flex-row md:justify-between">
                        <div className="flex gap-[1rem]">
                            <img className="w-[15%] md:w-auto" src={ArrowLeft} />
                            <p className="font-semibold text-[1.75rem] md:text-[2rem]">My Events</p>
                        </div>
                        <div className="flex flex-row-reverse"><SimpleButton props="View RSVP" /></div>
                    </div>
                    <div className="bg-white">
                        <div className="flex flex-col gap-[1rem] p-[1rem] md:p-[3rem] text-start">
                            <p>Upload Event Image</p>
                            <div className="h-[250px]"
                                style={{
                                    backgroundImage : `url(${image})`,
                                }}
                            >
                                <div className="flex justify-center mt-[4rem]"><UploadImage /></div>
                            </div>
                            <InputField title="Event Name" type="text" placeholder="Event Name" />
                            <InputBar title="Event Category" type="text" placeholder="Event Category" icon={angleDown}/>
                            <InputField title="About The Event" type="text" placeholder="Describe Event" />  
                            <LocationBar title="Location" type="text" placeholder="Location" icon={angle} />
                            <InputBar title="Event Date" type="text" placeholder="Event Date" icon={calendar}/>
                            <InputBar title="Start Time" type="text" placeholder="Event Time" icon={clock}/>
                            <InputBar title="RSVP" type="text" placeholder="Rsvp" icon={angleDown}/>                      
                            <div className="flex flex-row-reverse">
                                <div className="xl:pr-[3.25rem]"><SimpleButton props="Create Event" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEvents;