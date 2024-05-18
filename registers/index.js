const express = require("express");
const router = express.Router();
const path = require("path");
const chalk = require("chalk");

const basePath = path.join(__dirname, "../templates");

router.get("/register_product", (req, res) => {
  res.sendFile(`${basePath}/register.html`);
});

router.post("/register_data", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log(chalk.bgBlue.white(`Email: ${email}\nPassword: ${password}`));
});

module.exports = router;
