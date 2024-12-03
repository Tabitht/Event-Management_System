import image1 from "../../assets/blogResourcesImage1.png";
import image2 from "../../assets/blogResourcesImage2.png";
import image3 from "../../assets/blogResourcesImage3.png";
import arrowRight from "../../assets/greaterThan.svg";
import BlogResourcesCard from "./BlogResourcesCard";

const BlogResources = () => {
    return (
        <>
            <div className="bg-white flex justify-center p-[15px]">
                <div className="w-full xl:w-[1040px] flex flex-col gap-[1rem]">
                    <div className="flex justify-between text-[1rem] text-[#131B22] font-raleway">
                        <div>
                            <p className="text-[1.5rem] text-left font-bold">Blog resources for event organizers</p>
                            <p className="text-[#586675] text-left">Discover how our user-friendly platform simplifies event creation.</p>
                        </div>
                        <img src={arrowRight}></img>
                    </div>
                    <div className="flex gap-[1rem] overflow-x-auto no-scrollbar overflow-hidden w-full">
                        <div className="flex flex-row gap-[1rem]">                      
                            <BlogResourcesCard image={image1} />
                            <BlogResourcesCard image={image2} />
                            <BlogResourcesCard image={image3} /> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default BlogResources;