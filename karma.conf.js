process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    // Other configurations...

    browsers: ['ChromeHeadless'], // Use ChromeHeadless
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--no-sandbox',
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--disable-dev-shm-usage', // Avoids /dev/shm issues in Docker
        ],
      },
    },

    // Other configurations...
  });
};
