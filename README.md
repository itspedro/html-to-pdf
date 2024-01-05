# HTML ➞ PDF
<div align="right">
  <a href="#">
    pt
    <img width="20px" src="https://flagicons.lipis.dev/flags/4x3/br.svg" />
  </a>
  <a href="https://github.com/itspedro/html-to-pdf/blob/main/README-en.md">
    en
    <img width="20px" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" />
  </a>
</div>

---

Para usar clone o repositorio 

```bash
git clone https://github.com/itspedro/html-to-pdf.git
cd html-to-pdf
```

Instale as dependencias

```bash
npm install
```

Inicie o servidor

```bash
npm run start
```

As requisições são feitas no endpoint `/conversion` usando o método `POST` passando o html no corpo da requisição com o formato `application/json`

```json
{
  "html": "<h1>Hello World</h1>"
}
```
