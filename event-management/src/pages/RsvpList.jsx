import ArrowLeft from "../assets/ArrowLeft.svg";
import Header from "../Layouts/Header";
import search from "../assets/searchIcon.svg";
import FilterMenu from "../components/DropDownMenu/FilterMenu";
import ExportFile from "../components/Exports/ExportFile";

const RsvpList = () => {
    return (
        <div className="bg-[#C4BAC0] w-full m-auto">
            <Header />
            <div className="bg-[#C4BAC0] p-[1rem] md:p-[3rem] text-[0.75rem] text-[#131B22] md:text-[1rem] font-raleway">
                <div className="flex flex-col gap-[2rem]">
                    <div className="flex flex-col items-start gap-[1rem]">
                        <div className="flex gap-[1rem]">
                            <img className="w-[20%] md:w-auto" src={ArrowLeft} />
                            <p className="font-semibold text-[1.5rem] md:text-[2rem]">RSVP</p>
                        </div>
                        <div className="flex">
                            <form>
                                <div className="relative flex gap-[1rem]">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-[0.75rem]" >
                                        <img src={search} />
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="search..."
                                        className="w-[250px] md:w-[437px] xl:w-[537px] h-[48px] pl-[3rem] rounded-[4px] bg-white flex justify-center"
                                    />
                                </div>
                            </form>
                            <div className="hidden xl:block ml-[22rem]"><FilterMenu /></div>
                            <div className="hidden xl:block"><ExportFile /></div>
                        </div>
                        <div className="flex xl:hidden">
                            <FilterMenu />
                            <ExportFile />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default RsvpList;