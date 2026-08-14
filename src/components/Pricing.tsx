import React from "react";
import { Check, Sparkles } from "lucide-react";
import { Plan } from "@/src/types";

const plans: Plan[] = [
  {
    id: "avulso",
    name: "Locação Avulsa",
    price: "R$ 120",
    period: "por hora",
    description:
      "A excelência da Vila Society para o seu racha semanal com os amigos.",
    features: [
      "Quadra FIFA Pro",
      "Bolas oficiais",
      "Coletes dry-fit",
      "Vestiários VIP",
    ],
  },
  {
    id: "mensalista",
    name: "Mensalista Elite",
    price: "R$ 400",
    period: "por mês (1h fixa/sem)",
    description:
      "Para o grupo que não abre mão da regularidade e quer privilégios exclusivos.",
    features: [
      "Horário fixo garantido",
      "30% off no Sports Bar",
      "App de gestão de time",
      "1 gravação 4K/mês",
    ],
    isPopular: true,
  },
  {
    id: "campeonato",
    name: "Corporativo & Torneios",
    price: "Consulta",
    period: "pacote customizado",
    description:
      "Solução completa para campeonatos empresariais ou copas amadoras.",
    features: [
      "Gestão de chaves",
      "Arbitragem federada",
      "Premiação premium",
      "Live c/ narrador",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-28 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A] border border-[rgba(212,255,0,0.3)] text-xs font-mono uppercase tracking-widest text-[#D4FF00] mb-4 shadow-[0_0_20px_rgba(212,255,0,0.1)]">
          <Sparkles className="w-3 h-3" />
          <span>Investimento Premium</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white uppercase italic tracking-tighter leading-[0.95]">
          Escolha o nível da sua experiência.
        </h2>
        <p className="mt-4 text-[#A3A3A3] text-lg max-w-lg mx-auto font-medium">
          Estrutura de elite para jogadores que levam o futebol a sério.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`group relative rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 border ${
              plan.isPopular
                ? "bg-[#0A0A0A] border-[rgba(212,255,0,0.5)] shadow-[0_20px_50px_rgba(0,0,0,0.5)] md:-translate-y-6"
                : "bg-[#050505] border-white/5 hover:border-white/10"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-[#D4FF00] text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,255,0,0.4)] whitespace-nowrap">
                Mais Escolhido
              </div>
            )}

            <div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-[#A3A3A3] leading-relaxed min-h-[48px] font-medium">
                {plan.description}
              </p>

              <div className="mt-8 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white tracking-tighter">
                  {plan.price}
                </span>
                <span className="text-xs text-[#737373] font-bold uppercase tracking-wider">
                  / {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[#E5E5E5] font-medium"
                  >
                    <Check className="w-4 h-4 text-[#D4FF00] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="#contato"
                className={`w-full py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all flex items-center justify-center ${
                  plan.isPopular
                    ? "bg-[#D4FF00] text-black hover:bg-white shadow-[0_10px_30px_rgba(212,255,0,0.2)]"
                    : "bg-[#121212] text-white hover:bg-[#1A1A1A] border border-white/10"
                }`}
              >
                Garantir Horário
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
