# HTML ➞ PDF
<div align="right">
  <a href="https://github.com/itspedro/html-to-pdf/blob/main/README.md">
    pt
    <img width="20px" src="https://flagicons.lipis.dev/flags/4x3/br.svg" />
  </a>
  <a href="#">
    en
    <img width="20px" src="https://flagicons.lipis.dev/flags/4x3/gb.svg" />
  </a>
</div>

---

To use clone the repository

```bash
git clone https://github.com/itspedro/html-to-pdf.git
cd html-to-pdf
```

Install the dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

Requests are made to the `/conversion` endpoint with `POST` method passing the html in the request body with the `application/json` format

```json
{
  "html": "<h1>Hello World</h1>"
}
```
