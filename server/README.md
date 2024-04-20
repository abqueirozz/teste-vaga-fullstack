
# Backend 

## Sobre o projeto

Implementação focada em expor o a arquitetura e patterns escolhidos, bem como a escalabilidade do código.

## Tecnologias Utilizadas

- Node
- Express
- Docker
- Prisma
- open-api
- Lint
- Typescript


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE_URL`:postgresql://postgres:123456@localhost:5432/kronoos?schema=public

`PORT`: 3000

## Server up

Atente-se
### `node => v20.12.2 `
### `Docker precisa estar inciado para subir o docker compose`


Para fazer o deploy desse projeto rode

```bash
  npm instal
  docker-compose up -d
  npx prisma migrate
  npm run dev
```

## Funcionalidades

- Salva em um banco de dados o arquivos em csv
- Pagina em requests de consulta desse banco

