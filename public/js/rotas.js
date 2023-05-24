const express = require("express");
const router = express.Router();
const {paginaPrincipal} = require("./controladores/produto");

router.get("/principal", paginaPrincipal);

module.exports = router;