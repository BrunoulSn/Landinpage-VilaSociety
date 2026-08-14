"tsx";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Efeito para travar o scroll do navegador durante a intro
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIntroFinished(true);
      document.body.style.overflow = "auto"; // Libera o scroll após a animação
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Garante limpeza ao desmontar
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07110c] pitch-pattern">
      {/* Intro Cinemática: Bola voando para a tela (Bloqueando interação) */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050c08] overflow-hidden pointer-events-auto"
          >
            {/* Círculo Central do Campo simulado no fundo */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
              <div className="w-[150px] h-[150px] rounded-full border border-white/10" />
            </div>

            <div className="relative z-10 text-center px-4">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs uppercase font-mono tracking-[0.4em] text-[#22c55e] block mb-8"
              >
                Matchday Experience • Gramado FIFA Pro
              </motion.span>

              <motion.div
                initial={{ scale: 0.1, opacity: 0, z: -1000 }}
                animate={{
                  scale: [0.1, 1.8, 14],
                  opacity: [0, 1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden shadow-[0_0_90px_rgba(34,197,94,0.4)] border-2 border-white/20"
              >
                <img
                  src="https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=60,fit=pad,format=webp/uploads/2026/06/image-42.png"
                  alt="Bola de Futebol"
                  className="w-full h-full object-cover rounded-full filter drop-shadow-2xl"
                />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: [0, 1, 0], scale: 1 }}
                transition={{ duration: 2 }}
                className="mt-10 text-2xl sm:text-4xl font-bold tracking-tight text-white font-mono"
              >
                APITO INICIAL EM 3... 2... 1...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video Real de Jogo de Society rolando na tela toda */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#07110c] via-[#07110c]/75 to-[#07110c]/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(21,128,61,0.2),transparent_60%)] z-10" />

        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105 filter saturate-125 contrast-125"
        >
          <source
            src="https://media.istockphoto.com/id/2273930960/pt/v%C3%ADdeo/coach-soccer-assistant-discussing-some-plays-with-the-team.mp4?s=mp4-640x640-is&k=20&c=07Jfjz5UzUx-9l3IPS5xHekb3Mtk1i44DRQ5KE6Z1Gw="
            type="video/mp4"
          />
        </video>
      </div>

      {/* Controle de Áudio */}
      <div className="absolute bottom-8 right-8 z-30 hidden sm:flex items-center gap-2">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 rounded-full stadium-glass text-[#22c55e] hover:bg-[#15803d]/20 transition-all shadow-lg cursor-pointer"
          aria-label="Controlar Som"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: introFinished ? 1 : 0,
            y: introFinished ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1]"
        >
          O palco perfeito para a sua{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#4ade80]">
            partida de respeito
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
          className="mt-6 text-lg sm:text-xl text-[#9ca3af] max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Aqui você joga em gramado profissional com amortecimento avançado,
          iluminação de estádio e infraestrutura completa para o seu time.
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
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#16a34a] text-white font-bold text-sm hover:bg-[#15803d] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(22,163,74,0.4)]"
          >
            Agendar Horário
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Informações rápidas de rodapé do Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introFinished ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center text-xs font-mono text-[#9ca3af]"
        >
          <div>
            <span className="block text-white font-bold text-sm">
              4 Quadras
            </span>
            <span>Society Cobertas</span>
          </div>
          <div>
            <span className="block text-white font-bold text-sm">
              Estacionamento
            </span>
            <span>Seguro e Gratuito</span>
          </div>
          <div className="col-span-2 md:col-span-1">
            <span className="block text-white font-bold text-sm">
              Sports Bar
            </span>
            <span>Gelada Garantida</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
