const path = require("path");

const paginaPrincipal = (req, res) => {
    const filePath = path.join(__dirname, "../../../index.html")
    res.sendFile(filePath);
}

module.exports = {
    paginaPrincipal
}