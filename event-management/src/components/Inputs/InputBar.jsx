
// eslint-disable-next-line react/prop-types
const InputBar = ({title, type, placeholder, icon}) => {
    return (
        <>
            <div className="font-raleway text-[0.75rem] md:text-[1rem]">
                <p className="text-[#212D3A]">{title}</p>
                <form>
                    <div className="flex relative ">
                    <input
                        type={type}
                        placeholder={placeholder}
                        className="w-[100%] xl:w-[95%] h-[62px] text-[#BEC4C9] rounded-[4px] border-[1px] px-[1rem] flex justify-center text-left border-[#C4BAC0]"
                    />
                    <span className="absolute inset-y-0 left-0 pl-[85%] md:pl-[90%] flex items-center">
                       <img src={icon}/>
                    </span>
                    </div>
                </form>
            </div>
        </>
    )
};

export default InputBar;