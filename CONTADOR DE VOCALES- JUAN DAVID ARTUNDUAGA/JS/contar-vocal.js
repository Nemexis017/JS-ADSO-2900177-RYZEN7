// contador de vocales
//Juan David Artunduaga Gómez
//25 de abril del 2024
function contV(c) {
    let contador = 0;
    for (let letra of c) {
        if ('aeiouAEIOU'.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
function contC(c) {
    let contador = 0;
    for (let letra of c) {
        if (/[a-zA-Z]/.test(letra) && !'aeiouAEIOU'.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
function contVAndC(frase) {
    let vocales = contV(frase);
    let consonantes = contC(frase);
    return { vocales, consonantes };
}
let frase = prompt("Ingrese una frase:");
let { vocales, consonantes } = contVAndC(frase);
alert("La frase '" + frase + "' tiene " + vocales + " vocal(es) y " + consonantes + " consonante(s).");