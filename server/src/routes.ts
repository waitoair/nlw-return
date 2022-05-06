import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer';


export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7f8d62c8612a94",
    pass: "032dbd23b7065f"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = 

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