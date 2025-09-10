/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // simula o DOM pro React
    globals: true,        // permite usar describe, it, test, expect sem importar
    setupFiles: "./src/setupTests.ts", // config extra
  },
})
