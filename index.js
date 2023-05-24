const express = require("express");
const router = require("./public/js/rotas");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static("public"));


app.use("/", router);

app.listen(3000);