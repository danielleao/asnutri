# AS Nutri

Repositório da AS Nutri — consultoria em segurança de alimentos.

| Pasta | O que é | Hospedagem |
|---|---|---|
| `site/` | Landing page institucional (React 19 + Vite 6) | Railway, serviço `asnutri` |
| `sistema/` | Sistema de gestão da consultoria (Python) — ainda não iniciado | Railway, serviço próprio (futuro) |

Cada pasta é um serviço independente na Railway, apontado pelo **Root Directory** do serviço. Um push em `main` dispara o deploy.

## Site: trabalho local

```bash
cd site
pnpm install
pnpm run dev          # servidor de desenvolvimento
pnpm run build        # build de produção em site/dist/client
pnpm run teste:local  # gera site/teste-local/ para abrir com duplo clique
```

## Site: configuração na Railway

- Root Directory: `/site`
- Builder: Railpack (detecta Vite e serve os arquivos estáticos com Caddy)
- Variável: `RAILPACK_SPA_OUTPUT_DIR=dist/client`
- Região: US East

Leia `CLAUDE.md` antes de alterar qualquer coisa.
