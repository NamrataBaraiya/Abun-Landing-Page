"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "#Faq" },
    { name: "Blog", href: "#Blog" },
    { name: "Login", href: "https://app.abun.com/auth/login" },
  ];

  // Disable page scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-white text-[#1E1E1E] font-[Geist] relative">
      {/* Header Bar */}
      <div className="max-w-[1150px] mx-auto flex items-center justify-between py-2 px-5 md:px-2">
        
        {/* Logo Left */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/footer_logo.png"
            alt="Abun Logo"
            width={170}
            height={50}
            className="w-[80px] object-contain xl:w-[170px] md:w-[150px] sm:w-[100px]"
          />
        </Link>

        {/* Desktop Navigation — DO NOT CHANGE */}
        <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[16px] font-medium no-underline transition ${
                pathname === link.href
                  ? "text-[#766BEA]"
                  : "text-[#1E1E1E] hover:text-[#766BEA]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Hamburger (Right) */}
        <div className="flex items-center gap-4">
          <Link
            href="https://app.abun.com/auth/signup"
            className="bg-[#2E64FE] text-white px-4 py-2 rounded-[10px] text-[14px] font-medium hover:bg-[#6088f5e9] transition md:flex"
          >
            GET STARTED
          </Link>

          {/* Hamburger Icon */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Toggle Menu"
          >
            <span className="block w-6 h-[2px] bg-[#2E64FE]"></span>
            <span className="block w-6 h-[2px] bg-[#2E64FE]"></span>
            <span className="block w-6 h-[2px] bg-[#2E64FE]"></span>
          </button>
        </div>
      </div>

      {/* Black Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Off-Canvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[50%] bg-[#2E64FE] text-white z-50 transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* White X Close Icon */}
        <button
          className="absolute top-4 right-4 text-white text-3xl leading-none"
          onClick={() => setIsMenuOpen(false)}
        >
          ×
        </button>

        {/* Menu Items */}
        <nav className="flex flex-col mt-16 space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[18px] font-medium no-underline transition ${
                pathname === link.href ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
