/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

class DataHelper {
  readYamlFile(attribute) {
    const filePath = path.resolve(__dirname, '../resources/data/credencial.yml');

    console.log(`Arquivo: ${filePath}`);

    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = yaml.load(fileContents);
      return data[attribute];
    } catch (error) {
      console.error(`Erro ao carregar o arquivo YAML: ${error.message}`);
      throw error;
    }
  }
}

module.exports = new DataHelper();
