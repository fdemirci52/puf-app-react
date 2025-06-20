import { useState } from "react";

function Header2() {
  const [count, setCount] = useState(3);

  return (
    // Header ana kapsayıcı
    <header className="flex h-[14.9vw] justify-between items-center flex-shrink-0 bg-black w-full">
      {/* İçerik kapsayıcı (logo ve butonlar) */}
      <div className="flex px-[3vw] justify-between items-center w-full max-w-[308vw] mx-auto">
        {/* Logo alanı */}
        <div className="flex w-[24vw] flex-col items-start gap-[3vw]">
          <img src="/icons/logo.svg" alt="PUF Logo" className="w-full h-auto" />
        </div>

        {/* Bildirim ve arama butonları alanı */}
        <div className="flex items-center gap-[2vw] self-stretch">
          {/* Bildirim butonu */}
          <button
            className="flex w-[11vw] h-[11vw] p-[2vw] justify-center items-center gap-[2vw] self-stretch bg-[#1A1A1A] border-none cursor-pointer relative rounded-full hover:bg-[#1A1A1A]"
            aria-label="Notifications"
          >
            {/* Zil ikonu */}
            <span className="w-[5vw] h-[5.7vw] flex items-center justify-center">
              <img src="/icons/bell.svg" alt="Notifications" className="w-full h-full" />
            </span>
            {/* Bildirim rozeti */}
            {count > 0 && (
              <span className="absolute top-[1.9vw] right-[1.9vw] bg-[#FF0090] text-white rounded-full w-[3.6vw] h-[3.6vw] flex items-center justify-center text-[2.2vw] font-sans">
                <span className="mb-[0.2vw]">{count}</span>
              </span>
            )}
          </button>

          {/* Arama butonu */}
          <button
            className="flex px-[4vw] py-[2vw] justify-center items-center gap-[2vw] self-stretch bg-[#1A1A1A] border-none cursor-pointer text-white rounded-full hover:bg-[#1A1A1A]"
            aria-label="Search"
          >
            {/* Arama ikonu */}
            <span className="w-[5vw] h-[5vw] flex items-center justify-center">
              <img src="/icons/search.svg" alt="Search" className="w-full h-full" />
            </span>
            {/* Arama metni */}
            <span className="text-[3.6vw] font-light opacity-60 text-[#A5A9A6] font-sans">Search</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header2; 