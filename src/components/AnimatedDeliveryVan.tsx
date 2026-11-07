import React, { useState, useEffect } from 'react';
import { PackageCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface AnimatedDeliveryVanProps {
  isLargeFont?: boolean;
}

type VanPhase = 'idle' | 'driving_to_center' | 'delivering' | 'driving_to_left' | 'portal';

export const AnimatedDeliveryVan: React.FC<AnimatedDeliveryVanProps> = ({ isLargeFont }) => {
  const [phase, setPhase] = useState<VanPhase>('driving_to_center');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (phase === 'driving_to_center') {
      // Leva 3.2s para dirigir da direita até o centro da tela
      timeoutId = setTimeout(() => {
        setPhase('delivering');
      }, 3200);
    } else if (phase === 'delivering') {
      // Para por EXATAMENTE 2 segundos avisando que a entrega foi realizada com sucesso
      timeoutId = setTimeout(() => {
        setPhase('driving_to_left');
      }, 2000);
    } else if (phase === 'driving_to_left') {
      // Leva 3.2s para dirigir do centro até o final da tela do lado esquerdo
      timeoutId = setTimeout(() => {
        setPhase('portal');
      }, 3200);
    } else if (phase === 'portal') {
      // Entra no portal por 600ms, desaparece e vai para a espera
      timeoutId = setTimeout(() => {
        setPhase('idle');
      }, 600);
    } else if (phase === 'idle') {
      // Espera o intervalo exato de 7 SEGUNDOS antes de reiniciar o processo
      timeoutId = setTimeout(() => {
        setPhase('driving_to_center');
      }, 7000);
    }

    return () => clearTimeout(timeoutId);
  }, [phase]);

  // Posição horizontal calculada por fase
  // A van anda da DIREITA (110%) para a ESQUERDA (-20%)
  const getVanTransform = () => {
    switch (phase) {
      case 'idle':
        return 'translateX(110vw)';
      case 'driving_to_center':
        return 'translateX(calc(50vw - 75px))';
      case 'delivering':
        return 'translateX(calc(50vw - 75px))';
      case 'driving_to_left':
        return 'translateX(-120px)';
      case 'portal':
        return 'translateX(-120px) scale(0.1)';
      default:
        return 'translateX(110vw)';
    }
  };

  const isMoving = phase === 'driving_to_center' || phase === 'driving_to_left';

  return (
    <div className="w-full relative overflow-hidden pt-1 pb-2">
      {/* Pista de Entrega com Asfalto Estilizado e Faixas Tracejadas */}
      <div className="w-full h-11 bg-[#181B44] border-y-2 border-[#FFE600]/40 relative flex items-center shadow-inner overflow-hidden">
        {/* Faixa tracejada central da pista */}
        <div
          className="absolute inset-x-0 h-0.5 border-t-2 border-dashed border-[#FFE600]/60"
          style={{
            animation: isMoving ? 'roadDash 0.4s linear infinite' : 'none',
          }}
        />

        {/* Portal de Saída (Lado Esquerdo da Tela) */}
        <div
          className={`absolute left-1 top-1/2 -translate-y-1/2 w-6 h-9 rounded-full border-2 border-cyan-400 bg-cyan-400/30 blur-[1px] transition-all duration-300 pointer-events-none z-10 ${
            phase === 'portal' ? 'scale-125 opacity-100 animate-pulse shadow-[0_0_15px_#22d3ee]' : 'opacity-40 scale-90'
          }`}
        >
          <div className="w-full h-full rounded-full bg-blue-500/40 animate-spin" />
        </div>

        {/* A VAN MERCADO LIVRE ANIMADA */}
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 transition-all pointer-events-none select-none flex flex-col items-center"
          style={{
            transform: getVanTransform(),
            transitionDuration:
              phase === 'driving_to_center'
                ? '3200ms'
                : phase === 'driving_to_left'
                ? '3200ms'
                : phase === 'portal'
                ? '600ms'
                : '0ms',
            transitionTimingFunction:
              phase === 'driving_to_center'
                ? 'cubic-bezier(0.2, 0.8, 0.3, 1)'
                : phase === 'driving_to_left'
                ? 'cubic-bezier(0.5, 0, 0.8, 0.4)'
                : 'linear',
            opacity: phase === 'idle' ? 0 : phase === 'portal' ? 0.3 : 1,
          }}
        >
          {/* BALÃO DE AVISO: "ENTREGA FOI FEITA" (FICA ATIVO POR 2 SEGUNDOS NO MEIO) */}
          <div
            className={`absolute -top-12 z-30 transition-all duration-300 pointer-events-auto transform ${
              phase === 'delivering'
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-2 scale-90 pointer-events-none'
            }`}
          >
            <div className="bg-[#00A650] text-white px-3 py-1.5 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.4)] border-2 border-white flex items-center gap-1.5 whitespace-nowrap animate-bounce">
              <CheckCircle2 className="w-4 h-4 text-[#FFE600] shrink-0" />
              <div className="flex flex-col text-left leading-none">
                <span className="font-black text-[11px] sm:text-xs text-white">
                  📦 Entrega Realizada com Sucesso!
                </span>
                <span className="text-[9px] font-bold text-yellow-200 mt-0.5">
                  Mercado Livre FULL na Sua Porta
                </span>
              </div>
              <Sparkles className="w-3.5 h-3.5 text-[#FFE600] fill-[#FFE600] ml-1" />
            </div>
            {/* Triângulo ponta do balão */}
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#00A650] mx-auto" />
          </div>

          {/* ILUSTRAÇÃO VETORIAL REALISTA DA VAN MERCADO LIVRE (FRENTE VOLTADA PARA A ESQUERDA) */}
          <div className="relative w-28 h-9 flex items-center filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
            {/* Farol aceso iluminando à frente (para a esquerda) */}
            <div
              className={`absolute -left-10 top-3 w-12 h-4 bg-gradient-to-l from-yellow-200/50 to-transparent rounded-l-full pointer-events-none transition-opacity ${
                isMoving ? 'opacity-90' : 'opacity-40'
              }`}
            />

            <svg viewBox="0 0 110 36" className="w-full h-full overflow-visible">
              <defs>
                {/* Gradiente Amarelo Mercado Livre */}
                <linearGradient id="mlYellowVan" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFF200" />
                  <stop offset="60%" stopColor="#FFE600" />
                  <stop offset="100%" stopColor="#E6CF00" />
                </linearGradient>
                {/* Vidros com reflexo */}
                <linearGradient id="windshieldGlass" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="60%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#334155" />
                </linearGradient>
              </defs>

              {/* Chassi inferior */}
              <rect x="12" y="25" width="86" height="5" rx="2" fill="#0F172A" />

              {/* Carroceria Principal da Van */}
              <path
                d="M 16 26 
                   L 8 26 
                   A 3 3 0 0 1 5 23 
                   L 5 15 
                   C 5 13 8 10 14 9 
                   L 25 7 
                   C 27 6 30 6 33 6 
                   L 95 6 
                   C 98 6 101 8 101 11 
                   L 101 23 
                   A 3 3 0 0 1 98 26 
                   L 86 26 
                   Z"
                fill="url(#mlYellowVan)"
                stroke="#181B44"
                strokeWidth="1.5"
              />

              {/* Faixa azul Mercado Livre na lateral */}
              <path
                d="M 5 18 L 101 18 L 101 21 L 5 21 Z"
                fill="#2D3277"
              />

              {/* Logo / Texto Mercado Livre na Lateral */}
              <text
                x="56"
                y="15"
                fill="#2D3277"
                fontSize="6"
                fontWeight="900"
                fontFamily="sans-serif"
                textAnchor="middle"
                letterSpacing="0.2"
              >
                mercado livre
              </text>

              {/* Selo FULL em verde */}
              <rect x="74" y="9" width="16" height="6" rx="2" fill="#00A650" />
              <text
                x="82"
                y="14"
                fill="#FFFFFF"
                fontSize="4.5"
                fontWeight="900"
                fontFamily="sans-serif"
                textAnchor="middle"
              >
                FULL
              </text>

              {/* Para-brisa dianteiro (lado esquerdo) */}
              <path
                d="M 7 15 L 14 10 L 26 8 L 26 16 L 7 16 Z"
                fill="url(#windshieldGlass)"
                stroke="#181B44"
                strokeWidth="1"
              />

              {/* Janela do motorista */}
              <path
                d="M 28 8 L 40 8 L 40 16 L 28 16 Z"
                fill="url(#windshieldGlass)"
                stroke="#181B44"
                strokeWidth="1"
              />

              {/* Farol dianteiro (lado esquerdo) */}
              <path
                d="M 5 17 L 8 17 L 8 21 L 5 20 Z"
                fill="#FEF08A"
                stroke="#CA8A04"
                strokeWidth="0.5"
              />

              {/* Lanterna traseira (lado direito - acende em vermelho no freio) */}
              <rect
                x="98"
                y="12"
                width="3"
                height="8"
                rx="1"
                fill={phase === 'delivering' ? '#EF4444' : '#DC2626'}
                className={phase === 'delivering' ? 'filter drop-shadow-[0_0_4px_#EF4444]' : ''}
              />

              {/* Para-choque dianteiro */}
              <rect x="3" y="21" width="4" height="4" rx="1" fill="#334155" />

              {/* Para-choque traseiro */}
              <rect x="99" y="21" width="3" height="4" rx="1" fill="#334155" />

              {/* Caixa da roda dianteira */}
              <circle cx="21" cy="26" r="6.5" fill="#0F172A" />
              {/* Caixa da roda traseira */}
              <circle cx="81" cy="26" r="6.5" fill="#0F172A" />

              {/* Roda Dianteira (gira se estiver em movimento) */}
              <g
                transform="translate(21, 26)"
                style={{
                  animation: isMoving ? 'wheelSpin 0.3s linear infinite reverse' : 'none',
                }}
              >
                <circle cx="0" cy="0" r="5" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                <circle cx="0" cy="0" r="2.5" fill="#94A3B8" />
                <line x1="-4" y1="0" x2="4" y2="0" stroke="#0F172A" strokeWidth="0.8" />
                <line x1="0" y1="-4" x2="0" y2="4" stroke="#0F172A" strokeWidth="0.8" />
              </g>

              {/* Roda Traseira (gira se estiver em movimento) */}
              <g
                transform="translate(81, 26)"
                style={{
                  animation: isMoving ? 'wheelSpin 0.3s linear infinite reverse' : 'none',
                }}
              >
                <circle cx="0" cy="0" r="5" fill="#1E293B" stroke="#0F172A" strokeWidth="1" />
                <circle cx="0" cy="0" r="2.5" fill="#94A3B8" />
                <line x1="-4" y1="0" x2="4" y2="0" stroke="#0F172A" strokeWidth="0.8" />
                <line x1="0" y1="-4" x2="0" y2="4" stroke="#0F172A" strokeWidth="0.8" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Animação CSS para giro das rodas da Van */}
      <style>{`
        @keyframes wheelSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes roadDash {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -20px 0;
          }
        }
      `}</style>
    </div>
  );
};
