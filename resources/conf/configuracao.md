# Configurações realizadas no projeto: CodeceptJS + Playwright

## Comandos executados:
### Configurações básicas do CodeceptJS + Playwright:
```
npx codeceptjs init
npm install codeceptjs playwright --save
npm init
npx playwright install
npm install --save js-yaml
npm i dotenv
```

### Configurações do Prettier e Eslint:
```
npm install prettier 
npm install eslint -D 
npm init @eslint/config 
npm install eslint-config-airbnb-base 
npm install --save-dev eslint-plugin-prettier 
npm install --save-dev eslint-plugin-prettier eslint-config-prettier 
npm install --save-dev lint-staged
```
Após executar os comandos acima, deve copiar as pastas: .eslintignore, .eslintrc.js, .prettierignore, .prettierrc e adicionar os seguintes comandos na pasta package.json:
```
  "scripts": {
    "lint": "eslint . --max-warnings=0",
  },
  "lint-staged": {
    "*": [
      "npx lint --fix"
    ]
  },
```  

### Configurações do Husky:
```
npm install husky --save-dev 
npm install -g git-cz 
npm install commitizen -g --force 
npm install --save-dev git-cz
```
Após executar os comandos acima, deve copiar as pastas: .husky, changelog.config.js e adicionar os comandos na pasta package.json:
```
  "scripts": {
    "prepare": "husky install",
    "precommit": "git add . ",
    "commit": "git cz && node .husky/push.js",
  },
```

### Instalação do Jenkins através do Docker Compose:
Para configurar o Docker, é necessários os seguintes passos:
- **Step 1 - Clonar ou baixar o projeto do repositório:** https://github.com/vdespa/install-jenkins-docker
- **Step 2 - Baixar e instalar o Docker Desktop localmente:** https://www.docker.com/products/docker-desktop/
- **Step 3 - Construir a imagem do Jenkins Docker:** Acesse o terminal no diretório do projeto clonado onde o arquivo `Dockerfile` está localizado. E crie a imagem do Jenkins Docker:
```
docker build -t my-jenkins .
```
- **Step 4 - Iniciar o Jenkins:** Execute o seguinte comando no mesmo terminal:
```
docker compose up -d
```
- **Step 5 - Acessar o Jenkins:** Abra o Jenkins acessando: `http://localhost:8080/` e finalize o processo de instalação.

- **Step 6 - Encerrar o Jenkins:** Execute o seguinte comando no mesmo terminal:
```
docker compose down
```

- **Step 7 - Remover a imagem do Jenkins no Docker:** Execute o seguinte comando no mesmo terminal para encerrar o Jenkins e remover todos os volumes e imagens utilizadas:
```
docker compose down --volumes --rmi all 
```

- **Step 8 - Instalar os plugins:** Para executar a Pipeline no Jenkins em um contâiner do Docker, é necessário instalar o plugin 'Docker Pipeline, Stage View Pipeline, HTML Publisher'

- **Step 9 - Instalar JUnit Report:** É necessário instalar o XML Report para realizar a publicação do JUnit Report no Jenkins, seguem as configurações:
  - Executar o comando:
```
npm i mocha-junit-reporter
```

  - Inserir a configuração no arquivo `codecept.conf.js`:
```
exports.config = {
  mocha: {
    reporterOptions: {
      mochaFile: 'output/result.xml',
      reportDir: 'output',
    },
  },
}  
```

  - Inserir a configuração no arquivo `Jenkinsfile`:
```
post {
  always {
    junit 'test-result/junit.xml'
  }
}  
```

- **Step 10 - Imagem do Codeceptjs no Docker:** Acessar o link [CodeceptJS + Docker](https://codecept.io/docker.html#codeceptjs-docker) e utilizar a imagem mais recente disponível, e colocar opção `false` no campo `show`
```
exports.config = {
  tests: './tests/e2e/Login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      show: false,
    },
  },
}  
```

- **Step 11 - Configuração do HTML Report:** Executar as seguintes etapas:
  - Instalar o relatório HTML
```
npm i mochawesome
```
- .
  - Executar o comando abaixo no path: Dashboard > Manage Jenkins > section “Tools and actions” > Script Console:
```
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "sandbox allow-scripts;")
```
- .
  - Acessar a configuração da pipeline no path: Configuração > Pipeline > Pipeline Syntax > selecionar os campos:

```
  **Sample Step:** publishHTML: Publish HTML reports
  **publishHTML:** output
  **Index page[s]:** mochawesome.html
  **Report title** {nome_relatorio_dashboard}
```
- .
  - Clique no botão 'Generate Pipeline Script > copia o código informado > cola no Jenkinsfile