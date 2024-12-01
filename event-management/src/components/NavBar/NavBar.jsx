import {useState} from "react";
import dropDownList from "../../assets/drop-down-list.svg";
import Navigation from "./Navigation";

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
                        <Navigation link="/MyEvents" label="Events" />
                    </div>
                )}
            </nav>
            
        </>
    )
};

export default NavBar;