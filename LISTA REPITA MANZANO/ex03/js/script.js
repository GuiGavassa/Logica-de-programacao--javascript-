function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let numero = 1
    
    do {
        let difNumero = numero % 4;

        if (difNumero == 0) {
            document.write(numero+ "</br>")
        }

        numero++;
    } while (numero <= 200);

}