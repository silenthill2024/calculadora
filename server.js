
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Publicar los archivos de la calculadora.
app.use(express.static(__dirname));

// Ruta principal.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Calculadora disponible en el puerto ${PORT}`);
});
