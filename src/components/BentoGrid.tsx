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
    <section id="estrutura" className="py-24 max-w-7xl mx-auto px-6 relative">
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#081711] border border-white/10 text-xs text-[#34D399] mb-3 font-mono uppercase tracking-wider shadow-sm">
          <Trophy className="w-3.5 h-3.5" />
          <span>Infraestrutura de Elite</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Feito para quem exige excelência absoluta em cada detalhe.
        </h2>
        <p className="mt-3 text-[#94A3B8] text-sm sm:text-base leading-relaxed">
          Mais do que uma quadra, um complexo projetado para elevar o nível do
          seu futebol e proporcionar o máximo de conforto.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Bloco 1: Gramado */}
        <div className="lg:col-span-8 bg-[#061a12] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] border border-white/10 shadow-lg group">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#0b291d] border border-white/10 flex items-center justify-center text-[#34D399] mb-5 shadow-sm transition-transform group-hover:scale-105">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#34D399] uppercase block mb-1">
              Padrão FIFA Pro • Absorção Avançada
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Gramado Sintético Alemão de Alta Performance
            </h3>
            <p className="mt-3 text-[#94A3B8] text-sm sm:text-base max-w-xl leading-relaxed">
              Fibras monofilamento com amortecimento inteligente de dupla
              camada. Elimina totalmente o risco de torções e garante um rolar
              de bola idêntico aos melhores gramados naturais europeus.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#94A3B8] relative z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              CERTIFICAÇÃO INTERNACIONAL FIFA QUALITY
            </span>
            <span className="text-[#34D399] font-semibold text-xs bg-[#0b291d] px-3 py-1 rounded-full border border-white/10">
              Absorção de Impacto 99.4%
            </span>
          </div>
        </div>

        {/* Bloco 2: Automação / App */}
        <div className="lg:col-span-4 bg-[#050b08] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] border border-white/5 shadow-md">
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#34D399] mb-5">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#34D399] uppercase block mb-1">
              Tecnologia Integrada
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Placar Digital & App Exclusivo
            </h3>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed">
              Controle cronometrado de partidas, súmulas online e filmagem
              automática dos melhores lances direto no seu celular.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#34D399] font-semibold relative z-10">
            ESTATÍSTICAS EM TEMPO REAL
          </div>
        </div>

        {/* Bloco 3: Lounge */}
        <div className="lg:col-span-4 bg-[#050b08] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] border border-white/5 shadow-md">
          <div className="relative z-10">
            <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#34D399] mb-5">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#34D399] uppercase block mb-1">
              Área de Convivência
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Sports Bar & Lounge
            </h3>
            <p className="mt-2 text-[#94A3B8] text-sm leading-relaxed">
              O pós-jogo mais disputado da região. Chopp artesanal ultragelado,
              petiscos selecionados e telões 4K com as principais ligas.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#34D399] font-semibold relative z-10 flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>ATMOSFERA DE CLUBE EXCLUSIVO</span>
          </div>
        </div>

        {/* Bloco 4: Vestiários VIP */}
        <div className="lg:col-span-8 bg-[#061a12] rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[320px] border border-white/10 shadow-lg group">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-[#0b291d] border border-white/10 flex items-center justify-center text-[#34D399] mb-5 shadow-sm transition-transform group-hover:scale-105">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono tracking-widest text-[#34D399] uppercase block mb-1">
              Conforto de Alto Padrão
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Vestiários Estilo Champions League
            </h3>
            <p className="mt-3 text-[#94A3B8] text-sm sm:text-base max-w-xl leading-relaxed">
              Duchas de alta pressão com controle térmico, armários individuais
              inteligentes com biometria e acabamento impecável para o seu
              bem-estar.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#94A3B8] relative z-10">
            <span>HIGIENIZAÇÃO E ESTERILIZAÇÃO CONTÍNUA</span>
            <span className="text-[#34D399] font-semibold text-xs bg-[#0b291d] px-3 py-1 rounded-full border border-white/10">
              Kit Higiene & Toalhas Premium
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
