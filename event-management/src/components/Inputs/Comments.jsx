// eslint-disable-next-line react/prop-types
const Comments = ({title,text}) => {
    return (
        <>
            <div className="font-raleway text-[0.75rem] md:text-[1rem]">
                <p className="text-black text-left">{title}<span className="text-[#586675]">{text}</span></p>
                <form>
                    <input
                        type="text"
                        className="w-[100%] xl:w-[100%] h-[120px] rounded-[4px] border-[1px] border-[#586675]"
                    />
                </form>
            </div>
        </>
    )
};

export default Comments;