import React from "react";
import Link from "next/link";
import { Shield, Globe, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-[rgba(212,255,0,0.15)] bg-[#050505] py-20 text-[#A3A3A3] text-sm"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="font-black text-white tracking-tighter uppercase italic text-base">
              Vila Society
            </span>
          </div>
          <p className="text-xs text-[#A3A3A3] leading-relaxed font-sans font-medium">
            O complexo esportivo definitivo para quem busca alta performance,
            tecnologia e sofisticação no futebol society.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4FF00] mb-4">
            Navegação
          </h4>
          <ul className="space-y-2 text-xs font-mono font-bold uppercase tracking-wider">
            <li>
              <Link
                href="#estrutura"
                className="hover:text-[#D4FF00] transition-colors"
              >
                Estrutura
              </Link>
            </li>
            <li>
              <Link
                href="#diferenciais"
                className="hover:text-[#D4FF00] transition-colors"
              >
                Tecnologia
              </Link>
            </li>
            <li>
              <Link
                href="#planos"
                className="hover:text-[#D4FF00] transition-colors"
              >
                Agendamento
              </Link>
            </li>
            <li>
              <Link
                href="#depoimentos"
                className="hover:text-[#D4FF00] transition-colors"
              >
                Comunidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4FF00] mb-4">
            Atendimento VIP
          </h4>
          <ul className="space-y-2 text-xs font-mono font-medium">
            <li className="flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>(11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4FF00]" />
              <span>Av. dos Atletas, 1500 - São Paulo, SP</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#D4FF00] mb-4">
            Conecte-se
          </h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center text-[#D4FF00] hover:bg-[rgba(212,255,0,0.2)] border border-[rgba(212,255,0,0.3)] transition-colors shadow-[0_0_15px_rgba(212,255,0,0.15)]"
              aria-label="Instagram"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#737373]">
        <p>
          &copy; {new Date().getFullYear()} Vila Society Elite Complex. Todos os
          direitos reservados.
        </p>
        <div className="flex gap-6 mt-4 sm:mt-0 font-bold uppercase tracking-wider">
          <a href="#" className="hover:text-[#D4FF00] transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-[#D4FF00] transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
