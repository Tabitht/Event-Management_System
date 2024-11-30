import SimilarEventBox from "./SimilarEventBox";

const SimilarEvent = ({head, text, location, rsvp, image}) => {
    return (
        <div className="mt-[2rem]">
            <div className="flex flex-col xl:flex-row md:gap-[2.5rem]">
                <img src={image} />
                <SimilarEventBox Head={head} Text={text} Location={location} Rsvp={rsvp}/>
            </div>
        </div>
    )
};

export default SimilarEvent;