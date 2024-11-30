import React from "react";
import SuccessfulCardPopUp from "../components/Authentications/SuccessfulCardPopUp"

const SuccessfulSignUp = () => {
    return (
        <>
            <SuccessfulCardPopUp head="Welcome Onboard!" link="/Login" body="You have successfully created your account. You can now login to create an event." button="Login" />
        </>
    )
}
export default SuccessfulSignUp;