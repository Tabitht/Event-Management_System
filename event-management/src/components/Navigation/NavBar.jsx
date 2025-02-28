import {useState} from "react";
import dropDownList from "../../assets/drop-down-list.svg";
import Navigation from "./Navigation";
import EventsMenu from "../DropDownMenu/EventsMenu";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                >
                   <img className="" src={dropDownList} />
                </button>
                {isOpen && (
                    <div className="flex flex-col text-left">
                        <Navigation link="/Home" label="Home" />
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <EventsMenu link="/MyEvents" label="Events" />
                    </div>
                )}
            </nav>
            
        </>
    )
};

export default NavBar;