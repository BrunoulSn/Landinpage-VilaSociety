import React from "react";
import {
  ShieldCheck,
  Cpu,
  UtensilsCrossed,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

export default function BentoGrid() {
  return (
    <section
      id="estrutura"
      className="py-28 max-w-7xl mx-auto px-6 relative bg-[#050505]"
    >
      <div className="text-center max-w-2xl mx-auto mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-[rgba(212,255,0,0.3)] text-xs text-[#D4FF00] mb-4 font-mono uppercase tracking-widest backdrop-blur-md shadow-[0_0_25px_rgba(212,255,0,0.15)]">
          <Trophy className="w-3.5 h-3.5" />
          <span>Infraestrutura de Elite</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white uppercase italic leading-[0.95]">
          Feito para quem exige excelência absoluta em cada detalhe.
        </h2>
        <p className="mt-4 text-[#A3A3A3] text-lg max-w-xl mx-auto font-medium leading-relaxed font-sans">
          Mais do que uma quadra, um complexo projetado para elevar o nível do
          seu futebol e proporcionar o máximo de conforto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Bloco 1: Gramado (8 colunas) */}
        <div className="lg:col-span-8 bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-[#050505] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px] border border-[rgba(212,255,0,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.4)] group hover:border-[rgba(212,255,0,0.5)] transition-all duration-500">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[rgba(212,255,0,0.03)] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#121212] border border-[rgba(212,255,0,0.3)] flex items-center justify-center text-[#D4FF00] mb-6 shadow-[0_0_20px_rgba(212,255,0,0.15)] transition-transform duration-300 group-hover:scale-105">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-2 font-bold">
              Padrão FIFA Pro • Absorção Avançada
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase italic">
              Gramado Sintético Alemão de Alta Performance
            </h3>
            <p className="mt-4 text-[#A3A3A3] text-base max-w-xl font-medium leading-relaxed font-sans">
              Fibras monofilamento com amortecimento inteligente de dupla
              camada. Elimina totalmente o risco de torções e garante um rolar
              de bola idêntico aos melhores gramados naturais europeus.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A3A3A3] relative z-10 font-bold">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
              CERTIFICAÇÃO INTERNACIONAL FIFA QUALITY
            </span>
            <span className="text-[#D4FF00] text-xs bg-[#121212] px-3.5 py-1.5 rounded-full border border-[rgba(212,255,0,0.3)] uppercase tracking-wider">
              Absorção de Impacto 99.4%
            </span>
          </div>
        </div>

        {/* Bloco 2: Automação / App (4 colunas) */}
        <div className="lg:col-span-4 bg-[#0A0A0A] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px] border border-white/5 shadow-xl group hover:border-[rgba(212,255,0,0.2)] transition-all duration-500">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00] mb-6 transition-transform duration-300 group-hover:scale-105">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-2 font-bold">
              Tecnologia Integrada
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase italic">
              Placar Digital & App Exclusivo
            </h3>
            <p className="mt-3 text-[#A3A3A3] text-sm font-medium leading-relaxed font-sans">
              Controle cronometrado de partidas, súmulas online e filmagem
              automática dos melhores lances direto no seu celular.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-xs font-mono text-[#D4FF00] font-black tracking-wider relative z-10">
            ESTATÍSTICAS EM TEMPO REAL
          </div>
        </div>

        {/* Bloco 3: Lounge (4 colunas) */}
        <div className="lg:col-span-4 bg-[#0A0A0A] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px] border border-white/5 shadow-xl group hover:border-[rgba(212,255,0,0.2)] transition-all duration-500">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4FF00] mb-6 transition-transform duration-300 group-hover:scale-105">
              <UtensilsCrossed className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-2 font-bold">
              Área de Convivência
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tighter uppercase italic">
              Sports Bar & Lounge
            </h3>
            <p className="mt-3 text-[#A3A3A3] text-sm font-medium leading-relaxed font-sans">
              O pós-jogo mais disputado da região. Chopp artesanal ultragelado,
              petiscos selecionados e telões 4K com as principais ligas.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 text-xs font-mono text-[#D4FF00] font-black tracking-wider relative z-10 flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>ATMOSFERA DE CLUBE EXCLUSIVO</span>
          </div>
        </div>

        {/* Bloco 4: Vestiários VIP (8 colunas) */}
        <div className="lg:col-span-8 bg-gradient-to-br from-[#0A0A0A] via-[#070707] to-[#050505] rounded-[2rem] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px] border border-[rgba(212,255,0,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.4)] group hover:border-[rgba(212,255,0,0.5)] transition-all duration-500">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(212,255,0,0.03)] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-[#121212] border border-[rgba(212,255,0,0.3)] flex items-center justify-center text-[#D4FF00] mb-6 shadow-[0_0_20px_rgba(212,255,0,0.15)] transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono tracking-[0.2em] text-[#D4FF00] uppercase block mb-2 font-bold">
              Conforto de Alto Padrão
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase italic">
              Vestiários Estilo Champions League
            </h3>
            <p className="mt-4 text-[#A3A3A3] text-base max-w-xl font-medium leading-relaxed font-sans">
              Duchas de alta pressão com controle térmico, armários individuais
              inteligentes com biometria e acabamento impecável para o seu
              bem-estar.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#A3A3A3] relative z-10 font-bold">
            <span className="tracking-wider">
              HIGIENIZAÇÃO E ESTERILIZAÇÃO CONTÍNUA
            </span>
            <span className="text-[#D4FF00] text-xs bg-[#121212] px-3.5 py-1.5 rounded-full border border-[rgba(212,255,0,0.3)] uppercase tracking-wider">
              Kit Higiene & Toalhas Premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
