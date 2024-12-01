
// eslint-disable-next-line react/prop-types
const PasswordField = ({title, placeholder}) => {
    return (
        <>
            <div className="font-raleway text-[0.75rem] md:text-[1rem]">
                <p className="text-[#212D3A]">{title}</p>
                <form>
                    <input
                        type="password"
                        placeholder={placeholder}
                        className="w-[100%] xl:w-[95%] h-[62px] text-[#BEC4C9] rounded-[4px] border-[1px] px-[1rem] flex justify-center text-left border-[#C4BAC0]"
                    />
                </form>
            </div>
        </>
    )
};

export default PasswordField;