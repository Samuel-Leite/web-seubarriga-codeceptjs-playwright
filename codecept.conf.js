/** @type {CodeceptJS.MainConfig} */
require('dotenv').config({ path: '.env' })
const path = require('path')

exports.config = {
  tests: './tests/e2e/Login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER,
      url: '',
      show: true,
    },
    Hooks: {
      require: './helpers/Hooks.js',
    },
  },
  include: {
    I: './helpers/Commands.js',
    loginPage: './tests/pages/LoginPage.js',
    dataHelper: path.resolve('./helpers/DataHelper'),
  },
  mocha: {
    reporter: 'mochawesome', // Especifica o Mochawesome como o repórter
    reporterOptions: {
      reportDir: 'output', // Diretório onde o relatório será salvo
      reportFilename: 'report', // Nome do arquivo de relatório
      reportTitle: 'My Project Report',
      inlineAssets: true,
      quiet: true,
      json: false,
      html: true,
      overwrite: true,
      charts: true,
      code: true,
    },
  },
  plugins: {
    stepByStepReport: {
      enabled: true,
      ignoreSteps: ['grab*'],
      output: './output',
      deleteSuccessful: false,
      disableScreenshotOnFail: false,
    },
    // Habilitar o ultimo print em caso de falha
    screenshotOnFail: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
  },
  name: 'seu-barriga-codeceptjs-playwright',
}
