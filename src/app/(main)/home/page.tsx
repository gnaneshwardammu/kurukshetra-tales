import BooksSection from "@/components/BooksSection";
import { Footer } from "@/components/footer";
import HeroSection from "@/components/HeroSection";

export default function MainPage() {
    return <div className="flex-1 flex flex-col md:gap-12 items-center px-4 sm:px-12 md:max-w-7xl mx-auto w-full">
        <div className="md:h-screen flex items-center "><HeroSection /></div>
        <BooksSection />
        <Footer />
    </div>
}