import { useEffect, useId, useState } from "react";
import { ServiceIcon } from "./icons.jsx";

const WHATSAPP_NUMBER = "5591985635753";

// Mensagem padrão (V18): já pede informações sobre os serviços.
const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da AS Nutri e gostaria de receber informações sobre os serviços de consultoria em segurança de alimentos. Meu estabelecimento é: ";

const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const segmentMessage = (name) =>
  `Olá! Vim pelo site da AS Nutri e gostaria de receber informações sobre os serviços de consultoria em segurança de alimentos para ${name.toLowerCase()}. Meu estabelecimento é: `;

// V07/V15: cada card abre a explicação das operações daquele setor.
// Conteúdo técnico para revisão da responsável técnica antes da publicação.
const segments = [
  {
    id: "supermercados",
    name: "Supermercados",
    label: "um supermercado",
    summary: "Do recebimento à gôndola, cada etapa tem um ponto de controle.",
    image: "./assets/segmento-supermercados.webp",
    alt: "Prateleiras de frutas frescas organizadas em um supermercado",
    intro:
      "Em supermercados, a segurança dos alimentos depende de muitas mãos e de muitos equipamentos ao mesmo tempo. O trabalho começa pela conferência do que chega e segue até o produto exposto ao cliente.",
    operations: [
      ["Recebimento de mercadorias", "Conferência de temperatura, validade, integridade das embalagens e condições do transporte."],
      ["Armazenamento e câmaras frias", "Controle diário de temperatura, organização por categoria e regra de “primeiro que vence, primeiro que sai”."],
      ["Exposição de refrigerados e congelados", "Monitoramento de balcões, ilhas e expositores, com registro e ação corretiva quando a temperatura sai da faixa."],
      ["Setores de manipulação", "Açougue, padaria, rotisseria e hortifrúti fracionado seguem rotinas próprias de higiene e separação de crus e prontos."],
      ["Fracionados e rotulagem", "Identificação, data de manipulação e validade dos produtos porcionados na loja."],
      ["Higienização e controle de pragas", "Limpeza programada de equipamentos e áreas, com registros e acompanhamento do controle de pragas."],
    ],
  },
  {
    id: "padarias",
    name: "Padarias",
    label: "uma padaria",
    summary: "Produção, fermentação, vitrine e validade sob controle.",
    image: "./assets/segmento-padarias.webp",
    alt: "Padeiro retirando pães do forno",
    intro:
      "A padaria reúne produção e venda no mesmo espaço. Por isso, insumos, tempo, temperatura e higiene da equipe precisam de rotina clara do início ao fim do dia.",
    operations: [
      ["Insumos e armazenamento", "Farinhas, laticínios, ovos e recheios guardados na temperatura certa e longe de contaminação."],
      ["Higiene na manipulação", "Uniforme completo, lavagem das mãos e cuidados pessoais de quem prepara os alimentos."],
      ["Tempo e temperatura", "Controle de fermentação, forneamento e resfriamento de cremes, recheios e coberturas."],
      ["Vitrines e exposição", "Produtos com creme, frios e recheios perecíveis mantidos sob refrigeração e protegidos."],
      ["Produtos próprios", "Rotulagem, data de fabricação e validade de pães, bolos e salgados produzidos na casa."],
      ["Equipamentos e superfícies", "Higienização de masseiras, cilindros, assadeiras e bancadas com frequência definida."],
    ],
  },
  {
    id: "restaurantes",
    name: "Restaurantes",
    label: "um restaurante",
    summary: "Do pré-preparo ao prato servido, sem contaminação cruzada.",
    image: "./assets/segmento-restaurantes.webp",
    alt: "Chef de dólmã branca cortando legumes em uma cozinha profissional",
    intro:
      "Na cozinha de um restaurante o ritmo é intenso e as etapas se sobrepõem. Fluxos bem definidos evitam contaminação cruzada e mantêm a qualidade em todos os turnos.",
    operations: [
      ["Recebimento e estoque", "Separação de refrigerados, congelados e secos, com identificação e controle de validade."],
      ["Pré-preparo", "Higienização de hortifrútis, descongelamento seguro e separação entre alimentos crus e prontos."],
      ["Cocção e reaquecimento", "Temperaturas adequadas no preparo e no reaquecimento, com registro nos pontos críticos."],
      ["Espera e distribuição", "Buffet quente e frio, tempo de exposição e proteção dos alimentos até o consumo."],
      ["Equipe treinada", "Higiene pessoal, saúde dos manipuladores e capacitação contínua da equipe."],
      ["Água, resíduos e pragas", "Limpeza de reservatórios, manejo de resíduos e controle integrado de pragas."],
    ],
  },
  {
    id: "cafeterias",
    name: "Cafeterias e mais",
    label: "uma cafeteria",
    summary: "Balcão, vitrine e bebidas com o mesmo padrão de cuidado.",
    image: "./assets/segmento-cafeterias.webp",
    alt: "Atendente no balcão de uma cafeteria com vitrine de doces e salgados",
    intro:
      "Cafeterias, lanchonetes e outros estabelecimentos combinam preparo rápido, vitrine e atendimento no balcão. Pequenos cuidados diários fazem a diferença na segurança do cliente.",
    operations: [
      ["Vitrines", "Separação entre itens refrigerados e de temperatura ambiente, com controle de tempo de exposição."],
      ["Preparo de bebidas", "Higiene de máquinas e utensílios, e cuidado com leite e outros insumos perecíveis."],
      ["Lanches e doces", "Porcionamento, rotulagem e validade de salgados, sanduíches e sobremesas."],
      ["Produtos de fornecedores", "Recebimento conferido e escolha de fornecedores com transporte adequado."],
      ["Utensílios e superfícies", "Rotina de higienização ao longo do dia, inclusive nos horários de pico."],
      ["Atendimento no balcão", "Separação entre manuseio de dinheiro e de alimentos e higiene frequente das mãos."],
    ],
  },
];

