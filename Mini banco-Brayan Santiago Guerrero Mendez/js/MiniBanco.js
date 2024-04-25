let operaciones
let sueldo
let retiro
let ingreso
let operacionR

sueldo = 1000000



operacionR = prompt("Desea ingresar al sistema si/no")



if (operacionR == "si") {
    
    do{
        operaciones = prompt("Que operacion desea realizar: 1.Consultar sueldo 2.Retiro 3.Ingreso 4.Salir")
        if (operaciones == 1) {
            alert("Su sueldo es de: " + sueldo)
    
        }else if (operaciones == 2) {
            retiro =parseFloat(prompt("Cuanto dinero desea retirar"))
            if (retiro <= 0 ) {
    
                alert("Saldo insuficiente")
    
    
            }else{
               
                alert("Retiro con exito")
                sueldo = sueldo - retiro
                alert("Su nuevo sueldo es de: " + sueldo)
            }
        }else if (operaciones == 3) {
        ingreso = parseFloat(prompt("Cuanto dinero desea ingresar"))    ;
            alert("Ingreso con exito")
            sueldo = sueldo + ingreso
            alert("Su nuevo sueldo es de: " + sueldo)
    
        }else if (operaciones == 4) {
            alert("Gracias por su visita")
        }else{
            alert("Operacion no valida")
        }
    }while(operaciones < 4)
    

}else{
    alert("Gracias por su visita")
}