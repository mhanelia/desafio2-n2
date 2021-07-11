# Desafio Agilizei N2

Desafio do Chapter #2 proposto no Bootcamp de Cypress ministrado pelo @samlucax

Consiste em validar o cadastro no <http://automationpractice.com> através do uso de rotas e utilizando o padrão Page Objects

![all-passed](https://github.com/mhanelia/desafio2-n2/blob/master/doc/allPassed.png)

## Ferramentas utilizadas

[Node.js](https://nodejs.org/)

[Framework: Cypress](https://www.cypress.io/)

[lib: faker](https://github.com/Marak/Faker.js)

## Instalação

1- instalar o Node.js

2- criar uma pasta para o projeto

3- abra o terminal na pasta

4- para iniciar um projeto node digite:

```bash
npm init -y
```

5- após iniciar o projeto, basta instalar o Cypress:

````bash
npm install -D cypress
````

6- para instalar a lib faker, digite:

````bash
npm i -D faker
````

7- com o Cypress instalado, basta executar a primeira vez para que os arquivos sejam criados:

````bash
npx cypress open
````

## Exemplos de outros modos de execução das specs

1- executar via terminal utilizando determinado navegador:

````bash
npx cypress run --browser chrome --headless
````

![browser-chorme](https://github.com/mhanelia/desafio2-n2/blob/master/doc/chrome.png)

dessa forma, o Cypress irá executar em background utilizando o Chrome, outros valores no lugar de `chrome` são: `firefox`, `edge` e `electron`

caso você deseje visualizar a execução, basta remover `--headless`

obs: no caso do Firefox e Microsoft Edge lembre-se de já ter instalado o navegador em sua máquina.

2- executando apenas uma spec via terminal:

muita das vezes é necessário executar apenas uma spec, para isso adicionamos o paramentro `--spec` e informamos o caminho do arquivo, ficaria dessa forma:

````bash
npx cypress run --spec cypress/integration/login.spec.js
````

nesse caso, o navegador é opicional. Caso nenhum navegador seja informado, por padrão será executado no Electron:

![spec-electron](https://github.com/mhanelia/desafio2-n2/blob/master/doc/spec.png)

## Uso de rotas e validações

As rotas de uma aplicação também podem ser utilizadas no Cypress. Neste desafio, as rotas foram utilizada para as assertivas mas também poderiam ser utilizadas para criação de mocks.

Como a versão do Cypress aqui é a 7.6.0, foi utilizado o comando `cy.intercept` no lugar do `cy.route` que está depreciado desde a versão 6.0.0.

Documentação para utilização do *intercept*: <https://docs.cypress.io/api/commands/intercept>
