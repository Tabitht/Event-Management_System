import star from "../assets/unfilledStar.svg";
import Cylinder from "../components/Buttons/Cylinder";
import SimpleButton from "../components/Buttons/SimpleButton";
import Comments from "../components/Inputs/Comments";
const FeedBack = () => {
    return (
        <>
            <div className="flex flex-col gap-[1rem] justify-center p-[2rem] md:px-[12rem] xl:px-[25rem] font-raleway text-[0.75rem] md:text-[1rem] text-[#586675]">
                <p className="text-[2rem] md:text-[2.5rem] text-[#412234]">Tickety</p>
                <p className="text-[1rem] md:text-[1.25rem] text-[#2E4052] font-semibold">Share Your Feedback</p>
                <p>We value your feedback! Help us improve future events by sharing your thoughts</p>
                <div className="flex gap-[1rem] justify-center">
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                    <img src={star}/>
                </div>
                <Comments title="Comments" text="(optional)" />
                <div className="flex flex-col gap-[0.5rem] text-left">
                    <p className="text-black ">Didn’t attend event? <span className="text-[#586675]">(Optional)</span></p>
                    <p className="text-[0.5rem] md:text-[0.75rem] text-[#2E4052]">Please tell us the reason why</p>
                </div>
                <div className="flex justify-between">
                    <Cylinder props="Time Constraint" textColour="text-white" bgColour="bg-[#412234]" width="w-[124px]" />
                    <Cylinder props="Technical issues" textColour="text-black" width="w-[124px]" />
                    <Cylinder props="Didnt get a reminder?" textColour="text-black" width="w-[150px]" />
                </div>
                <Comments title="others" text="(optional)" />
                <div className="flex justify-center"><SimpleButton props="Submit FeedBack" /></div>
            </div>
        </>
    )
}
export default FeedBack;