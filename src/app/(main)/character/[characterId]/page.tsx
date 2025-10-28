
'use client';

import { characters } from "@/lib/characters";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page({ 
    params: { characterId }
}: {
    params: { characterId: string };
}) {
    const router = useRouter();
    const id = Number(characterId);
    const character = characters.find((c) => c.id === id);
    
    const currentIndex = characters.findIndex((c) => c.id === id);
    const prevCharacter = currentIndex > 0 ? characters[currentIndex - 1] : null;
    const nextCharacter = currentIndex < characters.length - 1 ? characters[currentIndex + 1] : null;

    if (!character) {
        notFound();
        return null;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-24 overflow-hidden px-4">
            {/* Main Container */}
            <div className="max-w-4xl w-full relative">
                {/* Navigation Arrows */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8">
                    {prevCharacter && (
                        <button
                            onClick={() => router.push(`/character/${prevCharacter.id}`)}
                            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors shadow-md transform hover:scale-105"
                            title={prevCharacter.name}
                        >
                            <ChevronLeft size={24} className="text-orange-700" />
                        </button>
                    )}
                    {nextCharacter && (
                        <button
                            onClick={() => router.push(`/character/${nextCharacter.id}`)}
                            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors shadow-md transform hover:scale-105"
                            title={nextCharacter.name}
                        >
                            <ChevronRight size={24} className="text-orange-700" />
                        </button>
                    )}
                </div>

                {/* Character Content */}
                <div className="flex flex-col items-center mx-auto max-w-2xl">
                    <Image
                        src={character.src}
                        alt={character.alt}
                        width={500}
                        height={500}
                        className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-orange-200"
                        priority
                    />
                    <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">
                        {character.name}
                    </h1>
                    <p className="text-lg text-gray-700 whitespace-pre-line text-center mb-8">
                        {character.description}
                    </p>
                    <BackButton />
                </div>
            </div>
        </div>
    );
}