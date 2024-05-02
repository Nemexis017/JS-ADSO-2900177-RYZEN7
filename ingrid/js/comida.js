let comidaop
let tipo_comidaop
let precio
let cantidad
let total
let comida

function respuestaComida(){
	switch (comida) {
		case 1:
			comidaop = parseInt(prompt(`1- sancocho y pollo sudado\n2- crema de verdura y alitas BBQQ\n3- sopa de maiz y pechuga gratinada`))
			return comidaop
		case 2:
			comidaop = parseInt(prompt(`4- pollo sudado\n5- alitas BBQQ\n6- pechuga gratinada`))
			return comidaop
		case 3:
			comidaop = parseInt(prompt(`7- sancocho\n8- crema de verdura\n9- sopa de maiz`))
			return comidaop
		case 4:
			alert("Gracias por su visita");
			break;
		default:
			alert("Seleccion incorrecta")
			return comidaop = 0
	}
}

do{
	nombre = prompt("ingrese nombre del cliente");
	comida = parseInt(prompt(`1-almuerzos completo\n2-bandeja\n3-sopa\n4-Salir`));
	comidaop = respuestaComida(); 
	switch (comidaop) {
		case 1:
			precio = 12.000
			alert("El precio del almuerzo es: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
	
		case 2:
			precio = 17.000
			alert("El precio del almuerzo es: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
		
		case 3:
			precio = 19.000
			alert("El precio del almuerzo es: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;

		case 4:
			precio = 8.000
			alert("El precio de la bandeja: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
		case 5:
			precio = 12.000
			alert("El precio de la bandeja: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
		case 6:
			precio = 19.000
			alert("El precio de la bandeja: "+precio.toFixed(3))
			cantidad = parseInt(prompt("ingrese la cantidad "))
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
		case 7:
			precio = 4.000
			alert("El precio de la sopa es: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
		case 8:
			precio = 5.000
			alert("El precio de la sopa es: "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;
		case 9:
			precio = 4.000
			alert("El precio de la sopa es : "+precio.toFixed(3))
			cantidad = prompt("ingrese la cantidad ")
			total = precio * cantidad
			alert("El precio es: " + total.toFixed(3))
			break;

			
		default:
			alert("seleccion incorecta")
			break;

	}

}while(comida < 4)
