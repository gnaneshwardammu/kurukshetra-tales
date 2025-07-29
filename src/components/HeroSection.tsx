"use client";

import { characters } from "../lib/characters";
import { CardCarousel } from "./ui/card-carousel";

export default function HeroSection() {

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-5 text-center my-28">
      <div className=" mt-55">
        <div className="text-5xl md:text-7xl font-semibold text-[#CF932B]">
          The Epic of Ages
        </div>
        <div className="text-lg md:text-xl text-muted-foreground w-full md:max-w-4xl mx-auto my-3">
          Journey through the greatest tale ever told, where heroes rise, kingdoms fall, and dharma guides the destiny of all.
        </div>
      </div>
      
      <CardCarousel showPagination={false} images={characters} />
    </div>
  )
}
