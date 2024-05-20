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

- **Step 8 - Instalar plugin do Docker no Jenkins:** Para executar a Pipeline no Jenkins em um contâiner do Docker, é necessário instalar o plugin 'Docker Pipeline'