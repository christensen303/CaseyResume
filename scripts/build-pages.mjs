// Renders the app to static HTML for GitHub Pages.
// Run after `GITHUB_PAGES=true vite build` — see .github/workflows/deploy.yml.
import { mkdir, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const base = process.env["BASE_PATH"] ?? "/";
const outDir = resolve("dist/client");

const entry = pathToFileURL(resolve("dist/server/server.js")).href;
const mod = await import(entry);
const handler = mod.default ?? mod;

const res = await handler.fetch(new Request(`http://localhost${base}`), {}, {});
if (res.status >= 400) {
  console.error(`Prerender failed with status ${res.status}`);
  process.exit(1);
}
const html = await res.text();

await mkdir(outDir, { recursive: true });
await writeFile(resolve(outDir, "index.html"), html);
// SPA fallback so deep links / refreshes work on GitHub Pages
await writeFile(resolve(outDir, "404.html"), html);
await writeFile(resolve(outDir, ".nojekyll"), "");

console.log("Static site written to dist/client");
