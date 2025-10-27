'use client';

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

export default function BookCard({ title, image, id }: { title: string; image: string, id: string }) {
  return (
    <>
      <Script src="https://cdnc.heyzine.com/release/heyzine.4.min.css" />
      <div className="max-w-sm rounded-xl flex flex-col relative">
        <div className="w-[300px] h-[300px] rounded-xl">
          <Image src={image} alt={title} fill className="rounded-xl object-cover"/>
        </div>
        <div 
          onClick={() => {
            const heyzineUrl = `https://heyzine.com/flip-book/${id}.html`;
            window.open(heyzineUrl, '_blank');
          }} 
          className="px-2 py-2 rounded-full flex items-center border justify-center absolute bottom-2 right-2 bg-neutral-900 cursor-pointer gap-x-2 hover:bg-neutral-800 transition-colors"
        >
          <div className="text-xl font-semibold bg-yellow-500 px-2 rounded-full py-1 whitespace-nowrap hover:bg-yellow-400 transition-colors">
            {title}
          </div>
          <ArrowUpRight className="text-yellow-500" />
        </div>
      </div>
    </>
  );
}