import React from "react";
import {
  ShieldCheck,
  Cpu,
  UtensilsCrossed,
  Sparkles,
  Trophy,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section
      id="estrutura"
      className="py-20 max-w-7xl mx-auto px-6 relative bg-[#050505]"
    >
      <div className="text-center max-w-2xl mx-auto mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-[rgba(212,255,0,0.3)] text-xs text-[#D4FF00] mb-4 font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_25px_rgba(212,255,0,0.15)]">
          <Trophy className="w-3.5 h-3.5" />
          <span>Infraestrutura de Elite</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase italic leading-[0.95]">
          Para quem exige excelência em cada detalhe.
        </h2>
        <p className="mt-3 text-[#A3A3A3] text-sm sm:text-base max-w-lg mx-auto font-medium leading-relaxed font-sans">
          Um complexo projetado para elevar o nível do seu futebol com máximo
          conforto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10">
        {/* Bloco 1: Gramado (7 colunas) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-[#050505] rounded-[1.75rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between border border-[rgba(212,255,0,0.2)] shadow-xl group hover:border-[rgba(212,255,0,0.4)] transition-all duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(212,255,0,0.03)] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-[#121212] border border-[rgba(212,255,0,0.3)] flex items-center justify-center text-[#D4FF00] mb-4 shadow-[0_0_15px_rgba(212,255,0,0.1)]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-1 font-bold">
              Padrão FIFA Pro
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase italic">
              Gramado Sintético Alemão
            </h3>
            <p className="mt-2 text-[#A3A3A3] text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Amortecimento inteligente de dupla camada. Elimina risco de
              torções e garante rolagem perfeita, idêntica à Europa.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-[11px] font-mono text-[#A3A3A3] relative z-10 font-bold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
              FIFA QUALITY
            </span>
            <span className="text-[#D4FF00] bg-[#121212] px-3 py-1 rounded-full border border-[rgba(212,255,0,0.3)] uppercase tracking-wider">
              Absorção 99.4%
            </span>
          </div>
        </div>

        {/* Bloco 2: Automação / App (5 colunas) */}
        <div className="lg:col-span-5 bg-[#0A0A0A] rounded-[1.75rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-xl group hover:border-[rgba(212,255,0,0.2)] transition-all duration-300">
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00] mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-1 font-bold">
              Tecnologia Integrada
            </span>
            <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">
              Placar & App Exclusivo
            </h3>
            <p className="mt-2 text-[#A3A3A3] text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Controle cronometrado, súmulas online e filmagem automática dos
              melhores lances direto no celular.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#D4FF00] font-black tracking-wider relative z-10">
            ESTATÍSTICAS EM TEMPO REAL
          </div>
        </div>

        {/* Bloco 3: Lounge (5 colunas) */}
        <div className="lg:col-span-5 bg-[#0A0A0A] rounded-[1.75rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-xl group hover:border-[rgba(212,255,0,0.2)] transition-all duration-300">
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00] mb-4">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-1 font-bold">
              Área de Convivência
            </span>
            <h3 className="text-xl font-black text-white tracking-tighter uppercase italic">
              Sports Bar & Lounge
            </h3>
            <p className="mt-2 text-[#A3A3A3] text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Chopp artesanal ultragelado, petiscos selecionados e telões 4K
              para o pós-jogo perfeito.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-[#D4FF00] font-black tracking-wider relative z-10">
            ATMOSFERA DE CLUBE EXCLUSIVO
          </div>
        </div>

        {/* Bloco 4: Vestiários VIP (7 colunas) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-[#050505] rounded-[1.75rem] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between border border-[rgba(212,255,0,0.2)] shadow-xl group hover:border-[rgba(212,255,0,0.4)] transition-all duration-300">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[rgba(212,255,0,0.03)] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-[#121212] border border-[rgba(212,255,0,0.3)] flex items-center justify-center text-[#D4FF00] mb-4 shadow-[0_0_15px_rgba(212,255,0,0.1)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-1 font-bold">
              Conforto de Alto Padrão
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase italic">
              Vestiários Champions League
            </h3>
            <p className="mt-2 text-[#A3A3A3] text-xs sm:text-sm font-medium leading-relaxed font-sans">
              Duchas de alta pressão com controle térmico, armários individuais
              inteligentes e total bem-estar.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-4 text-[11px] font-mono text-[#A3A3A3] relative z-10 font-bold">
            <span className="tracking-wider">HIGIENIZAÇÃO CONTÍNUA</span>
            <span className="text-[#D4FF00] bg-[#121212] px-3 py-1 rounded-full border border-[rgba(212,255,0,0.3)] uppercase tracking-wider">
              Kit Toalhas Premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
