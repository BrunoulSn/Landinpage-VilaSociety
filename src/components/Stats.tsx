import React from "react";

export default function Stats() {
  return (
    <section className="py-24 border-y border-[#10B981]/15 bg-[#020503]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="text-5xl sm:text-6xl font-bold tracking-tight text-white font-mono">
            +85k
          </div>
          <p className="mt-3 text-sm text-[#94A3B8] tracking-wide uppercase font-mono text-[11px]">
            Partidas de Alto Nível Realizadas
          </p>
        </div>
        <div>
          <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#10B981] font-mono shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            100%
          </div>
          <p className="mt-3 text-sm text-[#94A3B8] tracking-wide uppercase font-mono text-[11px]">
            Aprovado por Atletas Profissionais
          </p>
        </div>
        <div>
          <div className="text-5xl sm:text-6xl font-bold tracking-tight text-white font-mono">
            FIFA Pro
          </div>
          <p className="mt-3 text-sm text-[#94A3B8] tracking-wide uppercase font-mono text-[11px]">
            Certificação Máxima de Gramado
          </p>
        </div>
      </div>
    </section>
  );
}
