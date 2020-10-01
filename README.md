<div align="center">
<img src="https://svgshare.com/i/QA4.svg" alt="App logo" />
<br><br>
<img src="https://img.shields.io/badge/database-MongoDB-brightgreen alt="MongoDB badge" />
<img src="https://img.shields.io/badge/server-Node.js-brightgreen alt="Node.js badge" />
<img src="https://img.shields.io/badge/mobile-React%20Native-blue" alt="React Native badge" />
<br>
<img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue" alt="TypeScript badge" />
<br>
<br>
<span>Projeto desenvolvido para processo seletivo da <strong>Equipe Codificar</strong></span><br>
  <a href="https://drive.google.com/file/d/113WvzzoXR6-uSNYr6nTVcaeYnwtBufHY/view?usp=sharing">Baixar APK</a>
</div>

## :page_facing_up: Descrição
O **Parlador Ideal** é uma ferramenta de microblogging para compartilhamento de ideias, pensamentos e projetos pessoais.

## :wrench: Requisitos
- É **necessário** ter o [Docker](https://docs.docker.com/get-docker/) instalado.
- É **necessário** ter o [Node](https://nodejs.org/en/download/) instalado.
- É **necessário** ter o [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install) instalado.

## :boom: Como executar

#### Servidor
```sh
# na pasta server
$ yarn # instala as dependências
$ docker-compose up # cria container com mongodb no docker
```

**Testes**
```sh
# na pasta server
$ yarn test
# ou
$ yarn test:coverage
```

#### App
```sh
# na pasta mobile
$ npm install expo-cli --global # instala o expo globalmente
$ expo install # instala as dependências
$ yarn start # inicia o aplicativo em modo de desenvolvimento
```

### ATENÇÃO
Para testar o aplicativo diretamente no dispositivo, é necessário trocar a URL da API de ```localhost``` para o IP local que está hosteando o servidor.

Altere em ```mobile/src/services/api.ts```

As portas estão definidas como:
```
MongoDB: 30000
Servidor: 8080
```

**Caso altere alguma porta, é necessário trocar na URL da API e no arquivo ```server/.env```**
