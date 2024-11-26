import React from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import NewsLetter from "../Subscription/NewsLetter";


const CustomerReview = () => {
    return (
        <>
            <div className="w-[100%] p-[1.5rem] pb-[3rem] flex flex-col gap-8 font-raleway text-left">
                <p className="text-[1.5rem] text-[#131B22] font-bold">Customers Review</p>
                <p className="text-[1rem] text-[#586675]">see what our customers are saying about their  event planning experiences</p>
                <div className="flex gap-8 overflow-x-auto overflow-hidden no-scrollbar">
                    <CustomerReviewCard />
                    <CustomerReviewCard />
                </div>
                <div className="flex justify-center mb-[3rem] md:mb-[10rem]"><NewsLetter /></div>
            </div>
        </>
    )
};

export default CustomerReview;