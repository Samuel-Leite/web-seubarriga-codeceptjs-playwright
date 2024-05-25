const Helper = require('@codeceptjs/helper')
const fs = require('fs').promises
const path = require('path')

class hooks extends Helper {
  async _init() {
    // before all tests
    console.log('*************************************')
    console.log('******* Variáveis de Ambiente *******')
    console.log(`BROWSER: ${process.env.BROWSER}`)
    console.log(`ENV: ${process.env.ENV}`)
    // Verifique se estamos dentro de um contêiner Docker
    const isDocker = process.env.DOCKER === 'true'

    // Exclua o diretório output localmente, a menos que estejamos dentro de um contêiner Docker
    if (!isDocker) {
      try {
        await fs.rm(path.resolve(__dirname, '../output'), { recursive: true })
        console.log('DIRETORIO LOCAL: excluído com sucesso!')
      } catch (error) {
        console.error('DIRETORIO LOCAL: Ocorreu um erro:', error)
      }
    }

    // Exclua o diretório output dentro do contêiner, se estivermos dentro de um contêiner Docker
    if (isDocker) {
      try {
        const containerOutputDir = '/usr/src/app/output' // Diretório output dentro do contêiner
        const files = await fs.readdir(containerOutputDir)
        files.forEach(async (file) => {
          const filePath = path.join(containerOutputDir, file)
          await fs.rm(filePath, { recursive: true, force: true })
        })
        console.log('DIRETORIO DOCKER: limpo com sucesso!')
      } catch (error) {
        console.error('DIRETORIO DOCKER: Ocorreu um erro:', error)
      }
    }
    console.log('*************************************')
  }

  _before() {
    console.log('--------------------------------Start----------------------------------')
  }

  _after() {
    console.log('--------------------------------End----------------------------------')
  } // after a test

  _beforeStep() {} // before each step

  _afterStep() {} // after each step

  _beforeSuite() {} // before each suite

  _afterSuite() {} // after each suite

  _passed() {} // after a test passed

  _failed() {} // after a test failed

  _finishTest() {} // after all tests
}
module.exports = hooks
