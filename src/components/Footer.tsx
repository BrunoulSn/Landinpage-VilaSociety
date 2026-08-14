import React from "react";
import Link from "next/link";
import { Shield, Globe, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-[#10B981]/15 bg-[#020503] py-20 text-[#94A3B8] text-sm"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-tight">
              Vila Society
            </span>
          </div>
          <p className="text-xs text-[#94A3B8] leading-relaxed">
            O complexo esportivo definitivo para quem busca alta performance,
            tecnologia e sofisticação no futebol society.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#34D399] mb-4">
            Navegação
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link
                href="#estrutura"
                className="hover:text-[#34D399] transition-colors"
              >
                Estrutura
              </Link>
            </li>
            <li>
              <Link
                href="#diferenciais"
                className="hover:text-[#34D399] transition-colors"
              >
                Tecnologia
              </Link>
            </li>
            <li>
              <Link
                href="#planos"
                className="hover:text-[#34D399] transition-colors"
              >
                Agendamento
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="hover:text-[#34D399] transition-colors"
              >
                Comunidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#34D399] mb-4">
            Atendimento VIP
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
              <span>(11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Av. dos Atletas, 1500 - São Paulo, SP</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-[#34D399] mb-4">
            Conecte-se
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#10B981] hover:bg-[#10B981]/20 border border-[#10B981]/30 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.15)]"
              aria-label="Instagram"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#10B981]/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#94A3B8]/70">
        <p>
          &copy; {new Date().getFullYear()} Vila Society Elite Complex. Todos os
          direitos reservados.
        </p>
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-[#34D399] transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#34D399] transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
