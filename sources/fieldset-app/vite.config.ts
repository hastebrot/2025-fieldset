import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-oxc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "exclude-font-assets-from-bundle",
      generateBundle(_options, bundle) {
        for (const key in bundle) {
          if (key.endsWith(".ttf")) {
            delete bundle[key];
          }
          if (key.endsWith(".woff")) {
            delete bundle[key];
          }
        }
      },
    },
    {
      name: "full-reload-on-hot-update",
      handleHotUpdate({ server }) {
        server.ws.send({ type: "full-reload" });
        return [];
      },
    },
  ],
  build: {
    target: "esnext",
    sourcemap: false,
    minify: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        assetFileNames(chunkInfo) {
          if (chunkInfo.names[0] === "tabler-sprite-filled.svg") {
            return `assets/tabler-sprite-filled-[hash][extname]`;
          }
          if (chunkInfo.names[0] === "tabler-sprite-nostroke.svg") {
            return `assets/tabler-sprite-outlined-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        advancedChunks: {
          groups: [
            { name: "react-router", test: "react-router" },
            { name: "react-aria", test: "react-aria-components" },
            { name: "react", test: "react|react-dom" },
            { name: "modules", test: "[\\\\/]node_modules" },
          ],
        },
      },
    },
  },
});
