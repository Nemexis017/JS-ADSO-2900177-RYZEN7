let operaciones
let sueldo
let retiro
let ingreso
let operacionR

sueldo = 0;






    menu = `Que operacion desea realizar: \n 1.Consultar sueldo \n 2.Retiro \n 3.Ingreso \n 4.Salir`
    do{
        operaciones = prompt(menu)
        if (operaciones == 1) {
            alert("Su sueldo es de: " + sueldo)
    
        }else if (operaciones == 2) {
            retiro =parseFloat(prompt("Cuanto dinero desea retirar"))
            if (retiro > sueldo || retiro <= 0) {
    
                alert("Saldo insuficiente")
            }else{
               
                alert("Retiro con exito")
                sueldo = sueldo - retiro
                alert("Su nuevo sueldo es de: " + sueldo)
            }
        }else if (operaciones == 3) {
        ingreso = parseFloat(prompt("Cuanto dinero desea ingresar"));
            if (ingreso <= 0) {
                alert("El ingreso debe ser mayor de 0")
            }else{
                sueldo = sueldo + ingreso
                alert("Ingreso con exito")
                alert("Su nuevo sueldo es de: " + sueldo)
            }

    
        }else if (operaciones == 4) {
            alert("Gracias por su visita")
        }else{
            alert("Operacion no valida")
        }
    }while(operaciones < 4)
    

