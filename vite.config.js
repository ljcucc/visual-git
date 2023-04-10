import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const customHeader = {
  name: "custom-header",
  configureServer: (server) => {
    server.middlewares.use((_req, res, next) => {
      res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
      res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
      next();
    });
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host: true,
    port: 3001
  },
  root: __dirname + '/public',
  build:{
    outDir:"../dist"
  },
  plugins: [vue({
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }),
    customHeader
  ],
})
