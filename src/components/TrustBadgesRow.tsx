import React from 'react';
import { ShieldCheck, CheckCircle2, RotateCcw, Lock } from 'lucide-react';

interface TrustBadgesRowProps {
  isLargeFont: boolean;
}

export const TrustBadgesRow: React.FC<TrustBadgesRowProps> = ({ isLargeFont }) => {
  return (
    <section className="w-full mt-8 pt-4">
      <div className="w-full">
        {/* SELO 1: COMPRA GARANTIDA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-green-50/40 border-2 border-emerald-400/80 p-5 shadow-[0_4px_12px_rgba(0,166,80,0.08)] hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-13 h-13 rounded-2xl bg-[#00A650] text-white flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(0,166,80,0.35)] border-2 border-white">
              <ShieldCheck className="w-7 h-7 stroke-[2.4]" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-xs">
                  Oficial Mercado Livre
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  Mercado Pago Seguro
                </span>
              </div>

              <h3
                className={`font-black text-[#111111] leading-tight ${
                  isLargeFont ? 'text-xl' : 'text-lg'
                }`}
              >
                Compra Garantida
              </h3>

              <p className="text-xs text-neutral-700 font-medium mt-1 leading-relaxed">
                Receba exatamente o produto que você pediu ou <strong className="text-emerald-800 font-bold">devolvemos seu dinheiro</strong> imediatamente.
              </p>

              <div className="mt-3 pt-2.5 border-t border-emerald-200/60 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-bold text-neutral-700">
                <span className="flex items-center gap-1 text-emerald-800">
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-600" />
                  30 dias de devolução grátis
                </span>
                <span className="flex items-center gap-1 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Sem custos extras
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
