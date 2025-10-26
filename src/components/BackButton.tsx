'use client';

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    
    return (
        <button
            onClick={() => router.push("/home")}
            className="mt-8 px-5 py-2 bg-orange-700 text-white rounded-full shadow hover:bg-orange-600 transition-colors"
        >
            ← Back to Home
        </button>
    );
}