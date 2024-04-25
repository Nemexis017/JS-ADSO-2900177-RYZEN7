let suma = 0;
let num = parseInt(prompt("Ingrese un número entero positivo"));
if (num < 1) {
    console.log("El número ingresado no es valido, debe ser un número entero positivo mayor a 0");
}
else{
    for (let i = 2; i >= num; i++) {
        suma = suma + i;
    }
    console.log("la suma de todos los números pares desde 1 hasta "+num+" es: "+suma);
}