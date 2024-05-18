const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/product", (req, res) => {
  res.sendFile(`${basePath}/product.html`);
});

module.exports = router;
