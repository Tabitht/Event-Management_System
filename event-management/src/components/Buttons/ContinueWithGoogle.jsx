import google from "../../assets/google.svg"

const ContinueWithGoogle = () => {
    return (
        <>
            <div className="">
                <button className="w-[90%] flex justify-center xl:w-[690px] h-[56px] border-[1px] border-[#806B77] rounded-[8px] text-[0.75rem] md:text-[1.25rem] items-center text-center font-raleway text-[#412234]"><img src={google} />Continue with Google</button>
            </div>
        </>
    )
};

export default ContinueWithGoogle;