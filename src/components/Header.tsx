"use client";


const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#familyTree", label: "Family Tree" },
  { href: "#books", label: "Books" },
];


import {  useState } from "react";
import { ModeToggle } from "./mode-toggle";



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full flex justify-between items-center py-4 px-10 shadow-md  top-0 z-50  bg-[#FFFDF6]/10 border-transparent border/10 backdrop-blur-lg text-black dark:text-white">
      <h1 className="text-xl font-bold tracking-wide ">
        Mahabharatam
      </h1>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
        {navLinks.map((link, idx) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:underline relative"
          >
            {link.label}
          </a>
        ))}
        <ModeToggle />
 
      </nav>
      {/* Mobile hamburger */}
      <div className="md:hidden flex items-center text-black">
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
        <nav className="absolute top-full left-0 w-full shadow-md flex flex-col gap-4 py-4 px-6 z-50 md:hidden animate-fade-in">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:underline dark:text-white text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
        </nav>
      )}
    </header>
  );
}