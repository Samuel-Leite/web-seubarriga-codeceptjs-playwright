# Automação E2E com o framework CodeceptJS + Playwright


## 🚀 Introdução:

Através do framework CodeceptJS + Playwright, o projeto utilizou a plataforma Seu Barriga para realizar automação de testes E2E.

## 💻 Tecnologias utilizadas:

- VS Code
- Node.js
- Java 11
- CodeceptJS
- Playwright
- JavaScript
- Jenkins
- Docker

## 🤖 Instalação e configuração:

- Clonar o projeto na máquina local
- Executar no terminal do projeto automação o comando:

```
'npm install'
```

- Informar os dados no arquivo dotEnv com o modelo do dispositivo que será executado e as credenciais do BrowserStack, segue o modelo:

```
BROWSER='chromium'
```
- Executar todos os testes:

```
npm run regression
```

- Executar o teste através de tag:

```
npm run tag '@nome_tag'
```

Observação: é necessário que esteja configurado o ANDROID_HOME nas variáveis de ambiente da sua máquina.

## 📂 Estrututa do projeto:

| Diretório       | Finalidade                                                                             |
| --------------- | -------------------------------------------------------------------------------------- |
| ./husky         | Configuração da automação dos commits                                                  |
| ./helpers       | Configuração com Custom Commands, Hooks e Utils com funções utilizadas na automação    |
| ./resource/conf |                                                                                        |
| ./resource/data | Credenciais para logar no aplicativo                                                   |
| ./tests         | Testes e2e, e pages concernentes aos testes automatizados                              |


## 📷 Evidência dos testes:



## 🔗 Links para Apoio:
- [Tutorial do CodeceptJs + Playwright](https://codecept.io/playwright/#setup)
- [Helpers do CodeceptJs + Playwright](https://codecept.io/helpers/Playwright/)