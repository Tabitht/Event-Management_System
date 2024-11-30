import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navigation = ({link, label}) => {
    return (
        <>
            <div>
                <NavLink 
                    to={link}
                >
                    {label}
                </NavLink>
            </div>
        </>
    )
}

export default Navigation;