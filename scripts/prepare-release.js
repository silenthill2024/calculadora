const fs = require("fs");
const path = require("path");

const origen = path.join(__dirname, "..");
const destino = path.join(origen, "dist");

const archivos = [
    "index.html",
    "operaciones.js",
    
];

if (fs.existsSync(destino)) {
    fs.rmSync(destino, {
        recursive: true,
        force: true
    });
}

fs.mkdirSync(destino, {
    recursive: true
});

for (const archivo of archivos) {
    const rutaOrigen = path.join(origen, archivo);
    const rutaDestino = path.join(destino, archivo);

    if (fs.existsSync(rutaOrigen)) {
        fs.copyFileSync(rutaOrigen, rutaDestino);
        console.log(`Copiado: ${archivo}`);
    } else if (archivo === "index.html") {
        throw new Error("No se encontro index.html");
    }
}

console.log("Entorno de liberacion preparado correctamente.");