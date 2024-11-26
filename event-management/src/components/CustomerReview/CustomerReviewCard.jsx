import React from "react";
import janeCooper from "../../assets/janeCooper.svg";
import quotesUp from "../../assets/QuotesUp.svg";
import quotesDown from "../../assets/QuotesDown.svg";

const CustomerReviewCard = () => {
    return (
        <>
            <div className="w-[100%] md:w-[620px] flex-shrink-0 md:h-[382px] rounded-[10px] border-[1px] border-[rgb(189,217,191)] md:py-[3rem] p-[1rem] md:px-[2rem]">
                <div className="flex flex-col gap-8 text-[0.5rem] md:text-[0.88rem] text-left font-raleway text-[#586675]">
                    <div className="flex gap-1">
                        <img src={janeCooper} />
                        <div className="flex flex-col">
                            <p className="font-semibold text-[#212D3A] text-[0.75rem] md:text-[1.25rem]">Jane Cooper</p>
                            <p>Event planner</p>
                        </div>
                    </div>
                    <p className="font-bold text-[#212D3A] text-[0.75rem] md:text-[1.25rem]">Had a really Nice Event</p>
                    <div className="flex justify-center">
                        <img className="mb-24" src={quotesUp} />
                        <p className="w-[70%] md:w-[398px]">Creating a seamless event involves meticulous planning, clear communication, and attention to detail. Whether you’re organizing a small gathering or a large-scale celebration, following these steps will help ensure your event goes off without a hitch.......</p>
                        <img className="mb-24" src={quotesDown} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default CustomerReviewCard;