// C02: nomes conforme o Catálogo de Serviços AS Nutri 2026.
const services = [
  ["boas-praticas", "Implantação de Boas Práticas", "Organização e implementação dos procedimentos higiênico-sanitários da operação."],
  ["treinamento", "Treinamento da equipe", "Capacitação de manipuladores e gestores em higiene, temperatura, armazenamento e limpeza."],
  ["planilhas", "Planilhas, temperaturas e controles de rotina", "Registros de recebimento, armazenamento, temperatura, higienização e ações corretivas."],
  ["vigilancia", "Adequação à Vigilância Sanitária", "Levantamento das exigências, organização de documentos e orientação para corrigir pendências."],
  ["monitoramento", "Monitoramento e avaliação", "Visitas periódicas para verificar se controles e procedimentos seguem sendo cumpridos."],
  ["manual", "Manual de Boas Práticas e POPs", "Manual e Procedimentos Operacionais Padronizados elaborados a partir da realidade observada."],
  ["consultoria", "Consultoria técnica sob demanda", "Atendimento pontual para dúvidas, decisões, documentos e situações específicas."],
  ["diagnostico", "Diagnóstico e plano de ação", "Avaliação inicial com não conformidades, riscos, prioridades e plano de melhoria."],
  ["acompanhamento", "Acompanhamento contínuo", "Suporte recorrente com visitas, revisão de registros e relatórios periódicos."],
];

const steps = [
  ["01", "Diagnóstico", "Entendemos a operação, os riscos e as prioridades do estabelecimento."],
  ["02", "Plano de ação", "Organizamos as adequações em etapas claras, realistas e mensuráveis."],
  ["03", "Acompanhamento", "Treinamos, monitoramos e apoiamos a consolidação das boas práticas."],
];

