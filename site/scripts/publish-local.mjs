import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, "..");
const buildDirectory = path.join(projectRoot, "dist", "client");
const publishedDirectory = path.join(projectRoot, "publicado");

await rm(publishedDirectory, { recursive: true, force: true });
await mkdir(publishedDirectory, { recursive: true });
await cp(buildDirectory, publishedDirectory, { recursive: true });
await cp(
  path.join(projectRoot, "docs", "COMO_ABRIR_SITE_LOCAL.md"),
  path.join(publishedDirectory, "LEIA-ME.md"),
);

console.log(`Site local publicado em: ${publishedDirectory}`);
