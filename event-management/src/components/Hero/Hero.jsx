import UpcomingEventPopUp from "../Events/UpcomingEventPopUp";
import {NavLink} from "react-router-dom";
import hero from "../../assets/hero.png"

// eslint-disable-next-line react/prop-types
const Hero = ({link}) => {
    return (
        <div className="w-full md:h-[669px] flex justify-center">
                   
            <div className="w-full h-[569px] xl:w-[1216] md:h-[669px] p-[2rem] md:p-[4rem] xl:p-[5.5rem]"
                style={{
                    backgroundImage: `url(${hero})`,
                 }}
            >
                <div className="flex flex-col md:flex-row md:justify-between gap-[4rem] xl:gap-[10]">
                    <div className="flex flex-col gap-[1.5rem] md:gap-[2.5rem] items-start font-raleway text-start text-white font-normal">
                        <p className="md:w-[20rem] xl:w-[40.9rem] text-[100%] md:text-[2rem] xl:text-[3rem] font-bold">Let’s help you create a Memorable event</p>
                        <p className="md:w-[15rem] xl:w-[38rem] mt-[2rem] md:mt-[4rem] text-[80%] md:text-[1rem] xl:text-[1.5rem]">Experience seamless planning and extraordinary celebrations with our expert event management team</p>
                        <NavLink to={link}>
                        <button className="w-[200px] md:w-[256px] h-[50px] md:h-[56px] bg-[rgb(65,34,52)] rounded-[4px] md:rounded-[8px] text-[0.75rem] md:text-[1.25rem] text-center font-raleway text-white">Create your next Event</button>
                        </NavLink>
                    </div>
                    <UpcomingEventPopUp />
                </div>
            
            </div>            
        </div>
    )
};

export default Hero;