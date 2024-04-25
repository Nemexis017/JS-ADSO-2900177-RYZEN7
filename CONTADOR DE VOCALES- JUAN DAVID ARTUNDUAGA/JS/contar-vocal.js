// contador de vocales
//Juan David Artunduaga Gómez
//25 de abril del 2024

// Definición de variables
// Función para contar las vocales en una cadena
function contarVocales(cadena) {
    let contador = 0;
    for (let letra of cadena) {
        if ('aeiouAEIOU'.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

// Función para contar las consonantes en una cadena
function contarConsonantes(cadena) {
    let contador = 0;
    for (let letra of cadena) {
        if (/[a-zA-Z]/.test(letra) && !'aeiouAEIOU'.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

// Función para contar vocales y consonantes en una frase
function contarVocalesYConsonantes(frase) {
    let vocales = contarVocales(frase);
    let consonantes = contarConsonantes(frase);
    return { vocales, consonantes };
}

// Entrada de datos
let frase = prompt("Ingrese una frase:");

// Conteo de vocales y consonantes
let { vocales, consonantes } = contarVocalesYConsonantes(frase);

// Salida de datos
alert("La frase '" + frase + "' tiene " + vocales + " vocal(es) y " + consonantes + " consonante(s).");
