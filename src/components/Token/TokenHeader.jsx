import { useState } from "react"; 

const UserProfileCard = ({
  username = "magicdonjuan",
  role = "Creator",
  points = "40",
  title = "GIGAMEW",
  tokenImage = "/Gigamew.png",
  headerBgImage,
}) => {
  const headerImage = headerBgImage || tokenImage;

  return (
    <div className="flex flex-col w-[390px] items-center pt-0 pb-3 px-0 relative" style={{ backgroundColor: "#ff9c9c" }}>
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
          background: "linear-gradient(180deg,rgb(0, 0, 0) 0%, rgba(0,0,0,1) 100%)",
        }}
      />
      <div className="relative z-20 w-full h-full">
        <div className="flex flex-col items-start gap-2.5 px-3 py-[9px] w-full">
          <div className="flex w-[367px] items-end justify-end gap-[247px]">
            <div className="inline-flex items-center gap-1.5">
              <button className="w-[37px] h-[37px] p-0 flex items-center justify-center bg-black/20 rounded-3xl">
                <img src="/icons/upload.svg" alt="Upload Icon" className="w-[26px] h-[26px]" />
              </button>
              <button className="w-[37px] h-[37px] p-0 flex items-center justify-center bg-black/20 rounded-3xl">
                <img src="/icons/more.svg" alt="More Icon" className="w-[15px] h-[15px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[148px] items-center justify-between px-3 w-full">
          <div className="flex items-end justify-between w-full">
            <div className="w-[72px] h-[72px] rounded-none overflow-hidden bg-white">
              <img src={tokenImage} alt="Token" className="w-full h-full object-cover" />
            </div>
            <div className="inline-flex items-start gap-2">
              <div className="inline-flex flex-col items-end gap-[3px]">
                <div className="flex items-center justify-end gap-1.5 w-full">
                  <span className="h-[13px] px-[4.15px] py-[2.77px] bg-[#34c75933] rounded-[3px] flex items-center gap-[3px]">
                    <span className="text-[#34c759] text-[10px] tracking-[-0.30px] font-sans font-400">{points}</span>
                    <img src="/icons/coin.svg" alt="Points Icon" className="w-[9.69px] h-[9.69px]" />
                  </span>
                  <span className="text-[#a5a9a6] text-xs tracking-[-0.36px] font-sans font-400">{role}</span>
                </div>
                <div className="w-[76px] h-[13px] text-white text-xs text-right tracking-[-0.36px] font-sans font-400">{username}</div>
              </div>
              <div className="flex w-[27.79px] h-[27.79px] items-center justify-center bg-[#222222] rounded-[4.28px] border border-[#ffffff33]">
                <div className="relative w-[18.53px] h-[13.08px] bg-cover" style={{ backgroundImage: `url('/icons/vite.svg')` }}>
                  <img src="/icons/vector.svg" alt="Vector" className="absolute top-1.5 left-1.5 w-0.5 h-[3px]" />
                  <img src="/icons/vector.svg" alt="Vector" className="absolute top-[5px] left-[9px] w-0.5 h-[3px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[57px] items-start gap-1 w-full">
            <h1 className="text-white text-[32px] leading-[35.8px] tracking-[-0.96px] truncate font-sans font-550">{title}</h1>
            <div className="inline-flex items-center gap-[3px]">
              <span className="text-[#ffffff91] text-[13.9px] tracking-[-0.28px] font-sans font-400">{title}</span>
              <button className="p-0 h-auto bg-transparent border-none cursor-pointer">
                <img src="/icons/copy-icon.svg" alt="Copy Icon" className="w-[19px] h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
