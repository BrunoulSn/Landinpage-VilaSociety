import React from "react";
import { Testimonial } from "@/src/types";
import { Star } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rodrigo Caetano",
    role: "Capitão do FC Galáticos",
    content:
      "O gramado da Vila Society não tem comparação na cidade. A bola rola com precisão cirúrgica e o atendimento no lounge pós-jogo é espetacular.",
    avatar: "RC",
  },
  {
    id: "2",
    name: "Felipe Bastos",
    role: "Organizador de Torneios",
    content:
      "A automação pelo aplicativo e a qualidade das quadras elevaram o nível dos nossos campeonatos amadores. Simplesmente o melhor complexo.",
    avatar: "FB",
  },
  {
    id: "3",
    name: "Alexandre Souza",
    role: "Mensalista de Quinta-Feira",
    content:
      "Vestiários impecáveis, duchas quentes de alta pressão e horário fixo garantido sem nenhuma dor de cabeça há mais de 1 ano.",
    avatar: "AS",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-32 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <span className="text-xs uppercase font-mono tracking-widest text-[#10B981] mb-3 block">
          Prova Social
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Reconhecido por quem entende de futebol.
        </h2>
        <p className="mt-4 text-[#94A3B8] text-base">
          Histórias reais de atletas e organizadores que jogam em alto nível na
          Vila Society.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between border border-[#10B981]/15"
          >
            <div>
              <div className="flex items-center gap-1 text-[#10B981] mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#10B981]" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal">
                `{t.content}`
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 pt-6 border-t border-[#10B981]/15">
              <div className="w-11 h-11 rounded-full bg-[#10B981]/25 border border-[#10B981]/40 text-[#34D399] flex items-center justify-center font-mono font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                {t.avatar}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                <p className="text-xs text-[#94A3B8] font-mono">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
