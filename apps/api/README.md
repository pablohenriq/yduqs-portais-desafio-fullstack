## Yduqs Portais Desafio Fullstack - API

### Pré-requisitos

- Node.js (v18+)
- pnpm
- PostgreSQL

### Instalação

Na raiz do projeto rode:

```bash
$ pnpm install
```

### Configuração de Ambiente

1. Copie `.env.sample` para `.env` em `apps/api/`.
2. Configure `DATABASE_URL` (ex.: `postgresql://usuario:senha@localhost:5432/banco`).

### Executando a Aplicação

Para rodar a aplicação em modo de desenvolvimento, na raiz do projeto:

```bash
$  pnpm --filter @yduqs-portais-desafio-fullstack/api run dev
```

## Executar Testes

Para rodar os testes unitários:

```bash
$ pnpm run test
```

Para rodar os testes e2e:

```bash
$ pnpm run test:e2e
```
