const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile("C:/Users/Augusto/Documents/Projetos/exxograf-site/index.html");
})

app.listen(8081, function () {
    console.log("Servidor Rodando na url http://localhost:8081");
});