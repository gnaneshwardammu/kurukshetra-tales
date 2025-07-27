"use client";
import type { Metadata } from "next";
import React, { useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Google Translate widget injection
  // Only runs on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add Google Translate script
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      // @ts-ignore
      window.googleTranslateElementInit = function () {
        // @ts-ignore
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          autoDisplay: true
        }, 'google_translate_element');
      };
    }
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Translate widget container with custom styles */}
        <div id="google_translate_element" style={{
          position: 'fixed',
          top: 130,
          right: 16,
          zIndex: 9999,
          background: 'rgba(200,200,200,0.95)',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          padding: '8px 16px',
          border: '1px solid #e0e0e0',
          minWidth: '180px',
          fontSize: '1rem',
        }}></div>
        <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