const navLinks = [
  ["#atuacao", "Atuação"],
  ["#servicos", "Serviços"],
  ["#metodo", "Como funciona"],
  ["#contato", "Contato"],
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header${open ? " is-open" : ""}`}>
      <a className="brand" href="#inicio" aria-label="AS Nutri, voltar ao início">
        <picture>
          <source srcSet="./assets/logo-cabecalho.webp" type="image/webp" />
          <img src="./assets/logo-cabecalho.png" alt="AS Nutri" width="222" height="120" />
        </picture>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="menu-toggle-bars" aria-hidden="true" />
        {open ? "Fechar" : "Menu"}
      </button>

      <nav id={menuId} className="site-nav" aria-label="Navegação principal">
        {navLinks.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
          Falar no WhatsApp
        </a>
      </nav>

      <a className="header-cta" href={whatsappLink()} target="_blank" rel="noreferrer">
        Falar no WhatsApp
      </a>
    </header>
  );
}

function Segments() {
  const [active, setActive] = useState(segments[0].id);
  const current = segments.find((segment) => segment.id === active);

  const onKeyDown = (event, index) => {
    const keys = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (!(event.key in keys)) return;
    event.preventDefault();
    const next = segments[(index + keys[event.key] + segments.length) % segments.length];
    setActive(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <>
      <div className="segments-grid" role="tablist" aria-label="Escolha o tipo de estabelecimento">
        {segments.map((segment, index) => {
          const selected = segment.id === active;
          return (
            <button
              key={segment.id}
              id={`tab-${segment.id}`}
              className="segment-card"
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`painel-${segment.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(segment.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              data-reveal
            >
              <img src={segment.image} alt="" width="960" height="640" loading="lazy" />
              <span className="segment-card-body">
                <span className="segment-card-title">{segment.name}</span>
                <span className="segment-card-text">{segment.summary}</span>
                <span className="segment-card-more">{selected ? "Veja abaixo" : "Ver operações"}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        className="segment-panel"
        id={`painel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        tabIndex={0}
      >
        <div className="segment-panel-head">
          <p className="eyebrow">Segurança de alimentos em {current.name.toLowerCase()}</p>
          <h3>O que acompanhamos na operação</h3>
          <p>{current.intro}</p>
          <a className="button button-primary" href={whatsappLink(segmentMessage(current.label))} target="_blank" rel="noreferrer">
            Pedir informações para {current.label}
          </a>
        </div>
        <ol className="operations">
          {current.operations.map(([title, text]) => (
            <li key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

// Bloco visual do topo: mosaico editorial (proposta A escolhida em 05/10), sem selo,
// com fotos de produção e de armazenamento de insumos em cozinhas.
const heroTiles = [
  ["producao", "Produção", "Funcionária com luvas porcionando refeições em uma linha de produção", 800, 900],
  ["cozinha", "Cozinha organizada", "Cozinha profissional limpa, com bancadas e equipamentos de aço inox", 960, 640],
  ["armazenamento", "Armazenamento", "Insumos em recipientes identificados com etiquetas em prateleiras", 800, 900],
  ["insumos", "Insumos identificados", "Potes de vidro com grãos e farinhas organizados em prateleira", 960, 640],
];

function HeroVisual() {
  return (
    <figure className="hero-visual hero-mosaic">
      <ul>
        {heroTiles.map(([id, label, alt, width, height]) => (
          <li key={id} className={`tile tile-${id}`}>
            <img src={`./assets/topo-${id}.webp`} alt={alt} width={width} height={height} />
            <span className="tile-label">{label}</span>
          </li>
        ))}
      </ul>
      <figcaption className="visual-note">Gestão · Estratégia · Segurança · Qualidade</figcaption>
    </figure>
  );
}

function useReveal() {
  // V11: o conteúdo nasce visível. Só o que está abaixo da dobra ganha animação,
  // e somente quando o script roda e o usuário aceita movimento.
  useEffect(() => {
    const root = document.documentElement;
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    const elements = [...document.querySelectorAll("[data-reveal]")].filter(
      (element) => element.getBoundingClientRect().top > window.innerHeight,
    );
    elements.forEach((element) => element.classList.add("reveal-pending"));
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("reveal-pending");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));

    const showAll = () => elements.forEach((element) => element.classList.remove("reveal-pending"));
    window.addEventListener("beforeprint", showAll);
    return () => {
      observer.disconnect();
      window.removeEventListener("beforeprint", showAll);
    };
  }, []);
}

export function App() {
  useReveal();

  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Consultoria em segurança de alimentos</p>
            <h1>
              Alimentos seguros <em>geram confiança.</em>
            </h1>
            <p className="hero-lede">
              Orientação técnica e prática em boas práticas, rotinas de controle e adequação sanitária. Mais segurança,
              qualidade e resultados para o seu negócio.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappLink()} target="_blank" rel="noreferrer">
                Solicitar informações
              </a>
              <a className="button button-secondary" href="#servicos">
                Conhecer os serviços
              </a>
            </div>
            <div className="credential">
              <span>Responsabilidade técnica</span>
              <strong>Nutricionista · CRN 7/16533 - PA</strong>
            </div>
          </div>

          <HeroVisual />
        </section>

        <section className="trust-strip" aria-label="Pilares da consultoria">
          <span>Segurança</span>
          <i aria-hidden="true" />
          <span>Qualidade</span>
          <i aria-hidden="true" />
          <span>Confiança</span>
          <i aria-hidden="true" />
          <span>Resultados</span>
        </section>

        <section className="section section-intro" id="atuacao">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">Onde atuamos</p>
            <h2>Segurança de alimentos aplicada à realidade do seu negócio.</h2>
          </div>
          <p className="section-intro-copy" data-reveal>
            Cada operação tem seu próprio ritmo. Escolha o seu tipo de estabelecimento e veja as etapas que a AS Nutri
            acompanha, do primeiro diagnóstico à rotina da equipe.
          </p>
          <Segments />
        </section>

        <section className="services-section" id="servicos">
          <div className="services-header" data-reveal>
            <div>
              <p className="eyebrow eyebrow-light">Serviços oferecidos</p>
              <h2>Da adequação sanitária ao acompanhamento contínuo.</h2>
            </div>
            <p>Um conjunto de serviços que organiza processos, reduz riscos e dá mais segurança às decisões do dia a dia.</p>
          </div>

          <div className="services-grid">
            {services.map(([icon, title, description], index) => (
              <article className="service-item" key={title} data-reveal>
                <div className="service-head">
                  <span className="service-icon" aria-hidden="true">
                    <ServiceIcon name={icon} />
                  </span>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section method-section" id="metodo">
          <div className="method-copy" data-reveal>
            <p className="eyebrow">Como funciona</p>
            <h2>Um caminho claro para prevenir, adequar e evoluir.</h2>
            <p>
              A prevenção é o melhor ingrediente. Por isso, o trabalho parte da realidade da operação e avança com
              prioridades bem definidas.
            </p>
          </div>
          <div className="steps">
            {steps.map(([number, title, description]) => (
              <article className="step" key={number} data-reveal>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="results-section">
          <div className="results-card" data-reveal>
            <p className="script-line">Benefícios para a sua operação</p>
            <h2>Mais segurança, qualidade e resultados para o seu negócio.</h2>
            <p>
              Processos mais seguros ajudam a proteger consumidores, orientar equipes e construir uma operação mais
              consistente.
            </p>
            <ul>
              <li>Rotinas mais organizadas</li>
              <li>Equipe mais preparada</li>
              <li>Riscos melhor controlados</li>
              <li>Decisões com apoio técnico</li>
            </ul>
          </div>
          {/* V12: logo sem legenda com fundo transparente, sem recorte. */}
          <div className="results-brand" data-reveal>
            <picture>
              <source srcSet="./assets/logo-sem-legenda-transparente.webp" type="image/webp" />
              <img
                src="./assets/logo-sem-legenda-transparente.png"
                alt="AS Nutri"
                width="900"
                height="483"
                loading="lazy"
              />
            </picture>
            <p className="results-brand-caption">Consultoria em segurança de alimentos</p>
            <p className="results-brand-crn">Nutricionista · CRN 7/16533 - PA</p>
          </div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-copy" data-reveal>
            <p className="eyebrow eyebrow-light">Entre em contato</p>
            <h2>Vamos cuidar da segurança dos alimentos no seu estabelecimento?</h2>
            <p>Converse com a AS Nutri e entenda qual é o melhor primeiro passo para a sua operação.</p>
          </div>
          <div className="contact-links" data-reveal>
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <span>WhatsApp</span>
              <strong>(91) 98563-5753</strong>
            </a>
            <a href="https://www.instagram.com/asnutri.consultoria/" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@asnutri.consultoria</strong>
            </a>
            <a href="mailto:asnutri.contato@gmail.com">
              <span>E-mail</span>
              <strong className="contact-email">
                asnutri.contato<wbr />@gmail.com
              </strong>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <picture>
          <source srcSet="./assets/logo-cabecalho.webp" type="image/webp" />
          <img src="./assets/logo-cabecalho.png" alt="AS Nutri" width="222" height="120" loading="lazy" />
        </picture>
        <p>Consultoria em segurança de alimentos</p>
        <p>CRN 7/16533 - PA</p>
        <p className="credits">
          Fotos:{" "}
          <a href="https://unsplash.com" target="_blank" rel="noreferrer">
            Unsplash
          </a>
        </p>
      </footer>
    </div>
  );
}
