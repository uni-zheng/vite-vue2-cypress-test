import { defineConfig } from "cypress";

export default defineConfig({
  // 暂时不需要生成视频快照
  video: false,

  component: {
    specPattern: 'tests/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },

  e2e: {
    specPattern: 'tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
