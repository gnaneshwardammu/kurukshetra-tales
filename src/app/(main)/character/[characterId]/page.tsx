"use client";
import { characters } from "@/lib/characters";
import { notFound, useRouter } from "next/navigation";

interface Props {
    params: { characterId: string };
}

export default function CharacterDetailPage({ params }: Props) {
    const router = useRouter();
    const id = Number(params.characterId);
    const character = characters.find((c) => c.id === id);

    if (!character) return notFound();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white py-10 px-4">
                    <img
                        src={character.src}
                        alt={character.alt}
                        className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-orange-200"
                    />
                    <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">{character.name}</h1>
                    <p className="text-lg text-gray-700 whitespace-pre-line max-w-2xl text-center">
                        {character.description}
                    </p>
                    <button
                        onClick={() => router.push("/home")}
                        className="mt-8 px-5 py-2 bg-orange-700 text-white rounded-full shadow hover:bg-orange-600 transition-colors"
                    >
                        ← Back to Home
                    </button>
        </div>
    );
}