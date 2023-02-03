import { resolve } from 'node:path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 2200,
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      name: 'bililiComponentButton',
      formats: ['umd'],
    },

    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [createVuePlugin()],
})
