const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/*.js',
    retries: {
      runMode: 3,
      openMode: 3,
      },
  },
  env: {
    url: "https://opensource-demo.orangehrmlive.com/",
    url1st: "https://sistemtoko.com/login",
    url2nd: "https://sistemtoko.com/forgot"

  },
});