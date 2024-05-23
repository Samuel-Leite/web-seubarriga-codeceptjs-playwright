/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
const Helper = require('@codeceptjs/helper');
const fs = require('fs').promises;
const path = require('path');

class hooks extends Helper {
  async _init() {
    // before all tests
    console.log('*************************************');
    console.log('******* Variáveis de Ambiente *******');
    console.log(`BROWSER: ${process.env.BROWSER}`);
    // Exclua o diretório output localmente
    try {
      await fs.rm(path.resolve(__dirname, '../output'), { recursive: true });
      console.log('DIRETORIO LOCAL: excluído com sucesso!');
    } catch (error) {
      console.error('DIRETORIO LOCAL: Ocorreu um erro:', error);
    }
    // Exclua o diretório output dentro do contêiner
    try {
      const containerOutputDir = '/usr/src/app/output'; // Diretório output dentro do contêiner
      await fs.rm(containerOutputDir, { recursive: true });
      console.log('DIRETORIO CONTAINER: excluído com sucesso!');
    } catch (error) {
      console.error('DIRETORIO CONTAINER: Ocorreu um erro:', error);
    }

    console.log('*************************************');
  }

  _before() {
    console.log('--------------------------------Start----------------------------------');
  }

  _after() {
    console.log('--------------------------------End----------------------------------');
  } // after a test

  _beforeStep() {} // before each step

  _afterStep() {} // after each step

  _beforeSuite() {} // before each suite

  _afterSuite() {} // after each suite

  _passed() {} // after a test passed

  _failed() {} // after a test failed

  _finishTest() {} // after all tests
}
module.exports = hooks;
