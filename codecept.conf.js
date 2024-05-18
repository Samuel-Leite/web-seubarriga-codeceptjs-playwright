/** @type {CodeceptJS.MainConfig} */
require('dotenv').config({ path: '.env' })

exports.config = {
  tests: './tests/e2e/Login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: process.env.BROWSER,
      url: 'https://seubarriga.wcaquino.me/login',
      show: true
    },
    Hooks: {
      require: './helpers/Hooks.js'
    }
  },
  include: {
    I: './helpers/Commands.js',
    loginPage: "./tests/pages/LoginPage.js",
  },
  name: 'seu-barriga-codeceptjs-playwright'
}