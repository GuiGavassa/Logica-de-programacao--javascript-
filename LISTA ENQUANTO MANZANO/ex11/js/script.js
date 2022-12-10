function calcu() {
    let contadora = 0
    let area = 0
    let auxiliar = 0
    let confirmado = 0

    while (contadora == 0) {


        let comodo = parseInt(prompt("Identifique o Cômodo:"))
        let largura = parseInt(prompt("Insira o valor da largura do cômodo:"))
        let comprimento = parseInt(prompt("Insira o valor do comprimento do cômodo:"))

        area = largura * comprimento
        auxiliar = auxiliar + area

        let confirmado = parseInt(prompt("Deseja adicionar algum cômoodo? 1 - SIM | 2 - NÃO"))
        if (confirmado == 2) {
            contadora++;
        }
    }
    document.write("A área dos cômodos é igual a: " + auxiliar)
}