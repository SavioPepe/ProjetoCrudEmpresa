<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://vuejs.org/" target="_blank">
    <img src="https://vuejs.org/images/logo.png" width="120" alt="Vue.js Logo" />
  </a>
</p>

<p align="center">
  Projeto CRUD de Empresas usando <strong>NestJS</strong> (Backend) e <strong>Vue.js</strong> (Frontend)
</p>

---

## Descrição

Este repositório contém:
- **Backend**: construído com o [NestJS](https://nestjs.com/) (TypeScript).
- **Frontend**: construído com o [Vue.js](https://vuejs.org/).

---

## Sumário

- [Instalação](#instalação-backend)
- [Tecnologias Adicionais](#tecnologias-adicionais)


---


## Instalação 

```bash

### Instalação (BackEnd)
cd backend
npm install

# Modo watch (reinicia ao salvar)
npm run start:dev

### Instalação (FrontEnd)

cd interface
npm install


### rodar FrontEnd

npm run serve


# Modo de desenvolvimento
npm run start


# Modo de produção
npm run start:prod

# Modo de produção

npx prisma generate
```

---
## Tecnologias Adicionais

- **JWT (JSON Web Tokens):**  
  Utilizado para autenticação stateless. O backend gera um token JWT para cada usuário autenticado, permitindo validar requisições sem a necessidade de manter sessões no servidor.

- **Prisma (ORM):**  
  Um ORM moderno que simplifica a interação com o banco de dados, oferecendo tipagem estática, migrações automatizadas e facilitando as operações de CRUD.

- **Axios:**  
  Biblioteca para realizar requisições HTTP de forma simples e intuitiva, utilizada tanto no frontend quanto no backend para integrar com APIs e gerenciar a comunicação assíncrona.

- **Swagger:**
  Ferramenta de documentação interativa que permite visualizar e testar os endpoints da API diretamente pelo navegador.
