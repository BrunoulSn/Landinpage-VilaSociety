"tsx";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#061a12]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#10B981]/30"
          : "bg-gradient-to-b from-[#061a12]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white leading-none">
              VILA SOCIETY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#E2E8F0]">
          <Link
            href="#estrutura"
            className="hover:text-[#34D399] transition-colors font-semibold"
          >
            Estrutura
          </Link>
          <Link
            href="#planos"
            className="hover:text-[#34D399] transition-colors font-semibold"
          >
            Agendamento
          </Link>
          <Link
            href="#depoimentos"
            className="hover:text-[#34D399] transition-colors font-semibold"
          >
            Comunidade
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#planos"
            className="px-5 py-2.5 rounded-full bg-[#10B981] text-[#061a12] text-sm font-bold transition-all duration-300 hover:bg-[#34D399] shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            Reservar Society
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-[#0b291d] border border-[#10B981]/30 text-[#34D399] focus:outline-none shadow-md"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu Seguro */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#061a12]/98 border-b border-[#10B981]/30 px-6 py-6 flex flex-col gap-4 shadow-2xl backdrop-blur-xl"
          >
            <Link
              href="#estrutura"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#E2E8F0] hover:text-[#34D399] py-1 transition-colors"
            >
              Estrutura
            </Link>
            <Link
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#E2E8F0] hover:text-[#34D399] py-1 transition-colors"
            >
              Agendamento
            </Link>
            <Link
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#E2E8F0] hover:text-[#34D399] py-1 transition-colors"
            >
              Comunidade
            </Link>
            <div className="pt-2">
              <Link
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#10B981] text-[#061a12] text-center text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] block"
              >
                Reservar Society
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
