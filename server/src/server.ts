import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informaçoes
// POST = Cadastrar informaçoes
// PUT = Atualizar informaçoes de uma entidade
// PATCH = Atualizar informaçao única de uma entidade
// DELETE = Deletar uma informaçao

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f8d62c8612a94",
    pass: "032dbd23b7065f"
  }
});

app.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Luana Saraiva <saraivaluana20@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p> Tipo do feedback: ${type} </p>`,
      `<p> Comentário: ${comment} </p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
  console.log("HTTP server running!")
});