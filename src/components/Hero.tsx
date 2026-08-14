"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Volume2, VolumeX, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Efeito para travar o scroll do navegador durante a intro
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIntroFinished(true);
      document.body.style.overflow = "auto";
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Intro Cinemática */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.15, filter: "blur(12px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] overflow-hidden pointer-events-auto"
          >
            <div className="absolute w-[600px] h-[600px] rounded-full border border-[rgba(212,255,0,0.1)] flex items-center justify-center pointer-events-none">
              <div className="w-[200px] h-[200px] rounded-full border border-[rgba(212,255,0,0.1)]" />
            </div>

            <div className="relative z-10 text-center px-6">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs uppercase font-mono tracking-[0.4em] text-[#D4FF00] block mb-8"
              >
                Matchday Experience • O Padrão Vila Society
              </motion.span>

              <motion.div
                initial={{ scale: 0.1, opacity: 0, z: -1000 }}
                animate={{
                  scale: [0.1, 1.8, 14],
                  opacity: [0, 1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
                className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden shadow-[0_0_100px_rgba(212,255,0,0.2)] border border-[rgba(212,255,0,0.3)]"
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
                className="mt-10 text-xl sm:text-2xl font-black tracking-widest text-white font-mono"
              >
                AUTORIZADO O INÍCIO DO JOGO...
              </motion.h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/50 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,255,0,0.08),transparent_60%)] z-10" />

        <video
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover opacity-35 scale-105 filter saturate-125 contrast-125"
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
          className="p-3.5 rounded-full bg-[#0A0A0A]/90 border border-[rgba(212,255,0,0.3)] text-[#D4FF00] hover:bg-[#D4FF00] hover:text-black transition-all shadow-[0_0_20px_rgba(212,255,0,0.15)] backdrop-blur-md cursor-pointer"
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
      <div className="max-w-7xl mx-auto px-6 text-center relative z-20 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: introFinished ? 1 : 0,
            y: introFinished ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/80 border border-[rgba(212,255,0,0.3)] text-xs font-mono uppercase tracking-widest text-[#D4FF00] mb-8 backdrop-blur-md shadow-[0_0_25px_rgba(212,255,0,0.15)]"
        >
          <Flame className="w-3.5 h-3.5" />
          <span>O Complexo Esportivo Definitivo da Região</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: introFinished ? 1 : 0,
            y: introFinished ? 0 : 20,
          }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white max-w-5xl mx-auto uppercase italic leading-[0.95]"
        >
          Esqueça o amadorismo. Aqui a sua pelada tem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] via-[#a3cc00] to-white">
            ritmo de final de campeonato
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
          className="mt-6 text-lg sm:text-xl text-[#A3A3A3] max-w-2xl mx-auto font-medium leading-relaxed font-sans"
        >
          Esqueça o piso duro e a iluminação precária. No Vila Society você
          comanda o jogo em gramado sintético importado, placar integrado e
          estrutura de clube europeu.
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
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4FF00] text-black font-black text-xs uppercase tracking-widest hover:bg-white transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_35px_rgba(212,255,0,0.3)]"
          >
            Garantir Meu Horário
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Informações rápidas de rodapé do Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: introFinished ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center"
        >
          <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/5 backdrop-blur-sm">
            <span className="block text-white font-black text-base uppercase tracking-wider font-mono">
              FIFA Quality Pro
            </span>
            <span className="text-xs text-[#737373] uppercase tracking-wider mt-0.5 block font-mono">
              Zero Risco de Lesão
            </span>
          </div>
          <div className="p-4 rounded-2xl bg-[#0A0A0A] border border-white/5 backdrop-blur-sm">
            <span className="block text-white font-black text-base uppercase tracking-wider font-mono">
              Vestiários VIP
            </span>
            <span className="text-xs text-[#737373] uppercase tracking-wider mt-0.5 block font-mono">
              Duchas Térmicas & Biometria
            </span>
          </div>
          <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-[#0A0A0A] border border-white/5 backdrop-blur-sm">
            <span className="block text-white font-black text-base uppercase tracking-wider font-mono">
              Sports Bar 4K
            </span>
            <span className="text-xs text-[#737373] uppercase tracking-wider mt-0.5 block font-mono">
              Chopp Trincando & Resenha
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
