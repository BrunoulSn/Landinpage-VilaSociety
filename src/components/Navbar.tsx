"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, Sparkles } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-4 border-b border-[rgba(212,255,0,0.15)]"
          : "bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center lg:justify-between">
        {/* Logo de Alto Padrão */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[rgba(212,255,0,0.2)] to-[rgba(212,255,0,0.05)] border border-[rgba(212,255,0,0.4)] flex items-center justify-center text-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.15)] group-hover:border-[#D4FF00] transition-all">
            <Shield className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base tracking-tighter uppercase italic text-white leading-none">
              VILA <span className="text-[#D4FF00]">SOCIETY</span>
            </span>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#737373] uppercase mt-1">
              Club Exclusive
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-mono font-bold uppercase tracking-widest text-[#A3A3A3]">
          <Link
            href="#estrutura"
            className="hover:text-[#D4FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4FF00] hover:after:w-full after:transition-all"
          >
            Estrutura
          </Link>
          <Link
            href="#planos"
            className="hover:text-[#D4FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4FF00] hover:after:w-full after:transition-all"
          >
            Agendamento
          </Link>
          <Link
            href="#depoimentos"
            className="hover:text-[#D4FF00] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4FF00] hover:after:w-full after:transition-all"
          >
            Comunidade
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="#planos"
            className="px-6 py-3 rounded-full bg-[#D4FF00] text-black text-xs font-black uppercase tracking-widest transition-all duration-300 hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(212,255,0,0.35)] flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            Reservar Society
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden absolute right-6 p-2.5 rounded-xl bg-[#0A0A0A] border border-[rgba(212,255,0,0.3)] text-[#D4FF00] focus:outline-none shadow-md hover:bg-[rgba(212,255,0,0.1)] transition-colors"
          aria-label="Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
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
            className="lg:hidden absolute top-full left-0 w-full bg-[#050505]/98 border-b border-[rgba(212,255,0,0.2)] px-6 py-8 flex flex-col gap-5 shadow-2xl backdrop-blur-2xl"
          >
            <Link
              href="#estrutura"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-widest text-[#A3A3A3] hover:text-[#D4FF00] py-2 transition-colors border-b border-white/5"
            >
              Estrutura
            </Link>
            <Link
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-widest text-[#A3A3A3] hover:text-[#D4FF00] py-2 transition-colors border-b border-white/5"
            >
              Agendamento
            </Link>
            <Link
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-widest text-[#A3A3A3] hover:text-[#D4FF00] py-2 transition-colors border-b border-white/5"
            >
              Comunidade
            </Link>
            <div className="pt-2">
              <Link
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#D4FF00] text-black text-center text-xs font-black uppercase tracking-widest shadow-[0_0_25px_rgba(212,255,0,0.4)] block"
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
