"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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

  return (
    <header className="w-full bg-white text-[#1E1E1E] font-[Geist]">
      <div className="max-w-[1150px] mx-auto flex items-center justify-between py-2 px-5 md:px-2">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/img/footer_logo.png"
            alt="Abun Logo"
            width={170}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[16px] font-medium no-underline transition ${
                pathname === link.href
                  ? "text-[#766BEA]" // Active color
                  : "text-[#1E1E1E] hover:text-[#766BEA]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden md:flex">
          <Link
            href="https://app.abun.com/auth/signup"
            className="bg-[#2E64FE] text-white px-6 py-3 rounded-[10px] text-[16px] font-medium hover:bg-[#6088f5e9] transition"
          >
            GET STARTED
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="block w-6 h-[2px] bg-[#1E1E1E]"></span>
          <span className="block w-6 h-[2px] bg-[#1E1E1E]"></span>
          <span className="block w-6 h-[2px] bg-[#1E1E1E]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[16px] font-medium transition no-underline ${
                  pathname === link.href
                    ? "text-[#766BEA]"
                    : "text-[#1E1E1E] hover:text-[#766BEA]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://app.abun.com/auth/signup"
              className="bg-[#2E64FE] text-white px-5 py-2 rounded-[10px] text-[16px] font-medium hover:bg-[#6088f5e9] transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
