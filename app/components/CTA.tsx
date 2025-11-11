"use client";
import { motion } from "framer-motion";

export default function ClaimCTA() {
  return (
    <motion.a
      href="https://app.abun.com/auth/signup"
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-[#1B1B1B] bg-[#FFD233] rounded-full shadow-[0_0_15px_#FFD233] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#FFD233]"
      whileHover={{ y: -3 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="flex items-center gap-2">
        Claim Your Free Account
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          ➔
        </span>
      </span>
    </motion.a>
  );
}
