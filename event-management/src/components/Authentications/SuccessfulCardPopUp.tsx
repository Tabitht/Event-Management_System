import React from "react";
import check from "../../assets/check.svg";
import { NavLink } from "react-router-dom";

const SuccessfulCardPopUp = ({head, link, body, button}) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[80%] md:w-[60%] h-[452px] mt-[100px] rounded-[4px] border-[1px] border-[#412234] text-[#131B22] font-raleway"
                    style={{
                        boxShadow: '0px 40px 10px 0px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <div className="flex flex-col gap-[2rem] items-center text-center p-[1rem] md:p-[2rem]">
                        <p className="font-bold text-[1rem] md:text-[1.5rem]">{head}</p>
                        <img src={check}></img>
                        <p className="text-[0.75rem] md:text-[1rem] text-[#131200]">{body}</p>
                       <NavLink to={link}> 
                       <button className="w-[200px] md:w-[256px] h-[56px] bg-[rgb(65,34,52)] rounded-[4px] md:rounded-[8px] text-[0.75rem] md:text-[1.25rem] text-center font-raleway text-white">{button}</button>
                       </NavLink>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SuccessfulCardPopUp;