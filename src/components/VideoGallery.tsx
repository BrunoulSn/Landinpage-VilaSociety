"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Animação automática de entrada (dura 2.4 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030805]">
      {/* Background Video Real / Imagem em Alta Definição */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030805] via-[#030805]/70 to-[#030805]/40 z-10" />

        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105 filter saturate-125"
        >
          <source
            src="https://www.pexels.com/pt-br/download/video/19310016/"
            type="video/mp4"
          />
          Seu navegador não suporta vídeos.
        </video>
      </div>

      {/* Controle de Áudio/Mute do Vídeo */}
      <div className="absolute bottom-8 right-8 z-30 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 rounded-full glass-card border border-[#10B981]/30 text-[#10B981] hover:bg-[#10B981]/20 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] cursor-pointer"
          aria-label="Controlar Som"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Conteúdo Principal do Hero */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: introFinished ? 1 : 0,
            y: introFinished ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.08]"
        >
          Reúne a sua galera para jogar no{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#34D399] to-emerald-200">
            padrão dos profissionais
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: introFinished ? 1 : 0,
            y: introFinished ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Esqueça os campos comuns. Aqui você encontra gramado impecável, a
          melhor resenha do pós-jogo e uma experiência feita para quem leva o
          futebol a sério.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: introFinished ? 1 : 0,
            y: introFinished ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#planos"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#10B981] text-black font-semibold text-sm hover:bg-[#34D399] transition-all flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(16,185,129,0.4)] cursor-pointer"
          >
            Reserve seu society
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
