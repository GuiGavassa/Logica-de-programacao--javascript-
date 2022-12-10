function calcu() {
    let contadora = 0
    let resultado = 0
    let total = 0

    while (contadora <10) {
        let valor = parseInt(prompt("Valores Inseridos: "+ contadora + "</br> Digite um valor:"))

        resultado = resultado + valor
        contadora++;
    }
    total = resultado/contadora
    document.write("APERTE F5 PARA VOLTAR </br></br>")
    document.write("A média dos " + contadora + " valores inseridos é: " + total)
}