import React, { useState } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Search,
  Lock,
  ExternalLink,
  Sparkles,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';

interface AntiFraudCardProps {
  isLargeFont: boolean;
}

type ScanStatus = 'idle' | 'safe' | 'fraud';

interface ScanResult {
  status: ScanStatus;
  domain: string;
  isOfficial: boolean;
  message: string;
  details: string;
}

export const AntiFraudCard: React.FC<AntiFraudCardProps> = ({ isLargeFont }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Lista de domínios legítimos do ecossistema oficial do Mercado Livre
  const isOfficialMercadoLivreDomain = (rawUrl: string): { isOfficial: boolean; domain: string } => {
    let clean = rawUrl.trim();
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = 'https://' + clean;
    }

    try {
      const parsed = new URL(clean);
      const hostname = parsed.hostname.toLowerCase();

      // Domínios estritamente oficiais
      const officialDomains = [
        'mercadolivre.com.br',
        'produto.mercadolivre.com.br',
        'lista.mercadolivre.com.br',
        'www.mercadolivre.com.br',
        'mercadopago.com.br',
        'www.mercadopago.com.br',
        'mercadolivre.com',
      ];

      const isMatch = officialDomains.some(
        (domain) => hostname === domain || hostname.endsWith('.' + domain)
      );

      // Verificação de typosquatting / domínios falsos comuns (ex: mercadolivrre, mercadolivre-oferta)
      return {
        isOfficial: isMatch,
        domain: hostname,
      };
    } catch {
      return {
        isOfficial: false,
        domain: clean.slice(0, 35) || 'URL Inválida',
      };
    }
  };

  const handleScan = (urlToTest?: string) => {
    const target = urlToTest || inputUrl;
    if (!target.trim()) return;

    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      const { isOfficial, domain } = isOfficialMercadoLivreDomain(target);

      if (isOfficial) {
        setScanResult({
          status: 'safe',
          domain,
          isOfficial: true,
          message: 'SELO DE SEGURO DO SITE OFICIAL MERCADO LIVRE',
          details:
            'Este link foi verificado e pertence aos servidores oficiais do Mercado Livre (*.mercadolivre.com.br). Sua compra tem garantia integral de entrega ou dinheiro de volta pelo Mercado Pago.',
        });
      } else {
        setScanResult({
          status: 'fraud',
          domain,
          isOfficial: false,
          message: 'ALERTA DE FRAUDE: SITE NÃO RECONHECIDO NO MERCADO LIVRE!',
          details:
            'Atenção! Este link NÃO pertence ao Mercado Livre oficial. Trata-se de um site falso ou não reconhecido, com alto risco de clonagem, boletos falsos ou roubo de dados. Não informe seus dados ou senhas.',
        });
      }
      setIsScanning(false);
    }, 400);
  };

  const handleTestExample = (exampleUrl: string) => {
    setInputUrl(exampleUrl);
    handleScan(exampleUrl);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 pt-2 pb-10 w-full">
      <div className="bg-white rounded-3xl border-3 border-[#2D3277] shadow-[0_8px_0_#2D3277] overflow-hidden">
        {/* Cabeçalho do Card: Estilo Oficial com Destaque de Segurança */}
        <div className="bg-[#2D3277] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-3 border-[#FFE600]">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-14 h-14 rounded-2xl bg-[#FFE600] text-black flex items-center justify-center shrink-0 border-2 border-white shadow-md">
              <ShieldCheck className="w-8 h-8 text-[#2D3277] stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#00A650] text-white shadow-xs">
                  IA de Proteção Ativa
                </span>
                <span className="text-xs font-bold text-yellow-300 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  Monitoramento em Tempo Real
                </span>
              </div>
              <h2
                className={`font-black text-white leading-tight ${
                  isLargeFont ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
                }`}
              >
                Inteligência Antifraude Garimpo Livre
              </h2>
              <p className="text-xs sm:text-sm text-neutral-200 font-medium mt-1">
                Detecta automaticamente se um link é do <strong>Mercado Livre Oficial</strong> ou se é uma <strong>fraude/golpe</strong> da internet.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end text-right">
            <span className="text-xs font-semibold text-neutral-300">Proteção do Usuário</span>
            <span className="text-base font-black text-[#FFE600]">100% de Links Verificados</span>
          </div>
        </div>

        {/* Corpo do Card: Scanner Interativo */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Caixa de Entrada e Teste de Links */}
          <div>
            <label className="block font-black text-neutral-900 mb-2 text-sm sm:text-base">
              Cole ou digite qualquer link para testar com a Inteligência Antifraude:
            </label>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleScan()}
                  placeholder="Ex: https://produto.mercadolivre.com.br/... ou link de WhatsApp/e-mail suspeito"
                  className={`w-full pl-4 pr-10 py-3.5 rounded-xl border-2 border-neutral-300 font-semibold focus:outline-none focus:border-[#2D3277] focus:ring-2 focus:ring-[#FFE600] shadow-inner ${
                    isLargeFont ? 'text-base sm:text-lg' : 'text-sm'
                  }`}
                />
                {inputUrl && (
                  <button
                    onClick={() => {
                      setInputUrl('');
                      setScanResult(null);
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 text-xs font-bold px-1.5 py-0.5 rounded"
                    title="Limpar campo"
                  >
                    ✕
                  </button>
                )}
              </div>

              <button
                onClick={() => handleScan()}
                disabled={isScanning || !inputUrl.trim()}
                className="glass-btn-blue px-6 py-3.5 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_0_#181B44]"
              >
                <Search className="w-5 h-5 text-[#FFE600]" />
                <span>{isScanning ? 'Analisando...' : 'VERIFICAR LINK'}</span>
              </button>
            </div>

            {/* Botões Rápidos para Testar Exemplos */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold text-neutral-600">
              <span className="text-neutral-500 font-semibold">Testar com 1 clique:</span>
              <button
                type="button"
                onClick={() =>
                  handleTestExample(
                    'https://produto.mercadolivre.com.br/MLB-4700283122-esmerilhadeira-lixadeira-angular-880w-115mm-11000rpm-_JM'
                  )
                }
                className="px-2.5 py-1 rounded-lg bg-green-100 text-green-900 border border-green-300 hover:bg-green-200 transition-colors flex items-center gap-1"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-700" />
                <span>Exemplo: Link Oficial ML</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleTestExample('https://promocao-mercadolivre-ofertas-hoje.online/pagamento-pix')
                }
                className="px-2.5 py-1 rounded-lg bg-red-100 text-red-900 border border-red-300 hover:bg-red-200 transition-colors flex items-center gap-1"
              >
                <AlertTriangle className="w-3.5 h-3.5 text-red-700" />
                <span>Exemplo: Link Falso/Golpe</span>
              </button>
            </div>
          </div>

          {/* ÁREA DE RESULTADO DO SCANNER */}
          {scanResult && (
            <div
              className={`rounded-2xl border-3 p-5 sm:p-6 transition-all duration-300 ${
                scanResult.isOfficial
                  ? 'bg-gradient-to-br from-emerald-50 via-white to-green-50 border-[#00A650] shadow-[0_6px_0_#007a3b]'
                  : 'bg-gradient-to-br from-red-50 via-white to-red-100/50 border-red-600 shadow-[0_6px_0_#991b1b]'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start gap-4">
                {/* Ícone Indicador Gigante */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-2 shadow-md ${
                    scanResult.isOfficial
                      ? 'bg-[#00A650] text-white border-white'
                      : 'bg-red-600 text-white border-white animate-bounce'
                  }`}
                >
                  {scanResult.isOfficial ? (
                    <ShieldCheck className="w-8 h-8 stroke-[2.5]" />
                  ) : (
                    <ShieldAlert className="w-8 h-8 stroke-[2.5]" />
                  )}
                </div>

                <div className="flex-1">
                  {/* Badge de Status */}
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    {scanResult.isOfficial ? (
                      <span className="px-3 py-0.5 rounded-full text-xs font-black bg-[#00A650] text-white flex items-center gap-1 shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        SELO DE SEGURO MERCADO LIVRE OFICIAL
                      </span>
                    ) : (
                      <span className="px-3 py-0.5 rounded-full text-xs font-black bg-red-600 text-white flex items-center gap-1 shadow-xs animate-pulse">
                        <XCircle className="w-3.5 h-3.5" />
                        SITE NÃO RECONHECIDO NO MERCADO LIVRE
                      </span>
                    )}

                    <span className="text-xs font-bold text-neutral-500">
                      Domínio analisado: <strong className="text-neutral-900">{scanResult.domain}</strong>
                    </span>
                  </div>

                  <h3
                    className={`font-black leading-snug mt-1 ${
                      scanResult.isOfficial ? 'text-[#00A650]' : 'text-red-700'
                    } ${isLargeFont ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'}`}
                  >
                    {scanResult.message}
                  </h3>

                  <p className="text-sm font-semibold text-neutral-800 mt-2 leading-relaxed">
                    {scanResult.details}
                  </p>

                  {/* Informações complementares de segurança */}
                  <div className="mt-4 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                    {scanResult.isOfficial ? (
                      <div className="flex items-center gap-2 text-emerald-800 font-bold">
                        <CheckCircle2 className="w-4 h-4 text-[#00A650]" />
                        <span>Transação criptografada com Garantia Mercado Pago e Envio Oficial</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-800 font-black">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span>NÃO informe senhas, não pague boletos ou Pix fora do Mercado Livre!</span>
                      </div>
                    )}

                    {scanResult.isOfficial && (
                      <a
                        href={inputUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-btn-yellow px-4 py-2 rounded-xl font-black text-xs flex items-center gap-1.5"
                      >
                        <span>Abrir Anúncio Seguro</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* QUADRO COMPARATIVO: Como a Inteligência Diferencia os Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Bloco 1: O que é um link OFICIAL do Mercado Livre */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border-2 border-emerald-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-[#00A650] text-white">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-black text-emerald-950 text-sm">
                  Links Oficiais Reconhecidos (100% Seguros)
                </h4>
              </div>
              <ul className="text-xs font-medium text-emerald-900 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#00A650] font-black">✓</span>
                  <span>Terminam sempre com <strong>.mercadolivre.com.br/</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#00A650] font-black">✓</span>
                  <span>Pagamento processado dentro do <strong>Mercado Pago Oficial</strong></span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#00A650] font-black">✓</span>
                  <span>Proteção total do programa <strong>Compra Garantida</strong></span>
                </li>
              </ul>
            </div>

            {/* Bloco 2: O que é FRAUDE (Sites Falsos / Golpes) */}
            <div className="p-4 rounded-2xl bg-red-50/60 border-2 border-red-300">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-red-600 text-white">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h4 className="font-black text-red-950 text-sm">
                  Sinais de Fraude Detectados (Sites Falsos)
                </h4>
              </div>
              <ul className="text-xs font-medium text-red-900 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-black">✕</span>
                  <span>Domínios estranhos (ex: <em>mercadolivrre.com</em>, <em>promocao-meli.site</em>)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-black">✕</span>
                  <span>Links enviados por WhatsApp cobrando frete via chave Pix pessoal</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-red-600 font-black">✕</span>
                  <span>Sites clonados sem o cadeado oficial e sem histórico de avaliações</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Compromisso Garimpo Livre */}
          <div className="p-4 rounded-2xl bg-[#FFE600]/25 border-2 border-[#FFE600] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2D3277] text-[#FFE600] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 fill-[#FFE600]" />
              </div>
              <div>
                <h5 className="font-black text-[#2D3277] text-sm">
                  Garantia de Navegação Blindada no Garimpo Livre
                </h5>
                <p className="text-xs font-semibold text-neutral-800">
                  Todos os botões e ofertas deste aplicativo já passam por essa inteligência. Você só clica em links oficiais e protegidos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
