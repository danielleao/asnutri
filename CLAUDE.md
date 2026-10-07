# AS Nutri — contexto para o Claude

Ponto de entrada do Claude neste repositório. Antes de mudar o site, leia também `site/docs/2026-10-04_decisoes-iniciais.md`, `site/docs/2026-10-05_revisao-pareceres.md` e `site/docs/design-qa.md`.

## Atualização de 2026-10-06 (prevalece sobre o restante)

- Repositório GitHub `danielleao/asnutri` (branch `main`) é a fonte canônica do código.
- Estrutura: `site/` (landing page) e `sistema/` (sistema Python, ainda não iniciado). Ver `README.md`.
- Hospedagem pública na Railway: projeto `tranquil-insight`, serviço `asnutri`, Root Directory `/site`, Railpack + Caddy, `RAILPACK_SPA_OUTPUT_DIR=dist/client`, região US East. Push em `main` publica o site.
- O antigo site privado em chatgpt.site (e os arquivos `worker/`, `.openai/`, `test:sites`) não fazem parte deste repositório.
- Domínio: `www.asnutri.com.br` (principal) e `asnutri.com.br`, registrados no Registro.br com DNS na Cloudflare (`decker`/`robin.ns.cloudflare.com`). Na Cloudflare: CNAME `@` e `www` para a Railway, TXT `_railway-verify`, SSL/TLS "Full". Os dois domínios estão verificados na Railway com certificado. `og:url`, `og:image` e `canonical` em `site/index.html` usam `https://www.asnutri.com.br`.

## Atualização de 2026-10-05

- Nome padrão: "Consultoria em segurança de alimentos". Frase de benefício: "Mais segurança, qualidade e resultados para o seu negócio".
- Cabeçalho rola com a página (não fixo). Logo do cabeçalho: `site/public/assets/logo-cabecalho.webp`.
- Topo sem logo: composição de fotos. Cards de segmento são abas com painel de operações por setor (textos a revisar pela responsável técnica).
- Dourado de texto em fundo claro: `--gold-text` (#8f6208). Não usar `--gold-600` para texto.
- Fotos da Unsplash, créditos em `site/docs/CREDITOS-FOTOS.md`.

## Objetivo do site

Apresentar a AS Nutri na internet e converter visitantes de supermercados, padarias, restaurantes, cafeterias e outros estabelecimentos em contatos comerciais para consultoria em segurança de alimentos.

## Fonte canônica do site

- Conteúdo e estrutura: `site/src/App.jsx`
- Estilos e tokens de cor: `site/src/styles.css`
- Imagens: `site/public/assets/`
- Gerados (não editar, não versionar): `site/dist/`, `site/publicado/`, `site/teste-local/`

## Comandos

```bash
cd site
pnpm install
pnpm run dev
pnpm run build        # o mesmo build que a Railway executa
pnpm run teste:local  # pasta para abrir com duplo clique
```

## Identidade visual aprovada

- Paleta: verde-esmeralda profundo, dourado, branco e creme.
- Tipografia: `Playfair Display` (títulos), `DM Sans` (leitura), `Marck Script` (ênfases).
- Usar a logo original; não redesenhá-la.
- Bastante espaço em branco, curvas suaves, imagens circulares.
- Preservar contraste, foco visível, redução de movimento e responsividade.

## Dados públicos (não alterar sem confirmação humana)

- Responsabilidade técnica: `CRN 7/16533 - PA`
- WhatsApp: `(91) 98563-5753`
- Instagram: `@asnutri.consultoria`
- E-mail: `asnutri.contato@gmail.com`

## Restrições editoriais

- Não inventar depoimentos, clientes, números, resultados, certificações ou área de atendimento.
- Não prometer conformidade legal garantida.
- Não acrescentar formulários, coleta de dados, integrações ou rastreamento sem autorização explícita.
- Português do Brasil, linguagem profissional, clara e prática.

## Protocolo para mudanças

1. Ler a decisão relacionada em `site/docs/`.
2. Modificar apenas arquivos-fonte.
3. Rodar `pnpm run build` e conferir desktop (1440 px) e celular (390 px).
4. Atualizar a documentação quando houver nova decisão durável.
5. Push em `main` publica o site: só enviar quando o usuário pedir publicação.
6. Segredos nunca no repositório; usar variáveis da Railway.
