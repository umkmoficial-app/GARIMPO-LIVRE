import React, { useState, useEffect } from 'react';
import { Clock, ShieldCheck, Type } from 'lucide-react';

interface HeaderProps {
  isLargeFont: boolean;
  onToggleFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isLargeFont,
  onToggleFontSize,
}) => {
  // Contagem regressiva de ofertas relâmpagos (ciclo contínuo de 10 horas)
  const [shiftCountdown, setShiftCountdown] = useState<string>('10:00:00');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  useEffect(() => {
    const TEN_HOURS_MS = 10 * 60 * 60 * 1000;

    const getTargetTime = (): number => {
      const stored = localStorage.getItem('garimpo_10h_target');
      const now = Date.now();
      if (stored) {
        const parsed = parseInt(stored, 10);
        if (!isNaN(parsed) && parsed > now) {
          return parsed;
        }
      }
      const newTarget = now + TEN_HOURS_MS;
      localStorage.setItem('garimpo_10h_target', newTarget.toString());
      return newTarget;
    };

    let targetTime = getTargetTime();

    const updateTimers = () => {
      const now = Date.now();
      let diffMs = targetTime - now;

      // Zerou o tempo? Volta para 10 horas de forma infinita
      if (diffMs <= 0) {
        targetTime = now + TEN_HOURS_MS;
        localStorage.setItem('garimpo_10h_target', targetTime.toString());
        diffMs = TEN_HOURS_MS;
      }

      const totalSec = Math.floor(diffMs / 1000);
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      setShiftCountdown(
        `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      );

      // Progresso da barra amarela (0% no início até 100% no final das 10 horas)
      const elapsedMs = TEN_HOURS_MS - diffMs;
      const pct = Math.min(100, Math.max(0, (elapsedMs / TEN_HOURS_MS) * 100));
      setProgressPercent(pct);
    };

    updateTimers();
    const interval = setInterval(updateTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full bg-[#FFE600] border-b-4 border-black/10 text-[#111111] shadow-md z-20">
      {/* Barra superior de confiança e acessibilidade para idosos */}
      <div className="bg-[#111111] text-white px-3 py-1.5 text-xs font-semibold flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#00A650] shrink-0" />
          <span className="truncate">Portal Oficial de Garimpo de Ofertas do Mercado Livre</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onToggleFontSize}
            title="Aumentar tamanho das letras para facilitar leitura"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-[#FFE600] glass-btn-dark"
          >
            <Type className="w-3.5 h-3.5 text-[#FFE600]" />
            <span>{isLargeFont ? 'Letra: Normal' : 'Letra: Grande (Idosos)'}</span>
          </button>
        </div>
      </div>

      {/* Marca Principal */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-center">
        {/* LOGO GARIMPO LIVRE EM AZUL OFICIAL #2D3277 COM AMARELO #FFE600 */}
        <div className="bg-[#2D3277] text-[#FFE600] px-6 py-2 rounded-2xl font-black text-2xl sm:text-4xl tracking-tight shadow-[0_4px_0_#181B44] border-2 border-[#181B44] flex items-center gap-1.5">
          <span>GARIMPO</span>
          <span className="text-white">LIVRE</span>
        </div>
      </div>

      {/* Relógio Grande de Contagem Regressiva em Azul Oficial #2D3277 */}
      <div className="bg-[#2D3277] text-white px-4 py-2.5 sm:py-3 border-t-2 border-[#181B44] shadow-inner">
        <div className="max-w-4xl mx-auto flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="bg-[#FF0000] text-white p-2 rounded-xl shadow-[0_2px_0_#990000] animate-bounce shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black tracking-wide text-[#FFE600] uppercase">
                Próxima levada de ofertas relâmpagos do site oficial do Mercado Livre
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-wider font-mono">
                {shiftCountdown}
              </div>
            </div>
          </div>
        </div>

        {/* Barra de progresso amarela */}
        <div className="max-w-4xl mx-auto mt-2 h-2.5 bg-[#181B44] rounded-full overflow-hidden border border-blue-900">
          <div
            className="h-full bg-[#FFE600] transition-all duration-1000 ease-linear rounded-full shadow-[0_0_8px_#FFE600]"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </header>
  );
};
