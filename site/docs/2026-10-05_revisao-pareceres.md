# Revisão da landing page após auditoria — AS Nutri

Data: 2026-10-05
Status: vigente (substitui pontos de `2026-10-04_decisoes-iniciais.md` onde houver conflito)
Origem: pareceres do Daniel sobre a auditoria de 31 itens feita pelo Claude em 2026-10-04.

## Decisões do cliente
- Nome padrão da atividade: **"Consultoria em segurança de alimentos"** (C03). Não usar "assessoria em gestão e qualidade alimentar" nem "segurança alimentar" no site.
- Frase de benefício: **"Mais segurança, qualidade e resultados para o seu negócio"** (C04), no lugar das frases com tom de garantia de conformidade.
- Cabeçalho **rola junto** com a página; não deve ser fixo (V03).
- Logo do cabeçalho: `entregaveis/idéias/Logo-sem-legenda.gif`, convertida para fundo transparente (V01).
- Círculo do topo: composição fotográfica, sem logo (V04/V05).
- Fotos dos segmentos buscadas na web, com pelo menos 800 px (V06/V08).
- Cards de segmento abrem uma seção que explica as operações de segurança de alimentos de cada setor (V07/V15).
- Serviços com cartões menores e ícones (V16); nomes conforme o Catálogo de Serviços AS Nutri 2026 (C02).
- Mensagem padrão do WhatsApp já pede informações sobre os serviços (V18).
- Por enquanto, sem hospedagem pública: usar a pasta `teste-local/` (V25).
- Seção sobre a responsável técnica: decidir depois (C05).

## O que foi implementado
- Logo do cabeçalho inteira (`logo-cabecalho.webp/png`, 19 KB) no lugar do PNG de 1,7 MB cortado.
- Menu compacto abaixo de 980 px, com link de Contato e botão de WhatsApp.
- Topo: foto central em círculo + quatro segmentos em órbita com rótulos; legenda horizontal.
- Título com espaçamento −0,025em e entrelinha 1,04; tamanho reduzido no celular.
- Conteúdo visível por padrão; só os blocos abaixo da dobra animam, e só quando o script roda.
- Dourado de texto `--gold-text: #8f6208` (5,2:1); rodapé em `--muted` (5,2:1).
- Segmentos como abas acessíveis (teclado com setas), painel com 6 operações por setor e botão de WhatsApp com mensagem do setor.
- Bloco de benefícios com a logo sem legenda em fundo transparente (ver observação abaixo).
- E-mail quebra só antes do "@" no celular.
- Favicon e ícone de iPhone a partir do monograma; metadados Open Graph e imagem `og-asnutri.jpg` (1200×630).
- Descrição do site sem declarar área geográfica (C01).
- Arquivos antigos (`asnutri-logo.png`, `asnutri-logo-dark.jpg`, `referencia-folder.jpg`, `segmento-*.jpg`) movidos para `referencias/assets-antigos/`, fora de `public/`.
- Script `pnpm run teste:local` gera `teste-local/` com JS e CSS embutidos; abre com duplo clique.

## Observações para validação humana
- **V12:** as únicas logos com fundo transparente encontradas na pasta (`logo_as_nutri_transparente.png`, `AS_Nutri_conceito_organico_v2.png`) são do conceito antigo (folhas). Para não misturar identidades, foi gerada uma versão transparente da logo atual a partir da `Logo-sem-legenda.gif`.
- A logo completa com legenda escreve "ASSESSÓRIA" (com acento). O correto é "ASSESSORIA". Ela não é usada no site.
- O Catálogo 2026 tem um 10º serviço, "Elaboração de ficha técnica", que não estava no folder e não foi incluído no site.
- Os textos das operações por setor são orientação técnica geral e precisam da revisão da Alcione (nutricionista responsável) antes de publicar.
- Fotos da Unsplash (licença gratuita, uso comercial permitido, crédito opcional). Créditos em `docs/CREDITOS-FOTOS.md`.
- `og:image` usa caminho relativo; trocar por endereço absoluto quando houver domínio.
- V24: a pasta `publicado/assets` estava completa no computador; o Google Drive na web ainda não tinha sincronizado.

## Ajuste do bloco visual do topo (05/10, noite)
- O círculo com a foto de massa fresca e as órbitas foi reprovado.
- Foram apresentadas três propostas (A mosaico editorial, B arcos, C faixas por setor). Escolhida a **A**, **sem o selo da logo no centro**.
- Fotos novas, diferentes das dos cards de "Onde atuamos", representando **produção de alimentos em cozinhas e armazenamento de insumos**: Produção, Cozinha organizada, Armazenamento, Insumos identificados.
- A imagem de compartilhamento (`og-asnutri.jpg`) passou a usar a foto de produção.
