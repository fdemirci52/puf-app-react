import { useState } from "react";

function Header2() {
  const [count, setCount] = useState(0);

  return (
    <header className="flex h-[14.9vw] justify-between items-center flex-shrink-0 bg-black w-full">
      <div className="flex px-[3vw] justify-between items-center w-full max-w-[308vw] mx-auto">
        <div className="flex w-[24vw] flex-col items-start gap-[3vw]">
          <img src="/icons/logo.svg" alt="PUF Logo" className="w-full h-auto" />
        </div>

        <div className="flex items-center gap-[2vw] self-stretch">
          <button
            className="flex w-[11vw] h-[11vw] p-[2vw] justify-center items-center gap-[2vw] self-stretch bg-[#1A1A1A] border-none cursor-pointer relative rounded-full hover:bg-[#1A1A1A]"
            aria-label="Notifications"
          >
            <span className="w-[5vw] h-[5.7vw] flex items-center justify-center">
              <img src="/icons/bell.svg" alt="Notifications" className="w-full h-full" />
            </span>
            {count > 0 && (
              <span className="absolute top-[1vw] right-[1vw] bg-red-600 text-white rounded-full px-[2vw] py-[1vw] text-[3vw] min-w-[5vw] h-[5vw] flex items-center justify-center">
                {count}
              </span>
            )}
          </button>

          <button
            className="flex px-[4vw] py-[2vw] justify-center items-center gap-[2vw] self-stretch bg-[#1A1A1A] border-none cursor-pointer text-white rounded-full hover:bg-[#1A1A1A]"
            aria-label="Search"
          >
            <span className="w-[5vw] h-[5vw] flex items-center justify-center">
              <img src="/icons/search.svg" alt="Search" className="w-full h-full" />
            </span>
            <span className="text-[3.6vw] font-light opacity-60 text-[#A5A9A6] font-sans">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header2; 