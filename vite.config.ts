// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages static export: `bun run build:pages`
// Project sites (username.github.io/<repo>) also need BASE_PATH=/<repo>/
const isGithubPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  // No server runtime on GitHub Pages — skip the Cloudflare/nitro bundling step.
  ...(isGithubPages ? { nitro: false as const, vite: { base: process.env["BASE_PATH"] ?? "/" } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
