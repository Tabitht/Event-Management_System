import Export from "../../assets/export.svg";

const ExportFile = () => {
    return (
        <>
            <div className="w-[107pxpx] bg-[#412234] p-[1rem] h-[48px] rounded-[8px] border-[1px] border-[#C4BAC0] font-raleway text-[0.65rem] md:text-[0.9rem] text-center text-white flex items-center">
                <div className="flex gap-[0.5rem]">
                    <img src={Export} />
                    <p>Export</p>
                </div>
            </div>
        </>
    )
};

export default ExportFile;