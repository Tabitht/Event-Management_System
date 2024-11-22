import React from "react";
import janeCooper from "../../assets/janeCooper.svg";
import arrowRight from "../../assets/arrowRight.svg";

const BlogResourcesCard = ({image}) => {
    return (
        <>
            <div className="w-[100%] xl:w-[400px] h-[487] rounded-[10px] border-[1px] border-[#A899A2]">
                <div className="flex flex-col gap-[1rem] font-raleway text-[0.35rem] md:text-[0.75rem] text-[#586675]">
                    <img src={image} />
                    <div className="flex justify-between p-[0.5rem]">
                        <div className="flex">
                            <img src={janeCooper} />
                            <div>
                                <p className="text-[#383E49] font-semibold">Jane Cooper</p>
                                <p className="text-[0.3rem] md:text-[0.625rem]">10th June, 2024</p>
                            </div>
                        </div>
                        <p className="text-[0.625rem] text-[#2E4052]">2 mins Read</p>
                    </div>
                    <p className="text-left px-[0.5rem] text-[1rem] md:text-[1.25rem] text-[#131B22]">How to Create a Seamless Event</p>
                    <p className="text-left px-[0.5rem] text-[0.75rem] md:text-[1.225rem]">
                        Creating a seamless event involves meticulous planning, clear communication, and attention to detail. Whether you’re organizing a small gathering or a large-scale celebration, following these steps will help ensure your event goes off without a hitch.......
                    </p>
                    <div className="flex items-end">
                        <p className="text-[1rem] px-[0.5rem] font-bold text-end ">More Details</p> 
                        <img  src={arrowRight} />
                    </div>
                </div>
            </div>
        </>
    )
};

export default BlogResourcesCard;