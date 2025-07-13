import { useState } from "react";

const CreatorProfileCard = ({
  creatorname = "magicdonjuan",
  role = "Creator",
  points = "40",
  title = "GIGAMEW",
  tokenImage = "/Gigamew.png",
  headerBgImage,
}) => {
  const headerImage = headerBgImage || tokenImage;

  return (
    <div className="flex flex-col w-[100vw] items-center pt-0 pb-[3.08vw] px-0 relative" style={{ backgroundColor: "#ff9c9c" }}>
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${headerImage}')`,
          backgroundPosition: "50% 50%",
          backgroundSize: "cover",
        }}
      />
      <div 
        className="absolute inset-0 z-10"
        style={{
          background: `
            linear-gradient(180deg, rgba(0,0,0,0) 4%, rgba(0,0,0,1) 100%),
            linear-gradient(180deg, rgba(0,0,0,0) 4%, rgba(0,0,0,1) 100%),
            linear-gradient(180deg, rgba(0,0,0,0) 4%, rgba(0,0,0,1) 100%)
          `
        }}
      />
      <div className="relative z-20 w-full">
        <div className="flex flex-col items-start gap-[2.56vw] px-[3.08vw] py-[2.31vw] w-full">
          <div className="flex w-[94.1vw] items-end justify-end gap-[63.33vw]">
            <div className="inline-flex items-center gap-[1.54vw]">
              <button className="w-[9.49vw] h-[9.49vw] p-0 flex items-center justify-center bg-black/20 rounded-full">
                <img src="/icons/upload.svg" alt="Upload Icon" className="w-[6.67vw] h-[6.67vw]" />
              </button>
              <button className="w-[9.49vw] h-[9.49vw] p-0 flex items-center justify-center bg-black/20 rounded-full">
                <img src="/icons/more.svg" alt="More Icon" className="w-[5.9vw] h-[5.9vw]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[37.95vw] items-center justify-between px-[3.08vw] w-full">
          <div className="flex items-end justify-between w-full">
            <div className="w-[18.46vw] h-[18.46vw] rounded-[4.1vw] overflow-hidden bg-white">
              <img src={tokenImage} alt="Token" className="w-full h-full object-cover" />
            </div>

          </div>
          <div className="flex flex-col h-[14.62vw] items-start gap-[1.03vw] w-full">
            <h1 className="text-white text-[8.21vw] leading-[9.18vw] tracking-[-0.25vw] truncate font-sans font-550">{title}</h1>
            <div className="inline-flex items-center gap-[0.77vw]">
              <span className="text-[#ffffff91] text-[3.56vw] tracking-[-0.07vw] font-sans font-400">{title}</span>
              <button className="p-0 h-auto bg-transparent border-none cursor-pointer">
                <img src="/icons/copy-icon.svg" alt="Copy Icon" className="w-[4.87vw] h-[4.1vw]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorProfileCard;
