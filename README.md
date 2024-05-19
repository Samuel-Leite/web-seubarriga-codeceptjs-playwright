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
| ./resource/app  | Arquivo APK da aplicação que está integrado ao Android Studio                          |
| ./resource/conf | Capabilitys dos dispositivos do Android Studio e BrowserStack                          |
| ./resource/data | Credenciais para logar no aplicativo móvel SauceLabs                                   |
| ./tests         | Testes e2e, features, screens e Step Definitions concernentes aos testes automatizados |


## 📷 Evidência dos testes:



## 🔗 Links para Apoio:

- [CodeceptJs Appium](https://codecept.io/helpers/Appium.html)
- [Capabilitys do BrowserStack](https://www.browserstack.com/app-automate/capabilities?tag=w3c)
- [Ações de toque do Appium no CodeceptJS](https://sandeepqaops.medium.com/appium-touch-actions-in-codeceptjs-double-tap-press-long-press-drag-and-drop-etc-390b0edca65d)
- [Download do Appium Desktop](https://github.com/appium/appium-desktop/releases)
