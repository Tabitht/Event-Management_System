
// eslint-disable-next-line react/prop-types
const LocationBar = ({title, type, placeholder, icon}) => {
    return (
        <>
            <div className="font-raleway text-[0.75rem] md:text-[1rem]">
                <p className="text-[#212D3A]">{title}</p>
                <form>
                    <div className="flex relative ">
                        <span className="absolute inset-y-0 left-0 pl-[2rem] md:pl-[2.75rem] flex items-center">
                           <img src={icon}/>
                        </span>
                        <p className="absolute inset-y-0 left-0 pl-[3.5rem] md:pl-[4.75rem] flex items-center">|</p>
                        <input
                            type={type}
                            placeholder={placeholder}
                            className="w-[100%] xl:w-[95%] h-[62px] text-[#BEC4C9] rounded-[4px] border-[1px] px-[4rem] md:px-[6rem] flex justify-center text-left border-[#C4BAC0]"
                       />
                    </div>
                </form>
            </div>
        </>
    )
};

export default LocationBar;