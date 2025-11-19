
import { characters } from "@/lib/characters";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default async function Page({
    params: paramsPromise,
}: {
    params: Promise<{ characterId: string }>;
}) {
    const { characterId } = await paramsPromise;
    const id = Number(characterId);
    const index = characters.findIndex((c) => c.id === id);
    const character = characters[index];

    if (!character || index === -1) {
        notFound();
        return null;
    }

    const prev = characters[index - 1] ?? null;
    const next = characters[index + 1] ?? null;

    return (
        <>
            <div className=" flex gap-x-20 items-center justify-center  pt-28 px-4 mt-1">
            {prev ? (
                    <Link
                        href={`/character/${prev.id}`}
                        className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
                    >
                        ← {prev.name}
                    </Link>
                ) : (
                    <button className="px-4 py-2 bg-orange-600 text-white rounded-md  cursor-not-allowed" disabled>
                        ← Prev
                    </button>
                )}
            <div className="flex flex-col items-center justify-center">
                <Image
                    src={character.src}
                    alt={character.alt}
                    width={500}
                    height={500}
                    className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 border-4 border-orange-200 object-top"
                    priority
                />
                <h1 className="text-3xl font-bold text-orange-700 mb-4 text-center">
                    {character.name}
                </h1>
                <p className="text-lg text-gray-700 dark:text-white whitespace-pre-line max-w-2xl text-center">
                    {character.description}
                </p>
            </div>
             {next ? (
                    <Link
                        href={`/character/${next.id}`}
                        className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
                    >
                        {next.name} →
                    </Link>
                ) : (
                    <button className="px-4 py-2 bg-orange-600 rounded-md text-white cursor-not-allowed" disabled>
                        Next →
                    </button>
                )}

            
        </div>
       <div className="flex items-center justify-center mt-8"> <BackButton /></div>
        </>
    );
}