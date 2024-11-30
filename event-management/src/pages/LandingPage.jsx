import SimpleButton from "../components/Buttons/SimpleButton";
import SimilarEvent from "../components/Events/SimilarEvent";
import similarEvent1 from "../assets/similarEvent1.png";
import similarEvent2 from "../assets/similarEvent2.png";
import similarEvent3 from "../assets/similarEvent3.png";
import similarEvent4 from "../assets/similarEvent4.png";
import Hero from "../components/Hero/Hero";
import EventType from "../components/Events/EventType";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import BlogResources from "../components/Resources/BlogResources";
import Faq from "../components/Resources/Faq";
import CustomerReview from "../components/CustomerReview/CustomerReview";
import PlanYourNextEvent from "../components/PlanYourNextEvent/PlanYourNextEvent";
const Home = () => {
    return (
        <>
            <div>
                <Hero link="/Login" />
                <EventType />
                <WhatWeDo />
                <PlanYourNextEvent />
                {/** past events section  */}
                <div className="flex justify-center">
                    <div className="w-[100%] xl:w-[1440px] xl:h-[1298px] border-[1px] p-[1rem] md:p-[3rem] xl:p-[5rem]">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col items-start text-[0.75rem] md:text-[1rem] font-raleway text-[#383E49] ">
                                <p className="font-bold text-[1rem] text-start md:text-[1.5rem]">Past events from our organizers</p>
                                <p className="w-[60%] md:w-[100%] text-start">Check out the different events we have created for our customers</p>
                            </div>
                            <div className=""><SimpleButton props="View All" /></div>
                        </div>
                        <SimilarEvent head="The Psychology of Marketing" text="Understanding human behavior and how to sell without hassle." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent1} />
                        <SimilarEvent head="Employee Workshop" text="The effect of self leadership and establishing a healthy relationship with your job." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent2} />
                        <SimilarEvent head="Students and Emerging Technology" text="Emerging technologies and students at the forefront of driving innovations." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent3} />
                        <SimilarEvent head="Chats with Mercy James" text="Laughter and real life analysis to living out you intended purpose." location="2464 Royal Ln. Mesa, New Jersey 45463" rsvp="50RSVP" image={similarEvent4} />
                    </div>
                </div>
                <BlogResources />
                <Faq />
                <CustomerReview />
            </div>
        </>
    )
};

export default Home