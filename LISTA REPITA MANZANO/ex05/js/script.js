function calcu() {
    document.write("Aperte F5 para voltar. </br></br>")

    let contadora = 0;
    let soma = 0;
    
    do {
        let numero = parseInt(prompt("Adicione um número | Números adicionados: "+contadora));
        soma = numero + soma;
        contadora++
    } while (contadora < 15);

    document.write(soma);

}