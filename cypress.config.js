const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,
    projectId: "985z12",

  e2e: {
    baseUrl: "https://qacart-todo.herokuapp.com",
    viewportWidth: 1440,
    viewportHeight: 900,
    experimentalWebKitSupport: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }

});
