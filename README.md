# Automação de Testes End-to-End com CodeceptJS + Playwright


## 🚀 INTRODUÇÃO:

O projeto de automação de testes end-to-end utilizando os frameworks CodeceptJS + Playwright, visa fornecer uma estrutura robusta para automatizar testes em aplicações web, com foco na eficiência e na integração contínua e entrega contínua (CI/CD) através da Pipeline do Jenkins. Utilizando as tecnologias mais recentes, como Docker e Docker Compose, juntamente com as melhores práticas de desenvolvimento, este projeto oferece uma solução completa para garantir a qualidade do software em cada etapa do ciclo de desenvolvimento. Como base para os testes, utilizamos a plataforma [Seu Barriga](https://seubarriga.wcaquino.me/login) como template, proporcionando um cenário realista para os casos de teste.

## 💻 TECNOLOGIAS:

- VS Code
- Node.js
- Java 11
- CodeceptJS
- Playwright
- JavaScript
- Jenkins
- Docker
- Docker Compose
- CI/CD

## 🤖 CONFIGURAÇÕES:

- Clonar o projeto na máquina local
- Executar no terminal do diretório do projeto o comando:

```
'npm install'
```

- Informar os dados necessários no arquivo dotEnv:

```
# Navegador a ser utilizado durante os testes
BROWSER='chromium'

# Ao executar os testes através do Docker preencher 'true', caso contrário, preencher com 'false'
DOCKER=false
```
- Executar todos os testes:

```
npm run regression
```

- Executar o teste através de tag:

```
npm run tag '@nome_tag'
```

## 📂 ESTRUTURA DO PROJETO:

| Diretório       | Finalidade                                                                             |
| --------------- | -------------------------------------------------------------------------------------- |
| ./husky         | Configuração da automação dos commits                                                  |
| ./helpers       | Configuração com Custom Commands e Hooks com funções utilizadas na automação           |
| ./resource/conf | Documentos pertinentes a configurações realizadas durante o projeto                    |
| ./resource/data | Credenciais para logar na aplicação                                                    |
| ./tests         | Testes E2E, e pages concernentes aos testes automatizados                              |


## DOCKER
Para executar os testes através do Docker, utilizar os seguintes comandos no terminal do VS Code

- Contruir a imagem do Docker

```
docker build -t {nome_imagem_docker} .
```

- Para removar/excluir a imagem do Docker, execute o comando abaixo:
```
docker rmi {nome_imagem_docker}
```

- Para executar os testes, é através do comando no terminal do VS Code
```
docker run --rm -v "${PWD}/output:/usr/src/app/output" {nome_imagem_docker}
```

## TESTES CONTINUOS ATRAVÉS DO DOCKER COMPOSE - JENKINS

### Configuração:
- Instalar o Docker Compose Desktop,
- Baixar o arquivo do Docker Compose localizado em `./resources/conf`,
- Inicializar a imagem do Docker Compose acessando o terminal no diretório do que foi feito download e executando o seguinte comando:
```
<!-- Construir a imagem do Docker Compose -->
docker build -t {nome_docker_compose} .

<!-- Inicializar o Jenkins através do Docker Compose -->
docker compose up -d
```
- Encerrar o Jenkins do Docker Compose, execute o seguinte comando no terminal:
```
docker compose down
```

## CONCLUSÃO:

Ao longo deste projeto, alcançamos diversos objetivos essenciais, desde a construção de testes automatizados até a implementação de uma pipeline de CI/CD eficiente. Utilizando as tecnologias mais recentes e modernas, conseguimos criar uma estrutura sólida e escalável para garantir a qualidade do software.

## 📷 Evidência dos testes:



## 🔗 Links para Apoio:
- [Tutorial do CodeceptJs + Playwright](https://codecept.io/playwright/#setup)
- [Helpers do CodeceptJs + Playwright](https://codecept.io/helpers/Playwright/)
- [CodeceptJs - Continuous Integration](https://codecept.io/continuous-integration/#recipes)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Hub Docker](https://hub.docker.com/)
- [Jenkins - Configuring Content Security Policy](https://www.jenkins.io/doc/book/security/configuring-content-security-policy/)