function calcu() {

    let contadora = parseInt(0)
    let divCont = parseInt(0)
    let numero = parseInt(50)
    let soma = parseInt(0)
    let media = parseInt(0) 

    while (contadora <= 20) {
        divCont = numero % 2
        if (divCont == 0) {
            soma = soma + numero
        }
        numero = numero + 1
        contadora++;
    }
    media = soma/(contadora/2)

    document.write("O resultado da soma dos valores pares entre 50 e 70 é de: " + soma + "</br>");
    document.write("A média entre os valores pares entre 50 e 70 é igual a:" + media)
}