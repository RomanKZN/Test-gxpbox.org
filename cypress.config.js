const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gxpbox.org/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
