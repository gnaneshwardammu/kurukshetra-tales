'use client'
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BookCard({ title, image, id }: { title: string; image: string, id: string }) {
  const router = useRouter();

  return (
    <div className="max-w-sm rounded-xl flex flex-col relative">
      <div className="w-[300px] h-[300px] rounded-xl"><Image src={image} alt={title} fill className="rounded-xl object-cover"/></div>
      <div onClick={() => window.open(`https://mahabharata-online.github.io/${id}/1.html`, '_blank')} className="px-2 py-2 rounded-full flex items-center border justify-center absolute bottom-2 right-2 bg-neutral-900 cursor-pointer gap-x-2">
        <div className="text-xl font-semibold bg-yellow-500 px-2 rounded-full py-1 whitespace-nowrap">{title}</div>
        <ArrowUpRight />
      </div>
    </div>
  );
}
