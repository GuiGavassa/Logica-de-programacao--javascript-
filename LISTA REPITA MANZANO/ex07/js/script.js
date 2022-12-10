function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let numero = 0
    let auxiliar = 1
    let contador = 1
    let impar = 0
    
    do {
        numero = numero + 1;
        impar= numero % 2;
        if (impar != 0) {
            auxiliar = contador*auxiliar
            document.write(auxiliar+"</br>")
        }
        
        contador++;
    } while (contador < 10);

    document.write("</br>O resultado do fatorial dos números ímpares é: " + auxiliar)
}
