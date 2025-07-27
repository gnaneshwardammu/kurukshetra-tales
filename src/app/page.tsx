
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BooksSection from "../components/BooksSection";



export default function Home() {
  return (
    <div className="font-sans w-full h-screen ">
      <Header />
      <main className="flex-1 flex flex-col gap-12 items-center px-4 sm:px-12 max-w-7xl mx-auto w-full">
        <HeroSection />
        <BooksSection />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm  border-t mt-8">
        &copy; {new Date().getFullYear()} Gnaneshwar Dammu
      </footer>
     
    </div>
  );
}
