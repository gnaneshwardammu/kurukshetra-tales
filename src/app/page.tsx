
"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const videoRef = useRef(null);
  const router = useRouter();

  // Auto navigate to Home after video ends
  const handleVideoEnd = () => {
    router.push("/home");
  };

  const handleEnterClick = () => {
    router.push("/home");
  };

  return (
    <div className="relative w-full h-screen font-sans overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/mahabharat.mp4"
        autoPlay
        loop={false}
        muted
        onEnded={handleVideoEnd}
      />
      <div className="absolute top-35 left-0 w-full h-full flex flex-col items-center justify-center z-10 bg-opacity-40">
        {/*<div className="absolute top-[-100] left-0 w-full z-20 flex justify-center bg-opacity-60 py-4"><img
          src="/Mahabharatam-eng.png"
          alt="Mahabharatam Logo"
          style={{ height: '10rem', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }}
        /></div>*/}
        <h1 className="text-white text-5xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center">Kurukshetra Tales</h1>
        <p className="text-white text-xl md:text-xl font-medium text-center max-w-2xl drop-shadow-lg">
          Dive into the epic saga of Mahabharat. Explore stories, characters, and the legendary battle of Kurukshetra.
        </p>
      <div className="w-full flex justify-center bg-opacity-60 py-4">
        <button
          onClick={handleEnterClick}
          className="px-5 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-yellow-700 to-red-700 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-11/12 sm:w-auto"
        >
          Enter the Epic
        </button>
      </div>
      </div>
      {/* Navbar-style button at the bottom */}
    </div>
  );
}
