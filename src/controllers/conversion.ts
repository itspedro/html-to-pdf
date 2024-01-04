import express from 'express';
import htmlToPdf from '../helpers/html-to-pdf';
const router = express.Router();

router.post('/', async (req: any, res: any) => {
  const { html } = req.body;

  if (!html) {
    return res.status(400).send('Parâmetro faltando: HTML');
  }

  const pdf = await htmlToPdf(html);
  res.contentType('application/pdf');
  res.send(pdf);
});

export default router;