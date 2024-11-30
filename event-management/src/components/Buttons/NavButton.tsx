import React, { NavLink } from "react-router-dom"
const NavButton = ({Link})=> {
    return (
        <>
            <NavLink 
                to={Link}
            >
                <button 
                className="w-[70%] md:w-[241px] rounded-[8px] h-[56px] border-[1px] bg-white border-[#806B77] text-[0.75rem] text-[#412234] md:text-[1.25rem] text-center font-semibold transition-all duration-500 ease-in transform group-hover:scale-105">Plan your next Event
                </button>

            </NavLink>
        </>
    )
}

export default NavButton;