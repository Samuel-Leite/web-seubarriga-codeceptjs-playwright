const Helper = require('@codeceptjs/helper')
const { container, output, helper } = require('codeceptjs')
const execSync = require('child_process').execSync
require('dotenv').config({ path: '.env' })

class hooks extends Helper {
  _init() {
    // before all tests
    console.log('*************************************')
    console.log('******* Variáveis de Ambiente *******')
    console.log('BROWSER: ' + process.env.BROWSER)
    try {
      execSync('rd /s /q output', { encoding: 'utf8' })
      console.log('DIRETORIO: excluído com sucesso!')
    } catch (error) {
      console.error(`Ocorreu um erro ao excluir o diretório: ${error}`)
    }

    console.log('*************************************')
  }
  _before(test) {
    // before a test
    codeceptjs.container
      .helpers()
      .Playwright.browserContext.setGeolocation({ latitude: -23.558, longitude: -46.6597 })
    codeceptjs.container.helpers().Playwright.browserContext.grantPermissions(['geolocation'])
    test.retries(process.env.RETRY)
    console.log('--------------------------------Start----------------------------------')
    let allure = codeceptjs.container.plugins('allure')
    allure.addParameter('0', 'ENV', process.env.BROWSER)
  }
  _after() {
    console.log('--------------------------------End----------------------------------')
  } // after a test
  _beforeStep() {} // before each step
  _afterStep() {
    // after each step
  }
  _beforeSuite() {} // before each suite
  _afterSuite() {} // after each suite
  _passed() {} // after a test passed
  _failed() {} // after a test failed
  _finishTest() {
    // after all tests
    //  execSync('allure serve output', utf8)
  }
}
module.exports = hooks
