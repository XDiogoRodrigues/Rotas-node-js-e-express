const express = require("express");
const router = express.Router();
const path = require("path");

const pathBase = path.join(__dirname, "../templates");

router.get("/email", (req, res) => {
  res.sendFile(`${pathBase}/email.html`);
});

module.exports = router;
