"use client";
import { useEffect, useRef } from "react";

export default function TextSlider() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      // Duplicate content for seamless infinite loop
      listRef.current.innerHTML += listRef.current.innerHTML;
    }
  }, []);

  const texts = [
    "Hello World!",
    "¡Hola, Mundo!",
    "Bonjour, le monde !",
    "Hallo, Welt!",
    "नमस्ते, दुनिया!",
    "你好，世界！",
    "مرحباً، أيها العالم!",
    "Привет, мир!",
    "Olá, Mundo!",
    "Ciao, Mondo!",
    "Xin chào, Thế giới!",
    "こんにちは、世界！",
    "안녕, 세상!",
    "Hujambo, Dunia!",
  ];

  return (
    <div className="relative h-[3em] overflow-hidden">
      <ul
        ref={listRef}
        className="animate-scroll-vertical flex flex-col m-0 p-0 list-none text-center font-[SF Pro Display] font-medium text-[44px] leading-[1.11] tracking-[-1%]"
      >
        {texts.map((text, index) => (
          <li key={index} className="h-[2em] flex items-center justify-center">
            {text}
          </li>
        ))}
      </ul>

      {/* Inline CSS for vertical animation */}
      <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-vertical {
          animation: scroll-vertical 12s linear infinite;
        }
      `}</style>
    </div>
  );
}
