function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let numero = parseInt(prompt("Digite um número:"));
    let resultado = 0
    let contadora = 0

    while (contadora <= 10) {
        resultado = contadora*numero;
        document.write(contadora + " x " + numero + " = " + resultado + "<br>");
        contadora++;
    }

}