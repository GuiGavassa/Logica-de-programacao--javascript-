function calcu() {
    let contadora = 0
    let verifica = 0
    document.write("Aperte F5 para voltar.</br></br>")
    while (contadora <=20) {
        verifica = contadora % 2;
        if (verifica != 0) {
            document.write("O número " + contadora + " é ímpar. </br>")
        }
        contadora++;
    }
}