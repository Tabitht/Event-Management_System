import uploadIcon from "../../assets/uploadImage.svg";

const UploadImage = () => {
  return (
    <>
      <div className="bg-white w-[50%] md:w-[164px] h-[124px] rounded-[4px] border-[2px] border-[#806B77] p-[1.25rem]">
        <div className="flex flex-col items-center text-center gap-[1rem]">
          <img
            className="w-[40%]"
            src={uploadIcon}
            alt="uploading image icon"
          />
          <p className="font-raleway text-[0.75rem] md:-[1rem] text-[#412234]">
            Upload Photos and Video
          </p>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
