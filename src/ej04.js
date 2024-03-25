import fs from 'fs';

const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";

console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    fs.readFile(origen, 'utf8', function(error, data) {
    if (error) {
        console.error('Error al leer el archivo origen:', error);
        return;
    }
    fs.writeFile(destino, data, function(error) {
        if (error) {
            console.error('Error al escribir en el archivo destino:', error);
            return;
        }
        console.log(`El archivo "${origen}" se ha copiado como "${destino}" exitosamente.`);
    });
});

}