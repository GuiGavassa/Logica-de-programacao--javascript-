function calcu() {
    let contadora = 0
    let resultado = 0
    document.write("APERTE F5 PARA VOLTAR </br> </br>")
    while (contadora <= 15) {
    let numero = 3;
    resultado = resultado * numero 
        if (resultado==0) {
            resultado = resultado + 1
        }
        document.write(numero + " elevado a " + contadora + " é igual a: " + resultado + "</br>");
        contadora++
    }
}