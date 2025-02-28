import { useState } from "react";
import Navigation from "../Navigation/Navigation";

// eslint-disable-next-line react/prop-types
const EventsMenu = ({link, label}) => {

    const [isDropDown, setIsDropDown] = useState(false);
    return(
        <div
            className="relative"
            onMouseEnter={() => setIsDropDown(true)}
            onMouseLeave={() => setIsDropDown(false)}
        >
            <Navigation link={link} label={label} />
            {isDropDown && (
            <div className="absolute w-[154px] h-[98px] bg-white p-[1rem] border-[1px] text-left border-blue-400 font-raleway text-[1rem] text-[#806B77] flex flex-col gap-[0.5rem]">
                <Navigation link="/Events/CreateEvent" label="CreateEvent" />
                <Navigation link="/#" label="UpcomingEvents" />
            </div>
            )}
        </div>
    )
}
export default EventsMenu;