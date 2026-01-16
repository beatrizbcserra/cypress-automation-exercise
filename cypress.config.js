const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Bloqueia anúncios que travam o carregamento da página
    blockHosts: [
      "*google-analytics.com",
      "*googlesyndication.com",
      "*adservice.google.com",
      "*googleadservices.com"
    ],
    setupNodeEvents(on, config) {
      
    },
  },
});
