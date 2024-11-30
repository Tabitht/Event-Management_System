
import SuccessfulCardPopUp from "../components/Authentications/SuccessfulCardPopUp"

const SuccessfulEventCreation = () => {
    return (
        <>
            <SuccessfulCardPopUp head="Event created successfully!" link="/Home" body="Your event has been successfully created! Attendees can now view details and RSVP. " button="Proceed to Dashboard" />
        </>
    )
}
export default SuccessfulEventCreation;