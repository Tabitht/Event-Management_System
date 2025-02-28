import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navigation = ({link, label}) => {
    return (
        <>
            <div>
                <NavLink 
                    to={link}
                    className={({ isActive }) => 
                        isActive
                            ? "text-[#1B0E16] font-bold"
                            : ""
                    }
                >
                    {label}
                </NavLink>
            </div>
        </>
    )
}

export default Navigation;