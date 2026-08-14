import React from "react";
import { Check } from "lucide-react";
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
      "Quadra principal FIFA Pro",
      "Bolas oficiais inclusas",
      "Coletes com tecnologia dry-fit",
      "Vestiários VIP de alto padrão",
    ],
  },
  {
    id: "mensalista",
    name: "Mensalista Elite",
    price: "R$ 400",
    period: "por mês (1h fixa/sem)",
    description:
      "Para o seu grupo garantir o horário nobre de toda semana sem concorrência.",
    features: [
      "Horário fixo garantido na grade",
      "30% de desconto no Sports Bar",
      "App exclusivo de gestão do time",
      "1 gravação tática em 4K por mês",
    ],
    isPopular: true,
  },
  {
    id: "campeonato",
    name: "Corporativo & Torneios",
    price: "Consulta",
    period: "pacote sob medida",
    description:
      "Solução completa para campeonatos empresariais ou copas amadoras.",
    features: [
      "Gestão completa de chaves e tabela",
      "Arbitragem federada inclusa",
      "Premiação personalizada",
      "Transmissão ao vivo com narrador",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-[#10B981] mb-3 block">
          Investimento e Planos
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Transparência e alto padrão.
        </h2>
        <p className="mt-4 text-[#94A3B8] text-base">
          Escolha a modalidade perfeita para elevar a performance do seu
          futebol.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative transition-all duration-500 ${
              plan.isPopular
                ? "bg-[#0c261c] border-2 border-[#10B981] shadow-[0_0_50px_rgba(16,185,129,0.2)] md:-translate-y-3"
                : "bg-[#030805] border border-white/5"
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#10B981] text-black text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                Mais Escolhido por Capitães
              </span>
            )}

            <div>
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#94A3B8] leading-relaxed">
                {plan.description}
              </p>

              <div className="mt-8 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold text-white font-mono tracking-tight">
                  {plan.price}
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  / {plan.period}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-[#E2E8F0]"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center shrink-0 text-[#10B981]">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <a
                href="#contato"
                className={`w-full py-4 rounded-full text-sm font-semibold transition-all flex items-center justify-center ${
                  plan.isPopular
                    ? "bg-[#10B981] text-black hover:bg-[#34D399] shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                    : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
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
