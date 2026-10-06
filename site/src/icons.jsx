// V16: ícones de traço simples para capitular cada serviço (24×24, herdam a cor do texto).
const paths = {
  // escudo com check: boas práticas
  "boas-praticas": (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6L12 3Z" />
      <path d="m8.5 12 2.4 2.4 4.6-4.8" />
    </>
  ),
  // grupo de pessoas: treinamento
  treinamento: (
    <>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M6.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="5" cy="9.5" r="2" />
      <circle cx="19" cy="9.5" r="2" />
      <path d="M2.5 17c.3-1.8 1.3-2.9 2.8-3.2M21.5 17c-.3-1.8-1.3-2.9-2.8-3.2" />
    </>
  ),
  // termômetro + linhas: planilhas e temperaturas
  planilhas: (
    <>
      <path d="M8 14.2V5a2 2 0 1 1 4 0v9.2a3.5 3.5 0 1 1-4 0Z" />
      <path d="M10 15.5V9" />
      <path d="M15 6h5M15 10h5M15 14h3" />
    </>
  ),
  // prédio público: vigilância sanitária
  vigilancia: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
      <path d="M3 20h18" />
    </>
  ),
  // gráfico com lupa: monitoramento e avaliação
  monitoramento: (
    <>
      <path d="M4 19V5M4 19h16" />
      <path d="m7 15 3.5-4 3 2.5L18 8" />
      <circle cx="18" cy="8" r="1.2" />
    </>
  ),
  // documento com dobra: manual e POPs
  manual: (
    <>
      <path d="M7 3h7l4 4v14H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15.5h6M9 8.5h2.5" />
    </>
  ),
  // balão de conversa: consultoria sob demanda
  consultoria: (
    <>
      <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4.5 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" />
    </>
  ),
  // prancheta com lupa: diagnóstico
  diagnostico: (
    <>
      <path d="M9 4h6v2.5H9z" />
      <path d="M15 5h2.5a1 1 0 0 1 1 1v5M9 5H6.5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1H11" />
      <circle cx="16" cy="16" r="3" />
      <path d="m18.2 18.2 2.3 2.3" />
      <path d="M8.5 10h6M8.5 13.5h3" />
    </>
  ),
  // setas em ciclo: acompanhamento contínuo
  acompanhamento: (
    <>
      <path d="M19.5 9A8 8 0 0 0 5.2 7.2L4 8.5" />
      <path d="M4 4.5v4h4" />
      <path d="M4.5 15a8 8 0 0 0 14.3 1.8l1.2-1.3" />
      <path d="M20 19.5v-4h-4" />
    </>
  ),
};

export function ServiceIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
