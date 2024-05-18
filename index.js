const express = require("express");
const app = express();
const chalk = require("chalk");
const port = 4000;
const path = require("path");
const registers = require("./registers/index");
const sobres = require("./sobres/index");
const products = require("./products/index");
const emails = require("./emails/index");

const basePath = path.join(__dirname, "templates");

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/registers", registers);
app.use("/sobres", sobres);
app.use("/products", products);
app.use("/emails", emails);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.listen(port, () => {
  console.log(chalk.bgBlue.black(`Servidor rodando na porta: ${port}`));
});
