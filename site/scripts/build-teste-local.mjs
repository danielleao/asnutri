// V25: gera a pasta "teste-local", que abre com duplo clique no index.html (sem servidor).
// Navegadores bloqueiam módulos JavaScript carregados de arquivos (file://); por isso o JS e o CSS
// do build são embutidos no próprio index.html. As imagens continuam em teste-local/assets.
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const build = path.join(root, "dist", "client");
const out = path.join(root, "teste-local");

let html = await readFile(path.join(build, "index.html"), "utf8");

const scriptTag = html.match(/<script type="module"[^>]*src="\.\/(assets\/[^"]+\.js)"[^>]*><\/script>/);
const cssTag = html.match(/<link rel="stylesheet"[^>]*href="\.\/(assets\/[^"]+\.css)"[^>]*>/);
if (!scriptTag || !cssTag) throw new Error("Build inesperado: script ou CSS não encontrado em dist/client/index.html");

const js = (await readFile(path.join(build, scriptTag[1]), "utf8")).replaceAll("</script", "<\\/script");
const css = await readFile(path.join(build, cssTag[1]), "utf8");

html = html
  .replace(cssTag[0], () => `<style>\n${css}\n</style>`)
  .replace(scriptTag[0], "")
  .replace("</body>", () => `<script type="module">\n${js}\n</script>\n</body>`);

await rm(out, { recursive: true, force: true });
await mkdir(path.join(out, "assets"), { recursive: true });
for (const file of await readdir(path.join(build, "assets"))) {
  if (!/\.(js|css)$/.test(file)) await cp(path.join(build, "assets", file), path.join(out, "assets", file));
}
await writeFile(path.join(out, "index.html"), html);
await cp(path.join(root, "docs", "COMO_ABRIR_TESTE_LOCAL.md"), path.join(out, "LEIA-ME.md"));
console.log(`Pasta de teste local criada em: ${out}`);
