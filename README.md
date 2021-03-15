<p  align="center">
<img  src="https://distrito.me/wp-content/uploads/2020/01/Logo_inGaia-600x338.png"  width="200"  alt="inGaia Logo" />
</p>
<h3  align="center">Desafio Técnico - Filipe N. Abrantes</h3>

## Descrição

API que retorna o valor do metro quadrado para cálculo do valor do imóvel.

## Tecnologias

- NestJS
- Typescript
- NodeJS
- Jest

## Requisitos

- Provê uma API que retorne o valor do metro quadrado;

- Simular valor como se viesse da base de dados.

## Instalação

```bash
$ yarn install
```

## Executando o projeto

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Testes

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov

```

## Exemplo de request

`endpoint: /meter-value?meter=200`

UI Swagger no Heroku: [Acessar](https://ingaia-challenge-api.herokuapp.com/api)
