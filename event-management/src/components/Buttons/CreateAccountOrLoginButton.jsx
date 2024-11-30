import { NavLink } from "react-router-dom"
// eslint-disable-next-line react/prop-types
const CreateAccountOrLoginButton = ({text, link}) => {
    return (
        <>
            <NavLink
                to={link}
            >
                <button className="w-[90%] xl:w-[690px] h-[56px] bg-[#412234] rounded-[8px] text-[0.75rem] md:text-[1.25rem] text-center font-semibold font-raleway text-white">{text} </button>
            </NavLink>
        </>
    )
};

export default CreateAccountOrLoginButton;