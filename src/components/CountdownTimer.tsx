import React, { useState, useEffect, useCallback } from 'react';
import { Clock, Flame, Zap, AlertCircle } from 'lucide-react';

interface CountdownTimerProps {
  isLargeFont?: boolean;
}

const STORAGE_KEY = 'garimpo_relogio_10h_v4';
const CYCLE_MS = 10 * 60 * 60 * 1000; // 10 horas de ciclo total
const INITIAL_REMAINING_MS = (9 * 60 + 10) * 60 * 1000; // Começar agora em 9 horas e 10 minutos

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ isLargeFont }) => {
  const [timeLeft, setTimeLeft] = useState<{
    hours: string;
    minutes: string;
    seconds: string;
    percent: number;
  }>({
    hours: '09',
    minutes: '10',
    seconds: '00',
    percent: 91.6,
  });

  // Função para obter ou criar o timestamp alvo calibrado em 9h 10min
  const getTargetTimestamp = useCallback((): number => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (stored) {
        const parsed = parseInt(stored, 10);
        // Se existe e ainda não expirou, mantemos para continuar a contagem real
        if (!isNaN(parsed) && parsed > now && parsed <= now + CYCLE_MS) {
          return parsed;
        }
      }

      // Inicializa exatamente em 9 horas e 10 minutos a partir de agora
      const newTarget = now + INITIAL_REMAINING_MS;
      localStorage.setItem(STORAGE_KEY, newTarget.toString());
      return newTarget;
    } catch {
      return Date.now() + INITIAL_REMAINING_MS;
    }
  }, []);

  useEffect(() => {
    // Garante que o timer seja calculado a partir do timestamp real
    let targetTime = getTargetTimestamp();

    const updateTimer = () => {
      const now = Date.now();
      let diff = targetTime - now;

      // Se zerou o tempo, reinicia automaticamente para mais 10 horas infinitamente
      if (diff <= 0) {
        targetTime = now + CYCLE_MS;
        try {
          localStorage.setItem(STORAGE_KEY, targetTime.toString());
        } catch {}
        diff = CYCLE_MS;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      // Percentual restante (100% no início diminuindo até 0%)
      const remainingPercent = Math.max(0, Math.min(100, (diff / CYCLE_MS) * 100));

      setTimeLeft({
        hours: String(h).padStart(2, '0'),
        minutes: String(m).padStart(2, '0'),
        seconds: String(s).padStart(2, '0'),
        percent: remainingPercent,
      });
    };

    // Executa imediatamente
    updateTimer();

    // Atualiza a cada 1 segundo
    const interval = setInterval(updateTimer, 1000);

    // CRUCIAL PARA CELULAR: Quando o usuário minimiza, trava a tela ou troca de app,
    // o navegador congela o setInterval. Ao reabrir ou focar na janela,
    // sincroniza instantaneamente com o relógio do sistema (Date.now())!
    const handleSync = () => {
      targetTime = getTargetTimestamp();
      updateTimer();
    };

    window.addEventListener('focus', handleSync);
    document.addEventListener('visibilitychange', handleSync);

    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleSync);
      document.removeEventListener('visibilitychange', handleSync);
    };
  }, [getTargetTimestamp]);

  return (
    <section className="w-full bg-[#2D3277] text-white border-y-3 border-[#181B44] shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
        {/* Título de Urgência com Ícone Animado */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FF0000] text-white flex items-center justify-center shrink-0 shadow-[0_3px_0_#990000] border border-red-300">
            <Flame className="w-6 h-6 sm:w-7 sm:h-7 fill-[#FFE600] text-[#FFE600] animate-pulse" />
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-1.5 flex-wrap">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FF0000] text-white shadow-xs flex items-center gap-1">
                <Zap className="w-3 h-3 fill-white" />
                Tempo Limitado
              </span>
              <span className="text-[11px] font-bold text-yellow-300 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Tempo Real
              </span>
            </div>

            <h3
              className={`font-black text-[#FFE600] uppercase tracking-wide leading-tight mt-0.5 ${
                isLargeFont ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              }`}
            >
              Próxima levada de ofertas relâmpagos do site oficial do Mercado Livre em:
            </h3>
          </div>
        </div>

        {/* Dígitos do Cronômetro Regressivo (Horas, Minutos, Segundos) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Bloco Horas */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-12 sm:h-14 bg-[#181B44] rounded-xl border-2 border-[#FFE600]/80 shadow-[0_3px_0_#0D0F24] flex items-center justify-center font-mono font-black text-2xl sm:text-3xl text-white tracking-wider">
              {timeLeft.hours}
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-yellow-300 mt-1 uppercase">
              Horas
            </span>
          </div>

          <span className="font-mono font-black text-2xl sm:text-3xl text-[#FFE600] -mt-4 animate-pulse">
            :
          </span>

          {/* Bloco Minutos */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-12 sm:h-14 bg-[#181B44] rounded-xl border-2 border-[#FFE600]/80 shadow-[0_3px_0_#0D0F24] flex items-center justify-center font-mono font-black text-2xl sm:text-3xl text-white tracking-wider">
              {timeLeft.minutes}
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-yellow-300 mt-1 uppercase">
              Minutos
            </span>
          </div>

          <span className="font-mono font-black text-2xl sm:text-3xl text-[#FFE600] -mt-4 animate-pulse">
            :
          </span>

          {/* Bloco Segundos */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-12 sm:h-14 bg-[#FF0000] rounded-xl border-2 border-white shadow-[0_3px_0_#990000] flex items-center justify-center font-mono font-black text-2xl sm:text-3xl text-white tracking-wider animate-pulse">
              {timeLeft.seconds}
            </div>
            <span className="text-[10px] sm:text-[11px] font-bold text-red-200 mt-1 uppercase">
              Segundos
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Progresso Real das 10 horas */}
      <div className="w-full h-1.5 bg-[#181B44] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-[#FFE600] to-green-400 transition-all duration-1000 ease-linear shadow-[0_0_8px_#FFE600]"
          style={{ width: `${timeLeft.percent}%` }}
        />
      </div>
    </section>
  );
};
