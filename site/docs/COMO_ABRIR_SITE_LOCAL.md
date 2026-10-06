# Como abrir a versão local da AS Nutri

Esta pasta contém a versão estática publicada localmente no Google Drive.

## Visualização

Na pasta pai `site-asnutri`, execute:

```bash
pnpm run preview:local
```

Abra o endereço local indicado no terminal. Esse método evita o bloqueio que alguns navegadores aplicam a módulos JavaScript abertos diretamente por `file://`.

As fontes editoriais são carregadas pela internet. Se o computador estiver sem conexão, o conteúdo continuará disponível com fontes alternativas do sistema.

## Alterações

Não edite os arquivos desta pasta diretamente. Abra a pasta pai `site-asnutri`, leia `CLAUDE.md`, altere os arquivos de `src/` e execute:

```bash
pnpm run publish:local
pnpm run preview:local
pnpm run test:sites
```

Isso recria esta pasta com a versão atualizada e validada.
