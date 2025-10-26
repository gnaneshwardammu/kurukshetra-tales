"use client";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/home#books", label: "Books" },
  { href: "/home#familytree", label: "Genealogy" },
];


import {  useState } from "react";
import { ModeToggle } from "./mode-toggle";



export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full flex justify-between items-center py-4 px-10   top-0 z-50   border-transparent border/10 backdrop-blur-lg text-black dark:text-white">
      <h1 className="text-xl font-bold tracking-tight">
        <img
          src="/Mahabharatam-eng.png"
          alt="Mahabharatam Logo"
          style={{ height: '4rem', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }}
        />{/*<img
          src="/Mahabharatam.png"
          alt="Mahabharatam Logo"
          style={{ height: '2rem', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }}
        /><img
          src="/Mahabharat.png"
          alt="Mahabharatam Logo"
          style={{ height: '3rem', width: 'auto', display: 'inline-block', verticalAlign: 'middle', marginRight: '0.5rem' }}
        />*/}
      </h1>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium items-center lowercase">
        {navLinks.map((link, idx) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:underline relative"
            onClick={() => !link.href.includes("#") && scrollToTop()}
          >
            {link.label}
          </a>
        ))}
 
        <ModeToggle />
      </nav>
      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center text-black dark:text-white">
        <button
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-full bg-white dark:bg-black left-0 w-full  flex flex-col gap-4 py-4 px-6 z-50 md:hidden animate-fade-in transition-all duration-300">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:underline dark:text-white text-lg font-medium"
              onClick={() => {
                setMenuOpen(false);
                !link.href.includes("#") && scrollToTop();
              }}
            >
              {link.label}
            </a>
          ))}
          <ModeToggle/>
        </nav>
      )}
    </header>
  );
}