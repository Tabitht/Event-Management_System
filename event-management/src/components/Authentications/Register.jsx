// import React from "react";
import { useState } from "react";
import cancel from "../../assets/cancel.svg"
import background from "../../assets/signUpBackground.jpg";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import CreateAccountOrLoginButton from "../Buttons/CreateAccountOrLoginButton";
import ContinueWithGoogle from "../Buttons/ContinueWithGoogle";
import Navigation from "../NavBar/Navigation";


const Register = () => {
    
        const [isAccepted, setIsAccepted] = useState(false);
        const HandleCheckboxChange = ({target: {checked}}) => {
            setIsAccepted(checked);
        }
    
    return (
        <>
            <div className="w-[100%] md:h-[1178px] py-[1rem] font-raleway flex justify-center"
                style={{
                    backgroundImage: `url(${background})`,
                }}
            >
                <div className="w-[90%] md:w-[70%] h-[70%] md:h-[1022px] py-[1rem] bg-white mt-[3rem]">
                    <div className="flex justify-between items-center px-[1rem]">
                        <p className="font-pattaya text-[#412234]  text-[1.25rem] md:text-[2rem]">Tickety</p>
                        <img className="w-[10%]" src={cancel} />
                    </div>
                    <div className="flex flex-col gap-[1rem] md:gap-[2rem] text-start px-[2rem] md:px-[4rem]">
                        <div>
                            <p className="text-[1rem] md:text-[1.5rem] font-bold text-[#131B22]">Create your account</p>
                            <p className="text-[0.75rem] md:text-[1rem] text-[#586675]">Kindly input your details below to create your account</p>
                        </div>
                        <InputField title="Full Name" type="text" placeholder="Enter your full name" />
                        <InputField title="Email" type="email" placeholder="Enter your email address" />
                        <PasswordField title="Password" placeholder="Create your password" />
                        <PasswordField title="Confirm Password" placeholder="Confirm your password" />
                        <label>
                            <input type="checkbox" 
                             checked={isAccepted}
                             onChange={HandleCheckboxChange}
                            />
                                <span className="font-raleway text-[0.75rem] text-[#412234]">By checking this box, you agree to the <span className="font-raleway text-[0.75rem] text-[#412234] font-semibold">Terms & Condition</span> and <span className="font-raleway text-[0.75rem] text-[#412234] font-semibold">Privacy Policy</span></span>
                        </label>
                        <CreateAccountOrLoginButton text="Create an Account" link="/SuccessfulSignUp" />
                        <ContinueWithGoogle />
                        <div className="flex justify-center gap-[3px] text-center">
                            <p className=" text-[1rem] text-[#412234]">Already have an account? </p> 
                            <p className="text-[1rem] text-[#412234] font-bold"><Navigation link="/Login" label="Sign In" /></p>
                        </div>    
                    </div>
                </div>
                
            </div>
        </>
    )
};

export default Register;