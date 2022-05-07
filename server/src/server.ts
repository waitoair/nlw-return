import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informaçoes
// POST = Cadastrar informaçoes
// PUT = Atualizar informaçoes de uma entidade
// PATCH = Atualizar informaçao única de uma entidade
// DELETE = Deletar uma informaçao

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running!")
});