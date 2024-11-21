import React, {useState} from "react";
import dropDownList from "../../assets/drop-down-list.svg";
//import EventPopUpButton from "../Buttons/EventPopUpButton";

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
                    <div className="flex flex-col">
                        <p>About Us</p>
                        <p>Services</p>
                        <p>Blog</p>
                        <p>Events</p>
                    </div>
                )}
            </nav>
            
        </>
    )
};

export default NavBar;