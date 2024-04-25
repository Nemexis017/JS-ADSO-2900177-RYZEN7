function sumNumPar(pnum) {
    let num = pnum;
    let suma = 0;
    if (num < 1 || isNaN(num)) {
    return "El número ingresado no es válido. Debe ser un número entero positivo.";
    } else {
        for (let i = 2; i <= num; i = i + 2) {
            suma = suma + i;
        }
        return suma;
    }
}

function sumNumImp(pnum) {
    let num = pnum;
    let suma = 0;
    if (num < 1 || isNaN(num)) {
    return "El número ingresado no es válido. Debe ser un número entero positivo.";
    } else {
        for (let i = 1; i <= num; i = i + 1) {
            if (i % 2 == 0) {
                suma = suma
            }else{
                suma = suma + i;
            }
        }
        return suma;
    }
}