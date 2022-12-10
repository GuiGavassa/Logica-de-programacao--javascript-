function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let contador = 0;
    let auxiliar = 0;
    let numero = 1;
    
    do {
        document.write(auxiliar+"</br>");
        auxiliar = (auxiliar + auxiliar)+ numero
        contador++;
    } while (contador <= 64);

}