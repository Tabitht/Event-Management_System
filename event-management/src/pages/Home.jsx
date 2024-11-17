import SimpleButton from "../components/Buttons/SimpleButton";
import SimilarEvent from "../components/Events/SimilarEvent";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import similarEvent1 from "../assets/similarEvent1.png";
import similarEvent2 from "../assets/similarEvent2.png";
import similarEvent3 from "../assets/similarEvent3.png";
import similarEvent4 from "../assets/similarEvent4.png";
const Home = () => {
    return (
        <>
            <div>
                <UpcomingEvents />
                <div className="flex justify-center">
                <div className="xl:w-[1440px] xl:h-[1298px] border-[1px] p-[5rem]">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col items-start text-[1rem] font-raleway text-[#383E49] ">
                            <p className="font-bold text-[1.5rem]">Similar Events</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                        </div>
                        <SimpleButton props="View All" />
                    </div>
                    <SimilarEvent head="The Psychology of Marketing" text="Understanding human behavior and how to sell without hassle." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent1} />
                    <SimilarEvent head="Employee Workshop" text="The effect of self leadership and establishing a healthy relationship with your job." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent2} />
                    <SimilarEvent head="Students and Emerging Technology" text="Emerging technologies and students at the forefront of driving innovations." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent3} />
                    <SimilarEvent head="Chats with Mercy James" text="Laughter and real life analysis to living out you intended purpose." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent4} />
                </div>
                </div>
            </div>
        </>
    )
};

export default Home