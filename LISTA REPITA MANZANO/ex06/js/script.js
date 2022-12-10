function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let contadora = 0;
    let valoresLidos = 0;
    let soma = 0;
    
    do {
        let valor = parseInt(prompt("Adicione um número | Números adicionados: "+valoresLidos));

        if (valor < 0) {
            contadora++;
            valor = 0;
        }
        soma = valor+soma;
        valoresLidos++;
    } while (contadora < 1);

    let media = soma / valoresLidos

    document.write("O total da soma dos" + valoresLidos + " números é de: " + soma+ "</br>");
    document.write("A média dos valores é igual a "+media)


}