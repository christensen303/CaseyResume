// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: `GITHUB_PAGES=true bun run build`
// For a project site (username.github.io/repo) also set BASE_PATH=/repo/
const isGithubPages = process.env["GITHUB_PAGES"] === "true";
const basePath = process.env["BASE_PATH"] ?? "/";

export default defineConfig({
  ...(isGithubPages
    ? {
        // Static export: no server runtime, everything prerendered to .output/public
        nitro: { preset: "static" as const },
        vite: { base: basePath },
        tanstackStart: {
          server: { entry: "server" },
          spa: { enabled: true },
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/", prerender: { enabled: true } }],
        },
      }
    : {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
          // nitro/vite builds from this
          server: { entry: "server" },
        },
      }),
});
