# Decisões iniciais da landing page AS Nutri

Data: 2026-10-04  
Status: vigente  
Origem: sessão de criação do site no Codex

## Contexto

O site foi criado a partir da pasta `../impresso`, que contém a nova logo, cards, o folder em PDF/AI e imagens com a apresentação dos serviços da AS Nutri.

A referência visual principal escolhida foi `../impresso/WhatsApp Image 2026-09-21 at 19.36.29.jpeg`, por ser a versão completa e sem marcações de revisão. As imagens com rabiscos em vermelho ou azul não foram usadas como fonte de composição.

## Decisões de produto

- Criar uma landing page de uma única página, sem rotas adicionais.
- Priorizar apresentação institucional e conversão para contato direto.
- Organizar a narrativa em proposta de valor, segmentos, serviços, método, benefícios e contato.
- Não criar formulário nem banco de dados; os contatos abrem canais já existentes.
- Manter a primeira versão objetiva e não inventar prova social ou informações que não constam nos materiais.

## Decisões de conteúdo

- Headline principal: “Alimentos seguros geram confiança.”
- Proposta: orientação técnica e prática para segurança de alimentos e conformidade da operação.
- Segmentos: supermercados, padarias, restaurantes, cafeterias e outros estabelecimentos.
- Serviços preservados do material impresso:
  1. Implantação de Boas Práticas.
  2. Treinamento da equipe.
  3. Planilhas, temperaturas e controle de rotina.
  4. Adequação à Vigilância Sanitária.
  5. Monitoramento e avaliação.
  6. POPs e Manual de Boas Práticas.
  7. Consultoria técnica sob demanda.
  8. Diagnóstico e plano de ação.
  9. Acompanhamento contínuo.
- Preservar CRN e contatos exatamente como publicados no impresso.

## Decisões de direção de arte

- Traduzir a identidade impressa para web, sem colar o folder inteiro como página.
- Verde-esmeralda como cor estrutural; dourado como acento; branco/creme como área de respiro.
- Títulos editoriais com serifada de alto contraste e acentos em escrita orgânica.
- Imagens circulares para representar os segmentos, refletindo os cards originais.
- Usar assimetria controlada no hero e bastante espaço negativo.
- Evitar poluição visual, excesso de caixas e elementos sem função.
- Preservar a preferência do usuário por margens internas e espaços laterais generosos.

## Decisões técnicas

- React 19 com Vite 6.
- Projeto preparado para hospedagem Sites e para saída estática local.
- `src/` é a fonte; `publicado/` e `dist/` são resultados gerados.
- Caminhos de recursos são relativos para permitir consulta da cópia estática local.
- Animações usam `IntersectionObserver` e respeitam `prefers-reduced-motion`.
- Acessibilidade inclui semântica, textos alternativos, foco visível e navegação por âncoras.

## Validação concluída

- Comparação visual com o folder original.
- Desktop: 1440 × 900 px, sem transbordamento horizontal.
- Celular: 390 × 844 px, sem transbordamento horizontal.
- Fontes e imagens carregadas.
- Âncora de serviços testada.
- Destinos de WhatsApp, Instagram e e-mail conferidos.
- Console sem erros ou alertas.
- Quatro testes de hospedagem aprovados.

## Decisões que exigem validação humana

- Tornar o site público ou alterar compartilhamento.
- Adicionar domínio próprio.
- Alterar CRN, contatos, serviços ou promessa comercial.
- Incluir depoimentos, clientes, resultados, certificações ou área de atendimento.
- Adicionar formulário, métricas, cookies, integrações ou armazenamento de dados.

## Referências

- `../CLAUDE.md`
- `../README.md`
- `../design-qa.md`
- `../impresso/folde_01.pdf`
