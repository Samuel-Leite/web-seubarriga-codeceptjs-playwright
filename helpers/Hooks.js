/* eslint-disable class-methods-use-this */
const Helper = require('@codeceptjs/helper')
const fs = require('fs').promises
const path = require('path')

class Hooks extends Helper {
  async _init() {
    // before all tests
    console.log('*************************************')
    console.log('** 💻⚙️  Variáveis de Ambiente 💻⚙️  **')
    console.log(`BROWSER: ${process.env.BROWSER}`)
    console.log(`ENV: ${process.env.ENV}`)
    // Verifica se estamos dentro de um contêiner Docker
    const isDocker = process.env.DOCKER === 'true'

    // Exclua o diretório output localmente
    if (!isDocker) {
      try {
        await fs.rm(path.resolve(__dirname, '../output'), { recursive: true })
        console.log('DIRETORIO LOCAL: excluído com sucesso!')
      } catch (error) {
        console.error('DIRETORIO LOCAL: Ocorreu um erro:', error)
      }
    }

    // Exclua o diretório output dentro do contêiner
    if (isDocker) {
      try {
        const containerOutputDir = '/usr/src/app/output'
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
  }

  _before() {
    console.log('🚀--------------- Iniciando a jornada dos testes -----------✈️')
  }

  _after() {
    console.log('🎉------------------ Testes concluídos! --------------------🏁')
  }

  _beforeStep() {
    console.log('🚦 Preparando para executar o próximo Step...')
  }

  _afterStep() {
    console.log('✅ Step concluído com sucesso!')
  }

  _beforeSuite() {
    console.log('📂 Preparando para iniciar uma nova suite de testes...')
  }

  _afterSuite() {
    console.log('🏁 Suite de testes concluída com sucesso!')
  }

  _passed() {
    console.log('✅ Cenário de teste concluído com sucesso!')
  }

  _failed() {
    console.log('❌ Teste falhou! Verifique o log para mais detalhes.')
  }

  _finishTest() {
    console.log('🎉 ----------- Todos os testes foram concluídos! -----------🎉')
  }
}
module.exports = Hooks
