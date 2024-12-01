import ArrowLeft from "../assets/ArrowLeft.svg";
import InputField from "../components/Authentications/InputField";
import SimpleButton from "../components/Buttons/SimpleButton";
import Header from "../Layouts/Header";
import image from "../assets/signUpBackground.jpg";

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
                        <SimpleButton props="View RSVP" />
                    </div>
                    <div className="bg-white">
                        <div className="flex flex-col gap-[1rem] p-[1rem] md:p-[3rem] text-start">
                            <p>Upload Event Image</p>
                            <div><img src={image} /></div>
                            <InputField title="Event Name" type="text" placeholder="Youth Conference" />
                            <InputField title="About The Event" type="text" placeholder="Describe Event" />                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEvents;