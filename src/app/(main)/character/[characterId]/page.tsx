import { characters } from "@/lib/characters";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "./BackButton";

export default function Page({ params }: { params: { characterId: string } }) {
    const id = Number(params.characterId);
    const character = characters.find((c) => c.id === id);

    if (!character) return notFound();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4">
            <Image
                src={character.src}
                alt={character.alt}
                width={500}
                height={500}
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-orange-200"
            />
            <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">{character.name}</h1>
            <p className="text-lg text-gray-700 whitespace-pre-line max-w-2xl text-center">
                {character.description}
            </p>
            <BackButton />
        </div>
    );
}