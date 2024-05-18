COMANDOS EXECUTADOS
npx codeceptjs init
npm install codeceptjs playwright --save
npm init
npx playwright install
npm install --save js-yaml
npm i dotenv

prettier eslint
npm install prettier 
npm install eslint -D 
npm init @eslint/config 
npm install eslint-config-airbnb-base 
npm install --save-dev eslint-plugin-prettier 
npm install --save-dev eslint-plugin-prettier eslint-config-prettier 
npm install --save-dev lint-staged

husky
npm install husky --save-dev 
npm install -g git-cz 
npm install commitizen -g --force 
npm install --save-dev git-cz

OBS.: Copiar as pastas: .husky, changelog.config.js e adicionar comandos na pasta package.json: "scripts": { "prepare": "husky install", "precommit": "git add . ", "commit": "git cz && node .husky/push.js", },