Feature('Acesso a plataforma Seu Barriga')

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

// Carrega as credenciais do arquivo YAML
const credencialPath = path.resolve(__dirname, '../../resources/data/credencial.yml')
const credencial = yaml.load(fs.readFileSync(credencialPath, 'utf8'))

Scenario('Login com credenciais validas', ({ loginPage }) => {
  loginPage.doLogin(credencial.valida.email, credencial.valida.senha)
  loginPage.checkLoginStatus('Bem vindo, Seu Madruga!')
}).tag('wip')

Scenario('Login com credenciais invalidas', ({ loginPage }) => {
  loginPage.doLogin(credencial.invalida.email, credencial.invalida.senha)
  loginPage.checkLoginStatus('Problemas com o login do usuário')
})
