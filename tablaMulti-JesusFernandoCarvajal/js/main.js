


window.addEventListener('load', ()=>{
    function menu(){
        console.log("==========================================")
        console.log("                TABLAS MULTIPLICAR        ")
        console.log("==========================================")
    }
    
    document.getElementById("calcular").addEventListener('click', ()=>{
        let tabla = document.getElementById("tablaNumber").value;
        let resultado= "";
        let acumulador;
        count = 0;
        while(count < 10){
            count++
            acumulador = tabla * count
            resultado += `${tabla} X ${count} = ${acumulador} </br>`;
        }


        document.write(resultado)
    })
    
   
})
