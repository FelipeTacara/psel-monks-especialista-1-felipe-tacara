# psel-monks-especialista-1-felipe-tacara

Projeto em React.js e Vite com backend em Wordpress para vaga de especialista em desenvolvimento web Monks.

## Para rodar o projeto

1. Entre na pasta `wordpress`:

```
  cd wordpress
```

2. Construa e suba os containers do Docker:

```
docker compose build
docker compose up -d
```

3. Acesse o Wordpress em:
   http://localhost:8000/wp-admin

Usuário: Felipe

Senha: sitewordpressmonks

### Banco de Dados MySQL

Banco: wordpress

Usuário: wordpress

Senha: wordpress

Root password: root

## Frontend

1. Entre na pasta `front-end`:

```
cd frontend
```

2. Instale dependências e rode o frontend:

```
npm install
npm run dev
```

## Wordpress

Para alterar e/ou inserir textos e imagens utilize os custom posts localizados no menu.

![Menu com custom components](public/menu-custom-components.png)
