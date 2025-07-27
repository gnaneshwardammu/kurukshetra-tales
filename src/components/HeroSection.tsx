"use client";
import { useState } from "react";
import { characters } from "../lib/characters";
import { CardCarousel } from "./ui/card-carousel";

export default function HeroSection() {
  // const [currentIdx, setCurrentIdx] = useState(0);
  // const current = characters[currentIdx];
  // const prev = characters[(currentIdx - 1 + characters.length) % characters.length];
  // const next = characters[(currentIdx + 1) % characters.length];

  // // Swipe gesture state
  // const [touchStartX, setTouchStartX] = useState<number | null>(null);
  // const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // const handlePrev = () => setCurrentIdx((currentIdx - 1 + characters.length) % characters.length);
  // const handleNext = () => setCurrentIdx((currentIdx + 1) % characters.length);

  // // Swipe handlers
  // const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
  //   setTouchStartX(e.touches[0].clientX);
  // };
  // const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
  //   setTouchEndX(e.changedTouches[0].clientX);
  //   if (touchStartX !== null) {
  //     const diff = e.changedTouches[0].clientX - touchStartX;
  //     if (Math.abs(diff) > 50) {
  //       if (diff < 0) {
  //         handleNext(); // swipe left
  //       } else {
  //         handlePrev(); // swipe right
  //       }
  //     }
  //   }
  //   setTouchStartX(null);
  //   setTouchEndX(null);
  // };

  // return (
  //   <section
  //     className="relative flex flex-col md:flex-row items-center justify-center min-h-[60vh] md:min-h-screen px-2 sm:px-4 md:px-20 py-8 md:py-0"
  //     style={{ minHeight: '100dvh' }}
  //     id="home"
  //   >
  //     {/* Main content row */}
  //     <div
  //       className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-0 relative"
  //       onTouchStart={handleTouchStart}
  //       onTouchEnd={handleTouchEnd}
  //     >
  //       {/* Left Arrow - desktop only */}
  //       <div className="hidden md:flex items-center justify-center md:absolute md:left-[-120px] left-0 top-1/2 md:-translate-y-1/2 z-30 mb-4 md:mb-0">
  //         <button
  //           onClick={handlePrev}
  //           className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-2xl md:text-4xl rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 border-none shadow-none backdrop-blur-sm"
  //           aria-label="Previous character"
  //           style={{ userSelect: 'none' }}
  //         >
  //           <span className="drop-shadow-lg">&#60;</span>
  //         </button>
  //       </div>

  //       {/* Character Image */}
  //       <div className="flex justify-center w-full md:w-[50%] max-h-[70vh] md:max-h-[70vh] order-2 md:order-2">
  //         <img
  //           src={current.image}
  //           alt={current.name}
  //           className="rounded-lg shadow-lg object-contain w-[220px] h-[280px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[520px]"
  //           loading="lazy"
  //           draggable={false}
  //         />
  //       </div>

  //       {/* Character Info */}
  //       <div className="flex-1 flex flex-col justify-center items-center md:items-start w-full md:w-[50%] order-3 md:order-3 mt-6 md:mt-0 md:ml-10 max-w-xl rounded-lg p-4 sm:p-6 shadow bg-black">
  //         <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center md:text-left">{current.name}</h2>
  //         <p className="mb-4 text-center md:text-left text-sm sm:text-base">{current.description}</p>
  //         <div className="flex gap-4 mt-2">
  //         </div>
  //       </div>

  //       {/* Right Arrow - desktop only */}
  //       <div className="hidden md:flex items-center justify-center md:absolute md:right-[-120px] right-0 top-1/2 md:-translate-y-1/2 z-30 mt-4 md:mt-0">
  //         <button
  //           onClick={handleNext}
  //           className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 text-2xl md:text-4xl rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black/40 border-none shadow-none backdrop-blur-sm"
  //           aria-label="Next character"
  //           style={{ userSelect: 'none' }}
  //         >
  //           <span className="drop-shadow-lg">&#62;</span>
  //         </button>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <div className="my-24">
      <CardCarousel showPagination={false} images={characters}/>
    </div>
  )
}
