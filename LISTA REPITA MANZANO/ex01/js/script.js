function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let numero = 15
    
    do {
        let resultado = numero*numero;
        document.write(numero + " ao quadrado é igual a " + resultado+"</br>");
        numero = numero + 1; 
    } while (numero <= 200);

}