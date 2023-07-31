const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://website.staging.mydaytrip.net/',
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
